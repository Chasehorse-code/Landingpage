import styles from './ComingSoon.module.css'

export default function ComingSoon() {
  const year = new Date().getFullYear()

  return (
    <div className={styles.page}>

      {/* ══════════════════════════════════════
          CINEMATIC BACKGROUND — three layers
          ══════════════════════════════════════ */}

      {/* Layer 1 — primary gold orb: emerges from black at t=0, drifts forever */}
      <div className={styles.bgAmbient} aria-hidden="true" />

      {/* Layer 2 — broader atmospheric swell: grows from t=1.5s, drifts forever */}
      <div className={styles.bgSwell} aria-hidden="true" />

      {/* Layer 3 — diagonal soft light accent: fades in at t=2.5s, stays */}
      <div className={styles.bgRay} aria-hidden="true" />

      {/* ══════════════════════════════════════
          CONTENT COLUMN — staggered reveals
          ══════════════════════════════════════ */}
      <div className={styles.center}>

        {/* Logo ── emerges at t=2.2s with cinematic brightness sweep */}
        <div className={styles.logoWrap}>
          <img
            src="/newlogo.png"
            alt="ChaseHorse"
            className={styles.logo}
            draggable="false"
          />
          {/* One-shot light sweep across logo at t=4.0s */}
          <div className={styles.logoSweep} aria-hidden="true" />
        </div>

        {/* Label ── t=4.6s */}
        <p className={styles.label}>ChaseHorse</p>

        {/* Divider ── t=5.0s */}
        <div className={styles.divider} aria-hidden="true" />

        {/* Heading ── gold line t=5.4s, white line t=6.9s */}
        <h1 className={styles.heading}>
          <span className={styles.h1Gold}>Something Better</span>
          <span className={styles.h1White}>Is Coming.</span>
        </h1>

        {/* Description ── t=7.8s */}
        <p className={styles.description}>
          Our portal is currently under development.{' '}
          We&rsquo;re working behind the scenes to bring you a better experience.
        </p>

        {/* Status pill ── t=9.2s */}
        <div className={styles.status}>
          <span className={styles.statusDot} aria-hidden="true" />
          <span className={styles.statusText}>We&rsquo;ll Be Back Soon</span>
        </div>

      </div>

      {/* Footer ── t=10.2s */}
      <footer className={styles.footer}>
        <span>&copy; {year} ChaseHorse. All rights reserved.</span>
      </footer>

    </div>
  )
}
