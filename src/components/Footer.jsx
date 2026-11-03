import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>

      {/* Subtle gold top edge */}
      <div className={styles.topEdge} aria-hidden="true" />

      <div className={styles.container}>

        {/* Brand cluster */}
        <div className={styles.brand}>
          <img
            src="/logo.jpg"
            alt="ChaseHorse"
            className={styles.logo}
            width="auto"
            height="40"
          />
          <p className={styles.tagline}>Excellence in the making.</p>
        </div>

        {/* Centre status */}
        <div className={styles.status}>
          <span className={styles.statusDot} aria-hidden="true" />
          <span>Launching Soon</span>
        </div>

        {/* Copyright */}
        <p className={styles.copy}>
          &copy; {year} ChaseHorse. All rights reserved.
        </p>

      </div>
    </footer>
  )
}
