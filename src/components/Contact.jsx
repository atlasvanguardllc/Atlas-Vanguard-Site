import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, ArrowRight, Check } from 'lucide-react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_9mv8559'
const TEMPLATE_ID = 'template_wlhulli'
const PUBLIC_KEY = 'uMyrCnWltXZRO2KR8'

const info = [
  { icon: Mail, label: 'Email', value: 'atlasvanguardllc@gmail.com' },
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

function FormField({ label, children }) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.3em] uppercase text-white/30 mb-2.5">
        {label}
      </label>
      {children}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [focused, setFocused] = useState(null)
  const [btnHovered, setBtnHovered] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.company
            ? `Company: ${form.company}\n\nMessage:\n${form.message}`
            : form.message,
        },
        PUBLIC_KEY
      )
      setSent(true)
    } catch {
      setError('Something went wrong. Please try again or email us directly at atlasvanguardllc@gmail.com.')
    } finally {
      setLoading(false)
    }
  }

  const inputBase = {
    background: 'rgba(255,255,255,0.025)',
    color: '#f0ede8',
    outline: 'none',
    width: '100%',
    padding: '16px 18px',
    fontSize: '14px',
    letterSpacing: '0.02em',
    fontFamily: 'inherit',
    transition: 'border-color 0.35s ease, background 0.35s ease, box-shadow 0.35s ease',
  }

  const getInputStyle = (name) => ({
    ...inputBase,
    border: `1px solid ${focused === name ? 'rgba(201,168,76,0.45)' : 'rgba(255,255,255,0.07)'}`,
    background: focused === name ? 'rgba(201,168,76,0.028)' : 'rgba(255,255,255,0.025)',
    boxShadow: focused === name ? '0 0 0 3px rgba(201,168,76,0.06)' : 'none',
  })

  return (
    <section
      id="contact"
      className="relative py-32 lg:py-40 overflow-hidden"
      style={{ background: '#080808' }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)' }}
      />

      {/* Outer ambient glow — wide, diffused, cinematic */}
      <motion.div
        className="absolute pointer-events-none"
        animate={{ opacity: [0.55, 0.75, 0.55] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          bottom: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '600px',
          background: 'radial-gradient(ellipse at 50% 80%, rgba(201,168,76,0.09) 0%, rgba(180,140,50,0.04) 45%, transparent 72%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Mid glow — centered behind form area */}
      <motion.div
        className="absolute pointer-events-none"
        animate={{ opacity: [0.4, 0.62, 0.4] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        style={{
          bottom: '0%',
          right: '5%',
          width: '520px',
          height: '420px',
          background: 'radial-gradient(ellipse at 60% 90%, rgba(201,168,76,0.08) 0%, rgba(180,140,50,0.03) 50%, transparent 75%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Subtle warm floor glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        animate={{ opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        style={{
          height: '35%',
          background: 'radial-gradient(ellipse 65% 100% at 50% 100%, rgba(201,168,76,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <div>
            <FadeUp>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-8" style={{ background: '#C9A84C' }} />
                <span className="text-xs tracking-[0.4em] uppercase font-medium" style={{ color: '#C9A84C' }}>
                  Contact
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2
                className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Let's Build a Presence That{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #C9A84C, #E8C97A)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Reflects Excellence.
                </span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-white/40 text-base leading-relaxed mb-12">
                Built with precision and executed with purpose, our websites are designed
                to elevate your brand above standard.
              </p>
            </FadeUp>

            <div className="space-y-6">
              {info.map((item, i) => (
                <FadeUp key={item.label} delay={0.2 + i * 0.08}>
                  <div className="flex items-center gap-5 group">
                    <div
                      className="w-11 h-11 flex items-center justify-center shrink-0"
                      style={{
                        border: '1px solid rgba(201,168,76,0.22)',
                        color: '#C9A84C',
                        transition: 'border-color 0.35s ease, background 0.35s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)'
                        e.currentTarget.style.background = 'rgba(201,168,76,0.06)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.22)'
                        e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      <item.icon size={16} />
                    </div>
                    <div>
                      <div className="text-white/28 text-[10px] tracking-[0.3em] uppercase mb-1">{item.label}</div>
                      <div className="text-white/80 text-base">{item.value}</div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <FadeUp delay={0.2}>
            {sent ? (
              <div
                className="h-full min-h-80 flex flex-col items-center justify-center text-center p-14"
                style={{ border: '1px solid rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.03)' }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-6"
                  style={{ border: '1px solid #C9A84C', color: '#C9A84C' }}
                >
                  <Check size={20} />
                </div>
                <h3
                  className="text-white text-xl font-semibold mb-3"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Inquiry Received
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Thank you for reaching out. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Full Name">
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={getInputStyle('name')}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                    />
                  </FormField>
                  <FormField label="Email">
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={getInputStyle('email')}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                    />
                  </FormField>
                </div>

                <FormField label="Company">
                  <input
                    type="text"
                    placeholder="Your Organization"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    style={getInputStyle('company')}
                    onFocus={() => setFocused('company')}
                    onBlur={() => setFocused(null)}
                  />
                </FormField>

                <FormField label="Message">
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your brand and project…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...getInputStyle('message'), resize: 'none' }}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                  />
                </FormField>

                {error && (
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,100,100,0.85)' }}>
                    {error}
                  </p>
                )}

                <div className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={loading ? {} : { y: -2 }}
                    onHoverStart={() => !loading && setBtnHovered(true)}
                    onHoverEnd={() => setBtnHovered(false)}
                    className="flex items-center gap-3 w-full justify-center px-8 py-5 text-sm tracking-[0.18em] uppercase font-semibold"
                    style={{
                      background: loading ? 'rgba(201,168,76,0.5)' : btnHovered ? '#E8C97A' : '#C9A84C',
                      color: '#080808',
                      boxShadow: btnHovered && !loading ? '0 4px 24px rgba(201,168,76,0.18)' : 'none',
                      transition: 'background 0.35s ease, box-shadow 0.35s ease',
                      cursor: loading ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {loading ? 'Sending…' : 'Submit Inquiry'}
                    {!loading && (
                      <ArrowRight
                        size={15}
                        style={{
                          transform: btnHovered ? 'translateX(4px)' : 'translateX(0)',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
