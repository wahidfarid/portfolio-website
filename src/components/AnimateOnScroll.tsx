import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface AnimateOnScrollProps {
  children: React.ReactNode
  delay?: number
  backgroundColor?: string
}

const AnimateOnScroll = ({ children, delay = 0, backgroundColor }: AnimateOnScrollProps) => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div style={{ backgroundColor }}>
      <div
        ref={ref}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default AnimateOnScroll
