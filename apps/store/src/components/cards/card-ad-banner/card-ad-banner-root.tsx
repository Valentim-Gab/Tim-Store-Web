import Link from 'next/link'
import React, { AnchorHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { VariantProps, tv } from 'tailwind-variants'
import './card-ad-banner.scss'

const linkCardAdBanner = tv({
  base: 'shadow-pop-tr flex items-center justify-center gap-4 w-[280px] px-6 py-4 bg-card-ad-banner text-black rounded shadow lg:w-[400px] lg:py-6',
  variants: {
    colors: {
      second: 'bg-card-ad-banner-second text-white',
    },
  },
})

export default function CardAdBannerRoot({
  colors,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof linkCardAdBanner>) {
  return (
    <Link href={rest.href ?? '#'} className={linkCardAdBanner({ colors })}>
      {rest.children}
    </Link>
  )
}
