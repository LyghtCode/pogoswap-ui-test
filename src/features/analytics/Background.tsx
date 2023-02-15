import React from 'react'

import { classNames } from '../../functions'

interface BackgroundProps {
  background: 'dashboard' | 'bar' | 'farms' | 'pool' | 'pools' | 'token' | 'tokens'
  children: any
}

const backgrounds = {
  dashboard: '/images/analytics/space.png',
  bar: '/images/analytics/space.png',
  farms: '/images/analytics/space.png',
  pool: `/images/analytics/space.png`,
  pools: '/images/analytics/space.png',
  token: `/images/analytics/space.png`,
  tokens: '/images/analytics/space.png',
}

export default function Background({ background, children }: BackgroundProps) {
  return (
    <div className="h-[200px] md:h-[151px] w-full relative bg-dark-900">
      <div
        className={classNames(
          'absolute w-full h-full',
          !backgrounds[background].includes('svg') && 'bg-cover bg-center opacity-[0.15]'
        )}
        style={{
          backgroundImage: `url('${backgrounds[background]}')`,
          WebkitMaskImage: `url('${backgrounds[background]}')`,
        }}
      />
      <div className="absolute w-full px-8 py-8 lg:px-14 z-1">{children}</div>
    </div>
  )
}
