import styles from './StayTuned.module.css'

const pillars = [
  {
    num: '01',
    title: 'Precision Engineering',
    body: 'Every detail of our platform is being crafted with rigorous attention to performance and reliability.',
  },
  {
    num: '02',
    title: 'Intelligent Operations',
    body: 'Smarter logistics through purposeful technology — built for the demands of tomorrow.',
  },
  {
    num: '03',
    title: 'World-Class Experience',
    body: 'We are committed to delivering a product that exceeds the expectations of modern enterprise.',
  },
]

export default function StayTuned() {
  return (
    <section className={styles.section} id="stay-tuned">

      {/* Ambient glow */}
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.container}>

        {/* ── Section header ── */}
        <header className={styles.sectionHead}>
          <span className={styles.tag}>Stay Tuned</span>
          <h2 className={styles.title}>Built for What's Next</h2>
          <p className={styles.lead}>
            ChaseHorse is in active development — every layer of the platform is
            being designed with care and purpose.
          </p>
        </header>

        {/* ── Pillar columns ── */}
        <div className={styles.pillars}>
          {pillars.map((p, i) => (
            <article
              key={i}
              className={styles.pillar}
              style={{ '--i': i }}
            >
              <span className={styles.pillarNum} aria-hidden="true">{p.num}</span>
              <div className={styles.pillarDivider} aria-hidden="true" />
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarBody}>{p.body}</p>
            </article>
          ))}
        </div>

        {/* ── Status strip ── */}
        <div className={styles.status}>
          <div className={styles.statusDotWrap}>
            <span className={styles.statusDot} aria-hidden="true" />
          </div>
          <div className={styles.statusInfo}>
            <span className={styles.statusLabel}>Development Status</span>
            <div className={styles.progressTrack}>
              <div className={styles.progressBar} />
            </div>
          </div>
          <span className={styles.statusNote}>Almost there</span>
        </div>

      </div>
    </section>
  )
}
