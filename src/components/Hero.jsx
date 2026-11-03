import LogisticsNetwork from './LogisticsNetwork'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* ── Background layers ── */}
      <div className={styles.bgGlowCenter} aria-hidden="true" />
      <div className={styles.bgGlowLeft}   aria-hidden="true" />
      <div className={styles.bgGrid}       aria-hidden="true" />
      <div className={styles.bgVignette}   aria-hidden="true" />

      {/* ── Content ── */}
      <div className={styles.content}>

        {/* Eyebrow */}
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} aria-hidden="true" />
          <span className={styles.eyebrowText}>The Next Chapter of ChaseHorse</span>
          <span className={styles.eyebrowLine} aria-hidden="true" />
        </div>

        {/* Main headline */}
        <h1 className={styles.headline}>
          <span className={styles.headlineRow}>Something</span>
          <span className={styles.headlineGold}>Remarkable</span>
          <span className={styles.headlineRow}>Is Coming</span>
        </h1>

        {/* Horizontal rule */}
        <div className={styles.rule} aria-hidden="true">
          <span className={styles.ruleLine} />
          <span className={styles.ruleDiamond} />
          <span className={styles.ruleLine} />
        </div>

        {/* Description */}
        <p className={styles.description}>
          We're building something new at ChaseHorse. A smarter approach to
          logistics and supply chain solutions is on the way.
        </p>

        {/* CTA */}
        <div className={styles.ctaWrap}>
          <button className={styles.ctaBtn} type="button">
            <span>Stay Connected</span>
            <span className={styles.ctaArrow} aria-hidden="true">→</span>
          </button>
        </div>

      </div>

      {/* ── Logistics visual ── */}
      <div className={styles.network}>
        <LogisticsNetwork />
      </div>

      {/* ── Bottom fade ── */}
      <div className={styles.bottomFade} aria-hidden="true" />

    </section>
  )
}
