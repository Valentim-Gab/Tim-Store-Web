import React from 'react'
import { twMerge } from 'tailwind-merge'

interface CardAdBannerIconProps {
  icon: string
}

export default function CardAdBannerIcon({ icon }: CardAdBannerIconProps) {
  return (
    <span className="flex items-center justify-center">
      <i className={twMerge('w-12 h-12 lg:w-[64px] lg:h-[64px]', icon)}></i>
    </span>
  )
}
