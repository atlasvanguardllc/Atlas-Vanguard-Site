import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'

const differentiators = [
  'Custom-built websites tailored to your brand and goals',
  'Refined design systems with strategy behind every detail',
  'Premium user experiences focused on clarity and performance',
  'Modern development optimized for speed and responsiveness',
  'Strategic digital direction designed for long-term growth',
  'Ongoing support built around reliability and consistency',
]

const approachCards = [
  {
    title: 'Strategic Design',
    desc: 'Every project begins with a deep understanding of your brand, audience, and long-term vision — ensuring every detail serves a purpose.',
  },
  {
    title: 'Precision Execution',
    desc: 'From design to development, every element is intentionally crafted to deliver a refined, high-performance digital experience.',
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

function ApproachCard({ card, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="p-10 relative"
      style={{
        background: hovered ? 'rgba(201,168,76,0.04)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.32)' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered ? '0 8px 40px rgba(201,168,76,0.07)' : 'none',
        transition: 'border-color 0.45s ease, background 0.45s ease, box-shadow 0.45s ease',
      }}
    >
      {/* Top accent rule */}
      <div
        className="w-8 h-px mb-7"
        style={{
          background: hovered ? 'linear-gradient(90deg, #C9A84C, #E8C97A)' : '#C9A84C',
          transition: 'background 0.4s ease',
        }}
      />

      <h3
        className="font-semibold text-base tracking-[0.12em] uppercase mb-4"
        style={{ color: hovered ? '#E8C97A' : 'rgba(255,255,255,0.88)', transition: 'color 0.4s ease' }}
      >
        {card.title}
      </h3>

      <p className="text-white/45 text-sm leading-relaxed">
        {card.desc}
      </p>

      {/* Gold corner accent */}
      <div
        className="absolute top-0 right-0 w-8 h-8 pointer-events-none"
        style={{
          borderTop: `1px solid ${hovered ? 'rgba(201,168,76,0.55)' : 'rgba(201,168,76,0.3)'}`,
          borderRight: `1px solid ${hovered ? 'rgba(201,168,76,0.55)' : 'rgba(201,168,76,0.3)'}`,
          transition: 'border-color 0.4s ease',
        }}
      />

      {/* Bottom sweep line */}
      <motion.div
        className="absolute bottom-0 left-0 h-px"
        animate={{ width: hovered ? '100%' : '0%', opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
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
      {/* Decorative vertical line */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-64 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)' }}
      />

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
          {/* Left column */}
          <div>
            <FadeUp delay={0.1}>
              <h2
                className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                A Higher Standard of{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Digital Presence.
                </span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-white/40 text-lg leading-relaxed mb-12">
                Atlas Vanguard creates refined digital experiences for brands that value
                precision, strategy, and distinction. Every project is thoughtfully designed
                to strengthen credibility, elevate presence, and position businesses at a
                higher level online.
              </p>
            </FadeUp>

            <div className="space-y-5">
              {differentiators.map((item, i) => (
                <FadeUp key={i} delay={0.2 + i * 0.07}>
                  <div className="flex items-start gap-4">
                    <div
                      className="mt-0.5 shrink-0 w-4 h-4 flex items-center justify-center"
                      style={{ border: '1px solid rgba(201,168,76,0.4)', color: '#C9A84C' }}
                    >
                      <Check size={10} strokeWidth={2.5} />
                    </div>
                    <span className="text-white/55 text-sm leading-relaxed">{item}</span>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Right column: approach cards */}
          <div className="space-y-6">
            <FadeUp delay={0.1}>
              <p className="text-xs tracking-[0.35em] uppercase text-white/30 mb-8">
                Our Approach
              </p>
            </FadeUp>

            {approachCards.map((card, i) => (
              <ApproachCard key={i} card={card} delay={0.2 + i * 0.12} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
