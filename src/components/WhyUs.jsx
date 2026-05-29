import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, X } from 'lucide-react'

const comparisons = [
  { us: 'Custom-built from scratch',        them: 'Template or page-builder solutions' },
  { us: 'Direct founder access',            them: 'Account managers & handoffs'        },
  { us: 'Brand-aligned strategy',           them: 'One-size-fits-all approach'          },
  { us: 'Ongoing support included',         them: 'Extra fees or no follow-up'          },
  { us: 'Clear timelines & milestones',     them: 'Vague delivery windows'              },
]

const pillars = [
  {
    title: 'No Templates, Ever',
    desc: 'Every site is built from the ground up. Your brand deserves original work — not a modified theme or drag-and-drop shortcut.',
  },
  {
    title: 'Founder-Level Attention',
    desc: "You work directly with the person building your project. No account managers, no outsourced teams, no handoffs in the middle of the work.",
  },
  {
    title: 'Support After Launch',
    desc: "We don't disappear after delivery. Maintenance, updates, and ongoing guidance are part of the partnership — not a separate invoice.",
  },
]

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

function PillarCard({ card, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="p-8 relative"
      style={{
        background: hovered ? 'rgba(201,168,76,0.04)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.32)' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered ? '0 8px 40px rgba(201,168,76,0.07)' : 'none',
        transition: 'border-color 0.45s ease, background 0.45s ease, box-shadow 0.45s ease',
      }}
    >
      <div
        className="w-6 h-px mb-6"
        style={{
          background: hovered ? 'linear-gradient(90deg, #C9A84C, #E8C97A)' : '#C9A84C',
          transition: 'background 0.4s ease',
        }}
      />
      <h3
        className="font-semibold text-sm tracking-[0.12em] uppercase mb-3"
        style={{ color: hovered ? '#E8C97A' : 'rgba(255,255,255,0.88)', transition: 'color 0.4s ease' }}
      >
        {card.title}
      </h3>
      <p className="text-white/45 text-sm leading-relaxed">{card.desc}</p>

      {/* Gold corner */}
      <div
        className="absolute top-0 right-0 w-7 h-7 pointer-events-none"
        style={{
          borderTop: `1px solid ${hovered ? 'rgba(201,168,76,0.55)' : 'rgba(201,168,76,0.25)'}`,
          borderRight: `1px solid ${hovered ? 'rgba(201,168,76,0.55)' : 'rgba(201,168,76,0.25)'}`,
          transition: 'border-color 0.4s ease',
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 h-px"
        animate={{ width: hovered ? '100%' : '0%', opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{ background: 'linear-gradient(90deg, #C9A84C, #E8C97A, transparent)' }}
      />
    </motion.div>
  )
}

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative py-32 lg:py-40 overflow-hidden"
      style={{ background: '#080808' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(ellipse 55% 45% at 15% 60%, rgba(201,168,76,0.04) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <FadeUp>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-8" style={{ background: '#C9A84C' }} />
            <span className="text-xs tracking-[0.4em] uppercase font-medium" style={{ color: '#C9A84C' }}>
              Why Atlas Vanguard
            </span>
          </div>
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">

          {/* Left — headline + comparison table */}
          <div>
            <FadeUp delay={0.1}>
              <h2
                className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Not Every Agency{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Builds Like This.
                </span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-white/40 text-base leading-relaxed mb-10">
                Most agencies use templates, delegate to junior staff, and move on after launch.
                Atlas Vanguard operates differently — with original work, direct access, and a
                long-term commitment to your brand.
              </p>
            </FadeUp>

            {/* Comparison table */}
            <FadeUp delay={0.2}>
              {/* Header row */}
              <div className="grid grid-cols-2 mb-3">
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/28 pl-2">Atlas Vanguard</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/20 pl-2">Typical Agency</div>
              </div>

              <div className="space-y-2">
                {comparisons.map((row, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-2 gap-3"
                  >
                    {/* Our column */}
                    <div
                      className="flex items-center gap-3 px-4 py-3"
                      style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.15)' }}
                    >
                      <Check size={11} strokeWidth={2.5} style={{ color: '#C9A84C', flexShrink: 0 }} />
                      <span className="text-white/75 text-xs leading-snug">{row.us}</span>
                    </div>
                    {/* Their column */}
                    <div
                      className="flex items-center gap-3 px-4 py-3"
                      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      <X size={11} strokeWidth={2} style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0 }} />
                      <span className="text-white/28 text-xs leading-snug">{row.them}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right — 3 concrete pillar cards */}
          <div className="space-y-5">
            <FadeUp delay={0.1}>
              <p className="text-[10px] tracking-[0.35em] uppercase text-white/28 mb-6">
                What That Means for You
              </p>
            </FadeUp>
            {pillars.map((card, i) => (
              <PillarCard key={i} card={card} delay={0.15 + i * 0.1} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
