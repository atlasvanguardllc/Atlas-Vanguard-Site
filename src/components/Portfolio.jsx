import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Globe, Smartphone, Zap } from 'lucide-react'

const projects = [
  {
    id: '01',
    client: 'I&O Innovations',
    industry: 'Renovation Contractor · Philadelphia, PA',
    headline: 'A premium digital presence for a trusted Philadelphia contractor.',
    description:
      'Full website redesign for a 15-year renovation contractor serving Philadelphia and surrounding suburbs. Built to convert visitors into leads with a professional portfolio, service showcase, and direct contact flow.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'EmailJS', 'Vercel'],
    features: [
      { icon: Globe,       label: 'Fully Responsive'    },
      { icon: Smartphone,  label: 'Mobile Optimized'    },
      { icon: Zap,         label: 'Lightning Fast'      },
    ],
    href: 'https://iando-innovations.vercel.app',
    accent: '#4A90C2',
    accentMid: 'rgba(74,144,194,0.18)',
    accentFaint: 'rgba(74,144,194,0.06)',
    // Decorative "screen" content colors
    bar: ['#4A90C2', '#7AB8E0', '#2d6a9f'],
  },
]

function BrowserMockup({ project }) {
  return (
    <div
      className="relative w-full rounded-sm overflow-hidden"
      style={{
        background: '#0a0a0a',
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
      }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: '#111', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        {/* Traffic lights */}
        <div className="flex gap-1.5">
          {['#3a3a3a', '#3a3a3a', '#3a3a3a'].map((c, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
        {/* URL bar */}
        <div
          className="flex-1 mx-3 px-3 py-1 text-[10px] tracking-wide rounded-sm"
          style={{ background: '#1a1a1a', color: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          iandoinnovations.com
        </div>
      </div>

      {/* Site preview — stylized representation */}
      <div className="relative overflow-hidden" style={{ height: '320px', background: '#080808' }}>

        {/* Simulated hero gradient */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(74,144,194,0.12) 0%, transparent 70%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.7) 100%)' }} />

        {/* Simulated navbar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-4" style={{ borderBottom: '1px solid rgba(74,144,194,0.12)' }}>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-sm" style={{ background: 'rgba(74,144,194,0.3)' }} />
            <div className="h-2 w-20 rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }} />
          </div>
          <div className="hidden md:flex gap-5">
            {[48, 52, 56, 44, 60].map((w, i) => (
              <div key={i} className="h-1.5 rounded-full" style={{ width: w, background: 'rgba(255,255,255,0.12)' }} />
            ))}
          </div>
          <div className="h-6 w-20 rounded-sm" style={{ background: 'rgba(74,144,194,0.35)', border: '1px solid rgba(74,144,194,0.5)' }} />
        </div>

        {/* Simulated hero text */}
        <div className="absolute top-20 left-8">
          <div className="h-1.5 w-32 rounded-full mb-4" style={{ background: 'rgba(74,144,194,0.4)' }} />
          <div className="h-5 w-56 rounded-sm mb-2" style={{ background: 'rgba(255,255,255,0.18)' }} />
          <div className="h-5 w-48 rounded-sm mb-2" style={{ background: 'rgba(74,144,194,0.5)' }} />
          <div className="h-5 w-40 rounded-sm mb-5" style={{ background: 'rgba(255,255,255,0.18)' }} />
          <div className="h-2 w-64 rounded-full mb-2" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <div className="h-2 w-52 rounded-full mb-6" style={{ background: 'rgba(255,255,255,0.07)' }} />
          <div className="flex gap-3">
            <div className="h-8 w-28 rounded-sm" style={{ background: 'rgba(74,144,194,0.6)', border: '1px solid rgba(74,144,194,0.8)' }} />
            <div className="h-8 w-24 rounded-sm" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)' }} />
          </div>
        </div>

        {/* Simulated skyline silhouette */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20">
          <div className="absolute bottom-0 right-8 w-8 h-48" style={{ background: 'rgba(74,144,194,0.4)' }} />
          <div className="absolute bottom-0 right-20 w-6 h-36" style={{ background: 'rgba(74,144,194,0.3)' }} />
          <div className="absolute bottom-0 right-32 w-10 h-56" style={{ background: 'rgba(74,144,194,0.35)' }} />
          <div className="absolute bottom-0 right-44 w-6 h-32" style={{ background: 'rgba(74,144,194,0.25)' }} />
          <div className="absolute bottom-0 right-52 w-12 h-44" style={{ background: 'rgba(74,144,194,0.3)' }} />
        </div>

        {/* Bottom stats bar */}
        <div className="absolute bottom-0 left-0 right-0 flex gap-8 px-8 py-4" style={{ borderTop: '1px solid rgba(74,144,194,0.1)', background: 'rgba(8,8,8,0.8)' }}>
          {['15+ Years', '150+ Projects', '5★ Rated'].map((s, i) => (
            <div key={i}>
              <div className="h-3 w-12 rounded-full mb-1" style={{ background: 'rgba(255,255,255,0.25)' }} />
              <div className="h-1.5 w-16 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="portfolio" ref={ref} className="relative py-24 lg:py-40 overflow-hidden" style={{ background: '#080808' }}>
      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />

      {/* Faint radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8" style={{ background: '#C9A84C' }} />
            <span className="text-xs tracking-[0.4em] uppercase font-medium" style={{ color: '#C9A84C' }}>Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Projects That{' '}
            <span style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C97A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Define Brands.
            </span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">
            Every project we take on is built with intention — designed to perform, crafted to impress, and delivered to last.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Left — mockup */}
              <div className="relative">
                {/* Project number watermark */}
                <div
                  className="absolute -top-8 -left-4 text-[120px] font-bold leading-none select-none pointer-events-none hidden lg:block"
                  style={{ color: 'rgba(201,168,76,0.04)', fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {project.id}
                </div>
                <BrowserMockup project={project} />
              </div>

              {/* Right — details */}
              <div>
                {/* Industry tag */}
                <div className="text-[10px] tracking-[0.35em] uppercase mb-4" style={{ color: 'rgba(201,168,76,0.6)' }}>
                  {project.industry}
                </div>

                {/* Client name */}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  {project.client}
                </h3>

                {/* Headline */}
                <p className="text-white/80 text-base font-medium mb-4 leading-relaxed">
                  {project.headline}
                </p>

                {/* Description */}
                <p className="text-white/45 text-sm leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {project.features.map((f) => (
                    <div key={f.label} className="flex items-center gap-2">
                      <div className="w-6 h-6 flex items-center justify-center" style={{ border: '1px solid rgba(201,168,76,0.25)', color: '#C9A84C' }}>
                        <f.icon size={12} strokeWidth={1.5} />
                      </div>
                      <span className="text-xs tracking-wide text-white/45">{f.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-[0.2em] uppercase px-3 py-1.5"
                      style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.03)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 text-xs tracking-[0.2em] uppercase font-semibold group"
                  style={{ border: '1px solid rgba(201,168,76,0.4)', color: '#C9A84C', transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.08)'; e.currentTarget.style.borderColor = '#C9A84C' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)' }}
                >
                  View Live Site
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More coming soon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-24 pt-12 flex items-center gap-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <span className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.2), transparent)' }} />
          <span className="text-[11px] tracking-[0.3em] uppercase text-white/20">More projects coming soon</span>
          <span className="h-px flex-1" style={{ background: 'linear-gradient(270deg, rgba(201,168,76,0.2), transparent)' }} />
        </motion.div>

      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }} />
    </section>
  )
}
