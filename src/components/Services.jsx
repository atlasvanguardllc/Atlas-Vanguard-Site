import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, Fingerprint, Compass, Gauge, MousePointer2, LifeBuoy } from 'lucide-react'

const services = [
  {
    icon: Layers,
    tag: '01',
    title: 'Premium Web Design',
    desc: 'Custom-built websites designed to elevate your brand, strengthen credibility, and create a lasting first impression.',
  },
  {
    icon: Fingerprint,
    tag: '02',
    title: 'Brand Identity',
    desc: 'Strategic visual identity systems crafted to establish distinction, consistency, and recognition across every platform.',
  },
  {
    icon: Compass,
    tag: '03',
    title: 'Digital Strategy',
    desc: 'Purpose-driven digital direction designed to strengthen positioning, engagement, and long-term growth.',
  },
  {
    icon: Gauge,
    tag: '04',
    title: 'Performance Optimization',
    desc: 'Modern websites engineered for speed, responsiveness, SEO readiness, and seamless user experience.',
  },
  {
    icon: MousePointer2,
    tag: '05',
    title: 'UI / UX Experience',
    desc: 'Refined interfaces designed to create intuitive, high-end digital experiences that feel effortless to navigate.',
  },
  {
    icon: LifeBuoy,
    tag: '06',
    title: 'Ongoing Support',
    desc: 'Reliable website maintenance, updates, and strategic support to ensure long-term performance and stability.',
  },
]

function ServiceCard({ icon: Icon, tag, title, desc, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative p-9 cursor-default flex flex-col"
      style={{
        background: hovered ? 'rgba(201,168,76,0.04)' : 'rgba(255,255,255,0.018)',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.32)' : 'rgba(255,255,255,0.06)'}`,
        boxShadow: hovered ? '0 8px 40px rgba(201,168,76,0.07)' : '0 0 0 transparent',
        transition: 'border-color 0.45s ease, background 0.45s ease, box-shadow 0.45s ease',
      }}
    >
      {/* Tag */}
      <div
        className="text-[10px] tracking-[0.35em] font-mono mb-7"
        style={{ color: hovered ? 'rgba(232,201,122,0.7)' : 'rgba(201,168,76,0.35)', transition: 'color 0.4s ease' }}
      >
        {tag}
      </div>

      {/* Icon */}
      <div
        className="w-11 h-11 flex items-center justify-center mb-7"
        style={{
          border: `1px solid ${hovered ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.2)'}`,
          background: hovered ? 'rgba(201,168,76,0.06)' : 'transparent',
          color: hovered ? '#E8C97A' : '#C9A84C',
          transition: 'border-color 0.4s ease, background 0.4s ease, color 0.4s ease',
        }}
      >
        <Icon size={20} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3
        className="font-semibold text-base tracking-wide mb-3"
        style={{ color: hovered ? '#ffffff' : 'rgba(255,255,255,0.88)', transition: 'color 0.4s ease' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-white/40 text-sm leading-relaxed">{desc}</p>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-px"
        animate={{ width: hovered ? '100%' : '0%', opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        style={{ background: 'linear-gradient(90deg, #C9A84C, #E8C97A, transparent)' }}
      />
    </motion.div>
  )
}

export default function Services() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section
      id="services"
      className="relative py-32 lg:py-40 overflow-hidden"
      style={{ background: '#0a0a0a' }}
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
          backgroundImage: 'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(201,168,76,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={titleRef} className="max-w-2xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-px w-8" style={{ background: '#C9A84C' }} />
            <span className="text-xs tracking-[0.4em] uppercase font-medium" style={{ color: '#C9A84C' }}>
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Elevating Brands Through{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Digital Excellence.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/40 text-lg leading-relaxed"
          >
            Every digital experience we create is strategically designed to elevate brands
            with precision, performance, and distinction.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <ServiceCard key={svc.tag} {...svc} index={i} />
          ))}
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
