import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const values = [
  { title: 'Founder-Led', desc: 'Every project is personally handled by the Atlas Vanguard founder — no outsourcing, no delegation.' },
  { title: 'Brand-Obsessed', desc: 'We study your business, audience, and market before designing or writing a single element.' },
  { title: 'No Templates', desc: 'Every website is built from scratch. 100% original work, tailored specifically to your brand.' },
  { title: 'Built to Last', desc: 'We design for longevity — scalable, maintainable, and built to grow alongside your business.' },
]

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

function ValueCard({ v, i, inView }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="p-8 relative"
      style={{
        background: hovered ? 'rgba(201,168,76,0.04)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.35)' : 'rgba(255,255,255,0.06)'}`,
        boxShadow: hovered ? '0 0 24px rgba(201,168,76,0.08)' : 'none',
        transition: 'border-color 0.4s ease, background 0.4s ease, box-shadow 0.4s ease',
      }}
    >
      <div
        className="w-6 h-px mb-5"
        style={{
          background: hovered
            ? 'linear-gradient(90deg, #C9A84C, #E8C97A)'
            : '#C9A84C',
          transition: 'background 0.4s ease',
        }}
      />
      <h3
        className="font-semibold mb-3 text-xs tracking-[0.25em] uppercase"
        style={{ color: hovered ? '#E8C97A' : 'rgba(255,255,255,0.9)', transition: 'color 0.4s ease' }}
      >
        {v.title}
      </h3>
      <p className="text-white/62 text-sm leading-relaxed">{v.desc}</p>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-32 lg:py-40 overflow-hidden" style={{ background: '#080808' }}>
      {/* Vertical line accent */}
      <div
        className="absolute left-1/2 top-0 w-px h-24 -translate-x-1/2 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.4))' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: text */}
          <div>
            <FadeUp>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-8" style={{ background: '#C9A84C' }} />
                <span className="text-xs tracking-[0.4em] uppercase font-medium" style={{ color: '#C9A84C' }}>
                  About Us
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight mb-8 text-white"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Forged through{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  strategy and precision.
                </span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-white/68 text-lg leading-relaxed mb-6">
                Atlas Vanguard LLC was founded with a singular objective: to build digital
                platforms that position companies ahead of their competition. We specialize
                in elite web design, strategic branding, and high-performance online
                infrastructure engineered for businesses that refuse to blend in.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-white/58 text-base leading-relaxed mb-10">
                At Atlas Vanguard, we work with businesses that expect more than average.
                We build for companies that want to lead their market, elevate their brand,
                and operate with a competitive edge.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300"
                style={{ color: '#C9A84C' }}
                onMouseEnter={(e) => { e.currentTarget.style.gap = '16px' }}
                onMouseLeave={(e) => { e.currentTarget.style.gap = '12px' }}
              >
                Work with us
                <span
                  className="h-px transition-all duration-300"
                  style={{ width: '32px', background: '#C9A84C' }}
                />
              </a>
            </FadeUp>
          </div>

          {/* Right: values grid */}
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <ValueCard key={v.title} v={v} i={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
