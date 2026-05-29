import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We begin by deeply understanding your brand, goals, target audience, and vision — laying the foundation for every decision that follows.',
  },
  {
    number: '02',
    title: 'Strategy',
    desc: 'We map out a precise digital blueprint — defining structure, content hierarchy, visual direction, and the experience your audience will have.',
  },
  {
    number: '03',
    title: 'Design & Build',
    desc: 'Your website is crafted with precision — every detail intentionally designed and developed to reflect the quality and character of your brand.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    desc: 'We deploy your site and ensure everything runs flawlessly. Ongoing support keeps your digital presence performing at its highest level.',
  },
]

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Process() {
  const lineRef = useRef(null)
  const lineInView = useInView(lineRef, { once: true, margin: '-80px' })

  return (
    <section
      id="process"
      className="relative py-32 lg:py-40 overflow-hidden"
      style={{ background: '#060606' }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }}
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(ellipse 50% 50% at 50% 100%, rgba(201,168,76,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="max-w-2xl mb-20 lg:mb-28">
          <FadeUp>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-8" style={{ background: '#C9A84C' }} />
              <span className="text-xs tracking-[0.4em] uppercase font-medium" style={{ color: '#C9A84C' }}>
                How We Work
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              A Process Built for{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Excellence.
              </span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-white/62 text-lg leading-relaxed">
              Every project follows a structured, proven process designed to deliver results
              that exceed expectations — on time and with precision.
            </p>
          </FadeUp>
        </div>

        {/* Steps */}
        <div ref={lineRef} className="relative">

          {/* Horizontal connecting line — desktop only */}
          <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-px" style={{ zIndex: 0 }}>
            <motion.div
              className="h-full"
              initial={{ scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'linear-gradient(90deg, rgba(201,168,76,0.15), rgba(201,168,76,0.4), rgba(201,168,76,0.15))',
                transformOrigin: 'left',
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                animate={lineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
                style={{ zIndex: 1 }}
              >
                {/* Step dot */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="w-14 h-14 flex items-center justify-center shrink-0 relative"
                    style={{
                      border: '1px solid rgba(201,168,76,0.35)',
                      background: '#060606',
                    }}
                  >
                    {/* Inner glow on the dot */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)',
                      }}
                    />
                    <span
                      className="text-xs font-mono tracking-[0.2em]"
                      style={{ color: '#C9A84C' }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3
                  className="text-lg font-semibold text-white mb-4 tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.25rem' }}
                >
                  {step.title}
                </h3>
                <p className="text-white/62 text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* Vertical connector — mobile only */}
                {i < steps.length - 1 && (
                  <div
                    className="lg:hidden absolute left-7 top-14 w-px"
                    style={{
                      height: 'calc(100% - 56px + 40px)',
                      background: 'linear-gradient(to bottom, rgba(201,168,76,0.3), transparent)',
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }}
      />
    </section>
  )
}
