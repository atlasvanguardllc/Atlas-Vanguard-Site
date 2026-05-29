import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

const sections = [
  {
    title: 'Information We Collect',
    content: `When you submit an inquiry through our contact form, we collect the following information: your full name, email address, company name (optional), and the message you provide. We do not collect any additional personal data beyond what you voluntarily provide.`,
  },
  {
    title: 'How We Use Your Information',
    content: `The information you provide is used solely to respond to your inquiry and communicate with you about potential services. We do not use your information for marketing purposes, nor do we share, sell, or rent your personal data to any third parties.`,
  },
  {
    title: 'Email Communications',
    content: `By submitting a contact form, you consent to receiving email responses from Atlas Vanguard LLC at atlasvanguardllc@gmail.com. We will only contact you in direct response to your inquiry. You may opt out of further communication at any time by replying to any email and requesting to be removed from correspondence.`,
  },
  {
    title: 'Third-Party Services',
    content: `Our contact form is powered by EmailJS, a third-party email delivery service. Your submitted form data is transmitted through EmailJS to deliver your message to us. EmailJS operates under its own privacy policy and data handling practices. We encourage you to review their privacy policy at emailjs.com. We also use Google Analytics to collect anonymized data about site traffic and user behavior to improve our website. No personally identifiable information is shared with Google Analytics.`,
  },
  {
    title: 'Cookies',
    content: `Our website uses minimal cookies to support basic functionality and analytics. Google Analytics may place cookies on your device to track anonymized usage data such as pages visited and time on site. You can disable cookies through your browser settings at any time. Disabling cookies will not affect your ability to use the site.`,
  },
  {
    title: 'Data Security',
    content: `We take reasonable precautions to protect the information you share with us. Your data is transmitted securely via HTTPS encryption. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: 'Data Retention',
    content: `We retain your contact information only for as long as necessary to respond to your inquiry and maintain a record of our communications. If you would like your information removed from our records, please contact us at atlasvanguardllc@gmail.com and we will fulfill your request promptly.`,
  },
  {
    title: 'Your Rights',
    content: `You have the right to request access to, correction of, or deletion of any personal information we hold about you. To exercise any of these rights, please contact us directly at atlasvanguardllc@gmail.com. We will respond to all requests within a reasonable timeframe.`,
  },
  {
    title: 'Changes to This Policy',
    content: `Atlas Vanguard LLC reserves the right to update this Privacy Policy at any time. Any changes will be reflected on this page with an updated effective date. Continued use of our website after changes are posted constitutes your acceptance of the updated policy.`,
  },
  {
    title: 'Contact Us',
    content: `If you have any questions or concerns regarding this Privacy Policy, please contact us at:\n\nAtlas Vanguard LLC\natlasvanguardllc@gmail.com`,
  },
]

export default function PrivacyPolicy() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ background: '#080808', minHeight: '100vh' }}>
      {/* Top bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center px-6 lg:px-12"
        style={{
          background: 'rgba(8,8,8,0.92)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(201,168,76,0.12)',
        }}
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-3 text-sm tracking-[0.15em] uppercase transition-all duration-300"
          style={{ color: '#C9A84C' }}
          onMouseEnter={(e) => { e.currentTarget.style.gap = '16px' }}
          onMouseLeave={(e) => { e.currentTarget.style.gap = '12px' }}
        >
          <ArrowLeft size={15} />
          Back to Site
        </button>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 lg:px-12 pt-36 pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-8" style={{ background: '#C9A84C' }} />
            <span className="text-xs tracking-[0.4em] uppercase font-medium" style={{ color: '#C9A84C' }}>
              Legal
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Privacy Policy
          </h1>

          <p className="text-white/52 text-sm tracking-wide mb-16">
            Effective Date: January 1, 2025 &nbsp;·&nbsp; Atlas Vanguard LLC
          </p>

          <div
            className="h-px w-full mb-16"
            style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.3), transparent)' }}
          />
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/65 text-base leading-relaxed mb-16"
        >
          Atlas Vanguard LLC ("we," "our," or "us") is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, and safeguard the information you
          provide when visiting <span style={{ color: '#C9A84C' }}>atlasvanguardllc.com</span> or
          contacting us through our website.
        </motion.p>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[10px] font-mono tracking-[0.3em]"
                  style={{ color: 'rgba(201,168,76,0.45)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2
                  className="text-base font-semibold tracking-[0.1em] uppercase text-white"
                >
                  {section.title}
                </h2>
              </div>
              <p className="text-white/62 text-sm leading-relaxed whitespace-pre-line pl-8">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer rule */}
        <div
          className="mt-20 h-px"
          style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.2), transparent)' }}
        />
        <p className="mt-8 text-white/20 text-xs tracking-wide">
          © {new Date().getFullYear()} Atlas Vanguard LLC. All rights reserved.
        </p>
      </div>
    </div>
  )
}
