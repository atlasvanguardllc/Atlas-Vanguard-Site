import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
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
      if (!visible) setVisible(true)
    }

    const hide = () => setVisible(false)
    const show = () => setVisible(true)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', hide)
    window.addEventListener('mouseenter', show)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', hide)
      window.removeEventListener('mouseenter', show)
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      {/* Outer ring */}
      <motion.div
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
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Inner dot */}
      <motion.div
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
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
    </>
  )
}
