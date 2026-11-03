import styles from './LogisticsNetwork.module.css'

/* Abstract connected-nodes network — pure SVG, no images */
export default function LogisticsNetwork() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox="0 0 600 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* ── Connection lines ── */}
        <g className={styles.lines} stroke="rgba(201,168,76,0.28)" strokeWidth="0.8">
          <line x1="80"  y1="90"  x2="200" y2="60"  className={styles.line} style={{'--d':'0s'}} />
          <line x1="200" y1="60"  x2="300" y2="120" className={styles.line} style={{'--d':'0.15s'}} />
          <line x1="300" y1="120" x2="420" y2="80"  className={styles.line} style={{'--d':'0.30s'}} />
          <line x1="420" y1="80"  x2="520" y2="140" className={styles.line} style={{'--d':'0.45s'}} />
          <line x1="300" y1="120" x2="280" y2="220" className={styles.line} style={{'--d':'0.20s'}} />
          <line x1="200" y1="60"  x2="280" y2="220" className={styles.line} style={{'--d':'0.35s'}} />
          <line x1="280" y1="220" x2="420" y2="260" className={styles.line} style={{'--d':'0.50s'}} />
          <line x1="420" y1="80"  x2="420" y2="260" className={styles.line} style={{'--d':'0.25s'}} />
          <line x1="80"  y1="90"  x2="130" y2="200" className={styles.line} style={{'--d':'0.40s'}} />
          <line x1="130" y1="200" x2="280" y2="220" className={styles.line} style={{'--d':'0.55s'}} />
          <line x1="520" y1="140" x2="420" y2="260" className={styles.line} style={{'--d':'0.60s'}} />
          <line x1="130" y1="200" x2="200" y2="60"  className={styles.line} style={{'--d':'0.10s'}} strokeOpacity="0.14" />
        </g>

        {/* ── Animated travel dots on paths ── */}
        <g className={styles.travelers}>
          <circle r="2" fill="rgba(201,168,76,0.75)" className={styles.travelDot}>
            <animateMotion dur="4s" repeatCount="indefinite" begin="0s">
              <mpath href="#path1" />
            </animateMotion>
          </circle>
          <circle r="1.5" fill="rgba(201,168,76,0.55)" className={styles.travelDot}>
            <animateMotion dur="5.5s" repeatCount="indefinite" begin="1.2s">
              <mpath href="#path2" />
            </animateMotion>
          </circle>
          <circle r="1.8" fill="rgba(201,168,76,0.65)" className={styles.travelDot}>
            <animateMotion dur="6s" repeatCount="indefinite" begin="2.5s">
              <mpath href="#path3" />
            </animateMotion>
          </circle>
        </g>

        {/* Hidden motion paths */}
        <defs>
          <path id="path1" d="M80,90 L200,60 L300,120 L420,80 L520,140" />
          <path id="path2" d="M200,60 L280,220 L420,260 L520,140" />
          <path id="path3" d="M80,90 L130,200 L280,220 L420,260" />
        </defs>

        {/* ── Nodes ── */}
        {/* Primary hub – center */}
        <g className={styles.nodeGroup} style={{'--f':'0.55s'}}>
          <circle cx="300" cy="120" r="10" fill="rgba(201,168,76,0.12)" stroke="rgba(201,168,76,0.6)" strokeWidth="1" />
          <circle cx="300" cy="120" r="4"  fill="var(--gold)" />
          <circle cx="300" cy="120" r="18" fill="none" stroke="rgba(201,168,76,0.18)" strokeWidth="1" className={styles.ring} />
        </g>

        {/* Secondary hubs */}
        {[
          { cx: 200, cy: 60,  r: 7, d: '0.2s' },
          { cx: 420, cy: 80,  r: 7, d: '0.35s' },
          { cx: 280, cy: 220, r: 7, d: '0.45s' },
          { cx: 420, cy: 260, r: 6, d: '0.55s' },
        ].map((n, i) => (
          <g key={i} className={styles.nodeGroup} style={{'--f': n.d}}>
            <circle cx={n.cx} cy={n.cy} r={n.r + 6} fill="rgba(201,168,76,0.07)" stroke="rgba(201,168,76,0.25)" strokeWidth="0.8" />
            <circle cx={n.cx} cy={n.cy} r={n.r}     fill="rgba(201,168,76,0.22)" stroke="rgba(201,168,76,0.55)" strokeWidth="0.8" />
            <circle cx={n.cx} cy={n.cy} r="2.5"      fill="var(--gold-bright)" />
          </g>
        ))}

        {/* Tertiary nodes */}
        {[
          { cx: 80,  cy: 90,  d: '0.1s' },
          { cx: 130, cy: 200, d: '0.65s' },
          { cx: 520, cy: 140, d: '0.40s' },
        ].map((n, i) => (
          <g key={i} className={styles.nodeGroup} style={{'--f': n.d}}>
            <circle cx={n.cx} cy={n.cy} r="5" fill="rgba(201,168,76,0.10)" stroke="rgba(201,168,76,0.35)" strokeWidth="0.8" />
            <circle cx={n.cx} cy={n.cy} r="2" fill="rgba(201,168,76,0.7)" />
          </g>
        ))}
      </svg>
    </div>
  )
}
