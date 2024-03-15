import React, { forwardRef } from 'react'
import './input-main.scss'
import { useMask, MaskProps } from '@react-input/mask'
import './input-main.scss'
import { VariantProps } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
import { inputMainInputStyle } from '.'

interface InputMainInputMaskProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    VariantProps<typeof inputMainInputStyle> {
  mask: string
  replacement: MaskProps['replacement']
}

const InputMainInputMask = forwardRef<
  HTMLInputElement,
  InputMainInputMaskProps
>((props, ref) => {
  const { className, mask, replacement, styleLabel, ...rest } = props

  const inputRef = useMask({
    mask: mask,
    replacement: replacement,
  })

  return (
    <input
      {...rest}
      data-input={props.value != ''}
      className={twMerge(inputMainInputStyle({ styleLabel }), className)}
      spellCheck="false"
      ref={inputRef}
    />
  )
})

InputMainInputMask.displayName = 'InputMainInputMask'

export default InputMainInputMask
