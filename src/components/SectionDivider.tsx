import React from 'react'

type Variant = 'wave' | 'tilt' | 'curve'

interface SectionDividerProps {
  topColor: string
  bottomColor: string
  variant: Variant
}

const paths: Record<Variant, string> = {
  wave: 'M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z',
  curve: 'M0,40 Q720,0 1440,40 L1440,60 L0,60 Z',
  tilt: 'M0,60 L1440,0 L1440,60 Z',
}

const SectionDivider = ({ topColor, bottomColor, variant }: SectionDividerProps) => (
  <div style={{ backgroundColor: topColor, lineHeight: 0 }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      style={{ display: 'block', width: '100%', height: '60px' }}
    >
      <path d={paths[variant]} fill={bottomColor} />
    </svg>
  </div>
)

export default SectionDivider
