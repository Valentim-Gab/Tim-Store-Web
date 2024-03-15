import React, { ReactNode } from 'react'
import './input-main.scss'
import { VariantProps, tv } from 'tailwind-variants'

const inputMainLabelStyle = tv({
  base: 'form-label',
  variants: {
    styleLabel: {
      primary: 'label-primary',
    },
  },
})

interface InputMainLabelProps extends VariantProps<typeof inputMainLabelStyle> {
  name: string
  value: string
  children: ReactNode
}

export default function InputMainLabel({
  name,
  value,
  children,
  styleLabel,
}: InputMainLabelProps) {
  return (
    <label
      htmlFor={name}
      className={inputMainLabelStyle({ styleLabel })}
      data-label={value != ''}
    >
      {children}
    </label>
  )
}
