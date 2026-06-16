import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label'

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(false) // hovering an interactive element
  const [isTouch, setIsTouch] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Dot follows instantly
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 40 })
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 40 })

  // Ring follows with slight lag
  const ringX = useSpring(mouseX, { stiffness: 180, damping: 28 })
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 28 })

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true)
      return
    }

    const move = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setVisible(true)
    }

    const hide = () => setVisible(false)
    const show = () => setVisible(true)
    const over = (e) => setActive(!!e.target.closest?.(INTERACTIVE))

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', hide)
    window.addEventListener('mouseenter', show)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', hide)
      window.removeEventListener('mouseenter', show)
      window.removeEventListener('mouseover', over)
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      {/* Outer ring — grows and fills over interactive elements */}
      <motion.div
        animate={{
          scale: active ? 1.8 : 1,
          opacity: visible ? 1 : 0,
          backgroundColor: active ? 'rgba(201,168,76,0.10)' : 'rgba(201,168,76,0)',
          borderColor: active ? 'rgba(232,201,122,0.8)' : 'rgba(201,168,76,0.55)',
        }}
        transition={{
          scale: { type: 'spring', stiffness: 300, damping: 20 },
          opacity: { duration: 0.3 },
          backgroundColor: { duration: 0.25 },
          borderColor: { duration: 0.25 },
        }}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          position: 'fixed',
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          border: '1px solid rgba(201,168,76,0.55)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
        }}
      />

      {/* Inner dot — hides when ring expands over interactive elements */}
      <motion.div
        animate={{ opacity: visible ? (active ? 0 : 1) : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          position: 'fixed',
          top: 0,
          left: 0,
          width: 5,
          height: 5,
          background: '#C9A84C',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
        }}
      />
    </>
  )
}
