import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About',     href: '#about',     id: 'about'     },
  { label: 'Services',  href: '#services',  id: 'services'  },
  { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Determine active section
      const offsets = links.map(({ id }) => {
        const el = document.getElementById(id)
        return { id, top: el ? el.getBoundingClientRect().top : Infinity }
      })
      const current = offsets.filter(({ top }) => top <= 120).pop()
      setActive(current ? current.id : '')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.12)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Atlas Vanguard LLC"
            className="h-11 w-11 object-contain"
            style={{}}
          />
          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white">Atlas Vanguard</span>
            <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: '#C9A84C' }}>LLC</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-widest uppercase transition-colors duration-300 relative group whitespace-nowrap"
              style={{ color: active === l.id ? '#C9A84C' : 'rgba(255,255,255,0.6)' }}
              onMouseEnter={(e) => { if (active !== l.id) e.currentTarget.style.color = '#fff' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = active === l.id ? '#C9A84C' : 'rgba(255,255,255,0.6)' }}
            >
              {l.label}
              <span
                className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
                style={{
                  width: active === l.id ? '100%' : '0%',
                  background: '#C9A84C',
                }}
              />
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm tracking-widest uppercase px-6 py-2.5 font-medium transition-all duration-300"
            style={{
              border: '1px solid #C9A84C',
              color: '#C9A84C',
              letterSpacing: '0.15em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#C9A84C'
              e.currentTarget.style.color = '#080808'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#C9A84C'
            }}
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(8,8,8,0.97)', borderTop: '1px solid rgba(201,168,76,0.15)' }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="text-sm tracking-widest uppercase px-6 py-2.5 text-center mt-2"
                style={{ border: '1px solid #C9A84C', color: '#C9A84C' }}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
