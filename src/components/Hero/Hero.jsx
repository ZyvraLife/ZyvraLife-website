import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.brand}>
        <span className={styles.zyvra}>ZYVRA</span>
        <span className={styles.life}>LIFE</span>
      </div>
      <div className={styles.TextCTA}>
        <div className={styles.tagline}>
          <p className={styles.Pe}>
            <span className={styles.white}>Fast Like </span>
            <span className={styles.amber}>AI.</span>
          </p>
          {' '}
          <p className={styles.Pe}>
            <span className={styles.amber}>Human</span>
            <span className={styles.white}> Where It Counts.</span>
          </p>
        </div>

        <div className={styles.buttons}>
          <a
            href="https://www.instagram.com/byzyvralife"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnFollow}`}
          >
            <InstagramIcon />
            <span>FOLLOW THE BUILD</span>
          </a>
          <a
            href="https://www.linkedin.com/in/zyvralife26"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnThinking}`}
          >
            <LinkedInIcon />
            <span>READ THE THINKING</span>
          </a>
        </div>
      </div>
    </div>
  )
}

function InstagramIcon() {
  return (
    <svg className={styles.icons} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_3313_205)">
      <path d="M5.5 11C5.5 9.54131 6.07946 8.14236 7.11091 7.11091C8.14236 6.07946 9.54131 5.5 11 5.5H22C23.4587 5.5 24.8576 6.07946 25.8891 7.11091C26.9205 8.14236 27.5 9.54131 27.5 11V22C27.5 23.4587 26.9205 24.8576 25.8891 25.8891C24.8576 26.9205 23.4587 27.5 22 27.5H11C9.54131 27.5 8.14236 26.9205 7.11091 25.8891C6.07946 24.8576 5.5 23.4587 5.5 22V11Z" stroke="#F9F9F9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.375 16.5C12.375 17.594 12.8096 18.6432 13.5832 19.4168C14.3568 20.1904 15.406 20.625 16.5 20.625C17.594 20.625 18.6432 20.1904 19.4168 19.4168C20.1904 18.6432 20.625 17.594 20.625 16.5C20.625 15.406 20.1904 14.3568 19.4168 13.5832C18.6432 12.8096 17.594 12.375 16.5 12.375C15.406 12.375 14.3568 12.8096 13.5832 13.5832C12.8096 14.3568 12.375 15.406 12.375 16.5Z" stroke="#F9F9F9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22.6875 10.3125V10.325" stroke="#F9F9F9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_3313_205">
      <rect width="33" height="33" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className={styles.icons} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_3313_214)">
      <path d="M12 15.2917V21.3334" stroke="#F9F9F9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 11.6667V11.6767" stroke="#F9F9F9" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.8333 21.3334V15.2917" stroke="#F9F9F9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21.6666 21.3334V17.7084C21.6666 17.0674 21.412 16.4527 20.9588 15.9995C20.5056 15.5463 19.8909 15.2917 19.25 15.2917C18.609 15.2917 17.9944 15.5463 17.5411 15.9995C17.0879 16.4527 16.8333 17.0674 16.8333 17.7084" stroke="#F9F9F9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.625 10.4583C5.625 9.17645 6.13422 7.94708 7.04065 7.04065C7.94708 6.13422 9.17645 5.625 10.4583 5.625H22.5417C23.8235 5.625 25.0529 6.13422 25.9593 7.04065C26.8658 7.94708 27.375 9.17645 27.375 10.4583V22.5417C27.375 23.8235 26.8658 25.0529 25.9593 25.9593C25.0529 26.8658 23.8235 27.375 22.5417 27.375H10.4583C9.17645 27.375 7.94708 26.8658 7.04065 25.9593C6.13422 25.0529 5.625 23.8235 5.625 22.5417V10.4583Z" stroke="#F9F9F9" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_3313_214">
      <rect width="29" height="29" fill="white" transform="translate(2 2)"/>
      </clipPath>
      </defs>
    </svg>
  )
}
