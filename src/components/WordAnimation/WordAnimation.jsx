import { useState, useEffect, useRef } from 'react'
import styles from './WordAnimation.module.css'

const WORDS = ['SEE.', 'THINK.', 'ANALYZE.', 'BUILD.', 'COMING SOON.']
const AMBER = '#F5A623'

const TYPE_MS      = 82    // ms per character
const HOLD_MS      = 750   // pause after fully typed
const CS_HOLD_MS   = 1800  // hold for COMING SOON.
const PHASE1_MS    = 800   // phase 1: slide to -18vw duration
const PHASE1_PAUSE = 350   // pause between phase 1 and phase 2
const EXIT_MS      = 1300  // phase 2: continue slide + fade duration
const NEXT_DELAY   = 200   // ms after exit starts → begin next word
const GHOST_MS     = 400   // buffer after phase 2 before DOM removal

let uid = 0

function useIsMobile() {
  const [v, setV] = useState(() => window.innerWidth < 768)
  useEffect(() => {
    const fn = () => setV(window.innerWidth < 768)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return v
}

export default function WordAnimation() {
  const [items, setItems] = useState([])
  const isMobile = useIsMobile()
  const dead = useRef(false)

  useEffect(() => {
    dead.current = false
    const pending = []
    const after = (fn, ms) => { const t = setTimeout(fn, ms); pending.push(t) }
    const sleep  = ms => new Promise(r => after(r, ms))

    setItems([])
    let wordIdx = 0

    // ── state helpers ────────────────────────────────────────────────
    const push  = text => {
      const id = ++uid
      setItems(p => [...p, { id, text, len: 0, phase: 'in', exitPhase1: false, exitPhase2: false }])
      return id
    }
    const setLen        = (id, n)  => setItems(p => p.map(w => w.id === id ? { ...w, len: n }           : w))
    const setPhase      = (id, ph) => setItems(p => p.map(w => w.id === id ? { ...w, phase: ph }        : w))
    const setExitPhase1 = id       => setItems(p => p.map(w => w.id === id ? { ...w, exitPhase1: true } : w))
    const setExitPhase2 = id       => setItems(p => p.map(w => w.id === id ? { ...w, exitPhase2: true } : w))
    const drop          = id       => setItems(p => p.filter(w => w.id !== id))

    // ── DESKTOP loop (each call handles one word, then schedules next) ──
    async function runDesktop() {
      if (dead.current) return
      const word  = WORDS[wordIdx % WORDS.length]
      const isCS  = word === 'COMING SOON.'
      const id    = push(word)

      // type character by character
      for (let j = 1; j <= word.length; j++) {
        if (dead.current) return
        setLen(id, j)
        await sleep(TYPE_MS)
      }
      if (dead.current) return

      // hold
      await sleep(isCS ? CS_HOLD_MS : HOLD_MS)
      if (dead.current) return

      // exit: phase 1 after one frame (browser paints opacity:1 first), then phase 2 after pause
      setPhase(id, 'exit')
      after(() => setExitPhase1(id), 16)
      after(() => setExitPhase2(id), 16 + PHASE1_MS + PHASE1_PAUSE)

      // start next word while this one is still sliding
      after(() => { wordIdx++; runDesktop() }, NEXT_DELAY)

      // remove after phase 2 transition completes
      after(() => drop(id), 16 + PHASE1_MS + PHASE1_PAUSE + EXIT_MS + GHOST_MS)
    }

    // ── MOBILE loop (sequential, one word at a time) ─────────────────
    async function runMobile() {
      while (!dead.current) {
        const word = WORDS[wordIdx % WORDS.length]
        const isCS = word === 'COMING SOON.'
        const id   = push(word)

        setLen(id, word.length)
        await sleep(20)                       // let DOM paint at opacity 0
        setPhase(id, 'show')                  // fade in
        await sleep(380 + (isCS ? 1600 : 900)) // transition + hold
        setPhase(id, 'hide')                  // fade out
        await sleep(400)
        drop(id)
        await sleep(60)

        wordIdx++
      }
    }

    after(() => isMobile ? runMobile() : runDesktop(), 500)

    return () => {
      dead.current = true
      pending.forEach(clearTimeout)
    }
  }, [isMobile])

  // ── RENDER ────────────────────────────────────────────────────────
  const activeId = items.find(w => w.phase === 'in')?.id

  if (isMobile) {
    return (
      <div className={styles.mobileWrap}>
        {items.map(item => (
          <span
            key={item.id}
            className={`${styles.mWord} ${
              item.phase === 'show' ? styles.mShow :
              item.phase === 'hide' ? styles.mHide :
              styles.mOff
            }`}
            style={{ color: item.text === 'COMING SOON.' ? AMBER : '#fff' }}
          >
            {item.text.slice(0, item.len)}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className={styles.wrap}>
      {items.map(item => {
        const shown  = item.text.slice(0, item.len)
        const isCS   = item.text === 'COMING SOON.'
        const isExit   = item.phase === 'exit'
        const isPhase2 = isExit && item.exitPhase2
        const isPhase1 = isExit && item.exitPhase1 && !item.exitPhase2

        const tx         = isPhase2 ? '-90vw' : isPhase1 ? '-42vw' : '0'
        const opacity    = isPhase2 ? 0 : 1
        const transition = isPhase2
          ? `transform ${EXIT_MS}ms ease-in-out, opacity ${EXIT_MS}ms ease-in-out`
          : isPhase1
          ? `transform ${PHASE1_MS}ms cubic-bezier(0.4,0,0.2,1)`
          : 'none'

        return (
          <span
            key={item.id}
            className={`${styles.word} ${item.phase === 'in' ? styles.wordEnter : ''}`}
            style={{
              transform:  `translateX(${tx})`,
              opacity,
              color: isCS ? AMBER : '#fff',
              transition,
            }}
          >
            {shown}
            {item.id === activeId && shown.length > 0 && (
              <span className={styles.cursor} />
            )}
          </span>
        )
      })}
    </div>
  )
}
