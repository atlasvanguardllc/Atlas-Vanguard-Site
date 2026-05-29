import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])


  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-start justify-center overflow-hidden pt-24 pb-20"
      style={{ background: '#080808' }}
    >
      {/* Radial glow top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Bottom glow pool */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '45%',
          background: 'radial-gradient(ellipse 70% 80% at 50% 100%, rgba(201,168,76,0.18) 0%, rgba(180,130,30,0.08) 50%, transparent 75%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '25%',
          background: 'radial-gradient(ellipse 50% 100% at 50% 100%, rgba(232,201,122,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* Corner decorations — hidden on mobile */}
      <div className="hidden sm:block absolute top-24 left-8 lg:left-16 w-16 h-16 pointer-events-none"
        style={{ borderLeft: '1px solid rgba(201,168,76,0.3)', borderTop: '1px solid rgba(201,168,76,0.3)' }} />
      <div className="hidden sm:block absolute top-24 right-8 lg:right-16 w-16 h-16 pointer-events-none"
        style={{ borderRight: '1px solid rgba(201,168,76,0.3)', borderTop: '1px solid rgba(201,168,76,0.3)' }} />
      <div className="hidden sm:block absolute bottom-16 left-8 lg:left-16 w-16 h-16 pointer-events-none"
        style={{ borderLeft: '1px solid rgba(201,168,76,0.3)', borderBottom: '1px solid rgba(201,168,76,0.3)' }} />
      <div className="hidden sm:block absolute bottom-16 right-8 lg:right-16 w-16 h-16 pointer-events-none"
        style={{ borderRight: '1px solid rgba(201,168,76,0.3)', borderBottom: '1px solid rgba(201,168,76,0.3)' }} />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center"
      >
        {/* Eyebrow — hidden on mobile to avoid duplication with navbar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hidden sm:flex items-center justify-center gap-4 mb-4"
        >
          <span className="h-px w-12" style={{ background: '#C9A84C' }} />
          <span className="text-xs tracking-[0.4em] uppercase font-medium" style={{ color: '#C9A84C' }}>
            Atlas Vanguard LLC
          </span>
          <span className="h-px w-12" style={{ background: '#C9A84C' }} />
        </motion.div>

        {/* Logo */}
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <motion.div
            className="relative flex items-center justify-center cursor-pointer"
            whileHover="hover"
          >
            {/* Breathing glow layers — loop indefinitely */}
            <motion.div
              className="absolute rounded-full blur-3xl pointer-events-none"
              animate={{ opacity: [0.7, 1, 0.7], scale: [0.9, 1.22, 0.9] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
              style={{
                width: 'min(420px, 100vw)',
                height: 'min(420px, 100vw)',
                background: 'radial-gradient(ellipse at 50% 65%, rgba(201,168,76,0.6) 0%, rgba(180,130,30,0.28) 45%, transparent 70%)',
              }}
            />
            <motion.div
              className="absolute rounded-full blur-2xl pointer-events-none"
              animate={{ opacity: [0.65, 1, 0.65], scale: [0.92, 1.2, 0.92] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
              style={{
                width: 'min(320px, 85vw)',
                height: 'min(320px, 85vw)',
                background: 'radial-gradient(ellipse at 50% 60%, rgba(232,201,122,0.65) 0%, rgba(201,168,76,0.35) 40%, transparent 70%)',
              }}
            />
            <motion.div
              className="absolute rounded-full blur-xl pointer-events-none"
              animate={{ opacity: [0.65, 1, 0.65], scale: [0.94, 1.15, 0.94] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
              style={{
                width: 'min(240px, 70vw)',
                height: 'min(240px, 70vw)',
                background: 'radial-gradient(ellipse at 50% 55%, rgba(255,220,100,0.75) 0%, rgba(201,168,76,0.45) 50%, transparent 75%)',
              }}
            />

            {/* Hover surge ring */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              variants={{
                hover: { opacity: 1, scale: 1.4, transition: { duration: 0.4 } },
              }}
              initial={{ opacity: 0, scale: 1 }}
              style={{
                width: '260px',
                height: '260px',
                background: 'radial-gradient(ellipse at 50% 50%, rgba(232,201,122,0.25) 0%, transparent 70%)',
                filter: 'blur(24px)',
              }}
            />

            {/* Logo — spins once on load, scales on hover */}
            <motion.img
              src="/logo.png"
              alt="Atlas Vanguard LLC"
              className="relative object-contain w-[200px] h-[200px] sm:w-[275px] sm:h-[275px]"
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              variants={{ hover: { scale: 1.07, transition: { duration: 0.35 } } }}
              style={{ zIndex: 1 }}
            />
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-4"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          <span className="text-white">Precision.</span>
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #C9A84C 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Presence.
          </span>
          <br />
          <span className="text-white">Performance.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/68 text-lg max-w-2xl mx-auto mb-6 leading-relaxed"
          style={{ letterSpacing: '0.02em' }}
        >
          Where premium brands establish their digital presence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="group flex items-center gap-3 px-8 py-4 text-sm tracking-[0.15em] uppercase font-semibold transition-all duration-300"
            style={{ background: '#C9A84C', color: '#080808' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#E8C97A' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#C9A84C' }}
          >
            Start Your Project
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium text-white/70 hover:text-white transition-all duration-300"
            style={{ border: '1px solid rgba(255,255,255,0.15)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
          >
            Discuss Your Vision
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 pt-6 grid grid-cols-3 gap-0 max-w-2xl mx-auto"
          style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}
        >
          {[
            '100% Custom Built',
            '3-Week Avg Delivery',
            'Ongoing Support',
          ].map((label, i) => (
            <div key={i} className={`text-center px-2 sm:px-6 ${i < 2 ? 'border-r border-white/10' : ''}`}>
              <div
                className="text-[10px] sm:text-sm tracking-[0.08em] sm:tracking-[0.2em] uppercase font-semibold leading-tight"
                style={{
                  background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
