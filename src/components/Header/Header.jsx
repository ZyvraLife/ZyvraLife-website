import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.Header}>
        <a href="#" className={styles.logo}>
          <img src="/logo.png" alt="ZyvraLife logo" className={styles.logoImg} />
          <div className={styles.logoText}>
            <span className={styles.zyvra}>ZYVRA</span>
            <span className={styles.life}>LIFE</span>
          </div>
        </a>
        <a href="/ZyvraLife_Credentials.pdf" download className={styles.btnDl}>
          <DownloadIcon />
          <span>THE WORK. DOWNLOAD</span>
        </a>
      </div>
    </header>
  )
}

function DownloadIcon() {
  return (
    <svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_3321_270)">
      <path d="M15.875 4V8.83333C15.875 9.1538 16.0023 9.46115 16.2289 9.68775C16.4555 9.91436 16.7629 10.0417 17.0833 10.0417H21.9167" stroke="#F9F9F9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19.5 25.75H7.41667C6.77573 25.75 6.16104 25.4954 5.70783 25.0422C5.25461 24.589 5 23.9743 5 23.3333V6.41667C5 5.77573 5.25461 5.16104 5.70783 4.70783C6.16104 4.25461 6.77573 4 7.41667 4H15.875L21.9167 10.0417V23.3333C21.9167 23.9743 21.6621 24.589 21.2088 25.0422C20.7556 25.4954 20.1409 25.75 19.5 25.75Z" stroke="#F9F9F9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.4584 20.9167V13.6667" stroke="#F9F9F9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.4375 17.8958L13.4583 20.9167L16.4792 17.8958" stroke="#F9F9F9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_3321_270">
      <rect width="29" height="29" fill="white" transform="translate(-2)"/>
      </clipPath>
      </defs>
    </svg>
  )
}
