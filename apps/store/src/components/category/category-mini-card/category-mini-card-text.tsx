import React from 'react'
import { twMerge } from 'tailwind-merge'

interface CategoryMiniCardTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export default function CategoryMiniCardText({
  ...rest
}: CategoryMiniCardTextProps) {
  return (
    <p className={twMerge('text-sm font-semibold', rest.className)}>
      {rest.children}
    </p>
  )
}
