// src/components/ui/FadeIn.jsx
// ─────────────────────────────────────────────────────
// Scroll-triggered fade/slide animation.
// Uses IntersectionObserver — no external dependencies.
// Elements already in viewport on load animate immediately.
// ─────────────────────────────────────────────────────
import { useEffect, useRef, useState } from 'react'

/**
 * @param {object}  props
 * @param {React.ReactNode} props.children
 * @param {'up'|'down'|'left'|'right'|'none'} [props.direction='up']
 * @param {number}  [props.delay=0]       — ms delay before animation
 * @param {number}  [props.threshold=0.1] — % of element visible before trigger
 * @param {string}  [props.className]
 */
export default function FadeIn({
  children,
  direction = 'up',
  delay     = 0,
  threshold = 0.1,
  className = '',
}) {
  const ref             = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      // rootMargin pushes the trigger point so elements near
      // the top of the page fire on load without needing to scroll
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const offsets = {
    up:    'translateY(28px)',
    down:  'translateY(-28px)',
    left:  'translateX(28px)',
    right: 'translateX(-28px)',
    none:  'translateY(0)',
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0) translateX(0)' : offsets[direction],
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}