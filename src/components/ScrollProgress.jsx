import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const update = () => {
      const doc = document.documentElement
      const max = (doc.scrollHeight || document.body.scrollHeight) - window.innerHeight
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0
      if (el) el.style.transform = `scaleX(${p})`
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        zIndex: 9998,
        transformOrigin: 'left',
        transform: 'scaleX(0)',
        transition: 'transform 0.1s linear',
        background: 'linear-gradient(90deg, #C9A84C, #E8C97A)',
        boxShadow: '0 0 12px rgba(201,168,76,0.5)',
        pointerEvents: 'none',
      }}
    />
  )
}
