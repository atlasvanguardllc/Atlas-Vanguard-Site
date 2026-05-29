import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  const [logoHovered, setLogoHovered] = useState(false)

  return (
    <footer
      className="relative py-14 overflow-hidden"
      style={{ background: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Subtle top gold separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)' }}
      />

      {/* Ambient gold glow — continues warmth from contact section above */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.5, 0.72, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          background: 'radial-gradient(ellipse 70% 160% at 50% 110%, rgba(201,168,76,0.07) 0%, rgba(180,140,50,0.03) 50%, transparent 72%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo + name */}
          <div
            className="flex items-center gap-3 cursor-default"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
            style={{ transition: 'opacity 0.35s ease' }}
          >
            <img
              src="/logo.png"
              alt="Atlas Vanguard LLC"
              className="h-8 w-8 object-contain"
              style={{
                opacity: logoHovered ? 0.65 : 0.38,
                transition: 'opacity 0.35s ease',
              }}
            />
            <span
              className="text-xs tracking-[0.28em] uppercase"
              style={{
                color: logoHovered ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.28)',
                transition: 'color 0.35s ease',
              }}
            >
              Atlas Vanguard LLC
            </span>
          </div>

          {/* Divider with diamond */}
          <div className="hidden md:flex items-center gap-4">
            <span
              className="h-px w-16"
              style={{ background: 'rgba(201,168,76,0.12)' }}
            />
            <span style={{ color: '#C9A84C', opacity: 0.3, fontSize: '7px' }}>◆</span>
            <span
              className="h-px w-16"
              style={{ background: 'rgba(201,168,76,0.12)' }}
            />
          </div>

          {/* Copyright + Privacy */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-white/18 text-[11px] tracking-[0.22em] uppercase">
              &copy; {year} Atlas Vanguard LLC. All rights reserved.
            </p>
            <Link
              to="/privacy"
              className="text-[11px] tracking-[0.22em] uppercase transition-colors duration-300"
              style={{ color: 'rgba(201,168,76,0.35)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(201,168,76,0.7)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(201,168,76,0.35)' }}
            >
              Privacy Policy
            </Link>
          </div>

        </div>
      </div>
    </footer>
  )
}
