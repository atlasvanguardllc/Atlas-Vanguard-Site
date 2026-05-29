import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(false)

  return (
    <section
      ref={ref}
      className="relative py-36 lg:py-48 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.25), transparent)' }}
      />

      {/* Ambient background glow — reduced ~18% from original */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(201,168,76,0.038) 0%, transparent 70%)',
        }}
      />

      {/* Soft outer rim glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 70% at 50% 100%, rgba(201,168,76,0.025) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center relative z-10">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className="h-px w-8" style={{ background: '#C9A84C', opacity: 0.7 }} />
          <span className="text-xs tracking-[0.4em] uppercase font-medium" style={{ color: '#C9A84C' }}>
            Ready to Begin
          </span>
          <span className="h-px w-8" style={{ background: '#C9A84C', opacity: 0.7 }} />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-bold text-white mb-7"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", lineHeight: 1.08 }}
        >
          A Refined Digital Presence{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Starts Here.
          </span>
        </motion.h2>

        {/* Supporting paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/38 text-lg leading-relaxed mb-14 max-w-xl mx-auto"
        >
          Let's create a digital presence that reflects the quality
          and ambition of your brand.
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a
            href="#contact"
            whileHover={{ y: -3 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="group inline-flex items-center gap-4 px-10 py-5 text-sm tracking-[0.2em] uppercase font-semibold"
            style={{
              background: hovered ? '#E8C97A' : '#C9A84C',
              color: '#080808',
              boxShadow: hovered ? '0 6px 32px rgba(201,168,76,0.25)' : '0 0 0 transparent',
              transition: 'background 0.35s ease, box-shadow 0.35s ease',
            }}
          >
            Discuss Your Vision
            <ArrowRight
              size={15}
              style={{
                transform: hovered ? 'translateX(4px)' : 'translateX(0)',
                transition: 'transform 0.3s ease',
              }}
            />
          </motion.a>
        </motion.div>

        {/* Finishing accent line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 mx-auto"
          style={{
            height: '1px',
            width: '80px',
            background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)',
            transformOrigin: 'center',
          }}
        />

      </div>
    </section>
  )
}
