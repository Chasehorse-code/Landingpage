import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        {/* Logo */}
        <div className={styles.logoWrap}>
          <img
            src="/logo.jpg"
            alt="ChaseHorse"
            className={styles.logo}
            width="auto"
            height="56"
          />
        </div>

        {/* Right: badge */}
        <div className={styles.right}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            Coming Soon
          </span>
        </div>

      </div>
    </header>
  )
}
