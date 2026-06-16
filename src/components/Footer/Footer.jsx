import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        <span className={styles.line1}>IT&apos;S NOT YOUR BUSINESS ANYMORE.</span>{' '}
        <span className={styles.line2}>IT&apos;S OURS. &copy;&nbsp;ZyvraLife 2026</span>
      </p>
    </footer>
  )
}
