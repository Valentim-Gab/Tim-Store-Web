import React, { ReactNode } from 'react'
import './input-main.scss'
import { VariantProps, tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

const inputMainLabelStyle = tv({
  base: 'form-label',
  variants: {
    styleLabel: {
      primary: 'label-primary',
    },
  },
})

interface InputMainLabelProps
  extends VariantProps<typeof inputMainLabelStyle>,
    React.DetailedHTMLProps<
      React.LabelHTMLAttributes<HTMLLabelElement>,
      HTMLLabelElement
    > {
  value: string | number
  children: ReactNode
  className?: string
}

export default function InputMainLabel({
  value,
  children,
  styleLabel,
  className,
  ...rest
}: InputMainLabelProps) {
  return (
    <label
      {...rest}
      className={twMerge(inputMainLabelStyle({ styleLabel }), className)}
      data-label={
        (typeof value === 'string' && value !== '') ||
        (typeof value === 'number' && value !== undefined)
      }
    >
      {children}
    </label>
  )
}
