import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import WordAnimation from './components/WordAnimation/WordAnimation'
import Footer from './components/Footer/Footer'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.mainprin}>
        <main className={styles.main}>
          <section className={styles.left}>
            <Hero />
          </section>
        </main>
        <main className={styles.main1}>
          <section className={styles.right}>
            <WordAnimation />
          </section>
        </main>
      </main>
      <Footer />
    </div>
  )
}
