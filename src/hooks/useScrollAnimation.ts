import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation() {
  // Default to visible during SSR to avoid flash of invisible content
  const [isVisible, setIsVisible] = useState(typeof window === 'undefined')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}
