import React, { forwardRef } from 'react'
import './input-main.scss'
import { VariantProps, tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
import { inputMainInputStyle } from '.'

interface InputMainInputProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    VariantProps<typeof inputMainInputStyle> {}

const InputMainInput = forwardRef<HTMLInputElement, InputMainInputProps>(
  (props, ref) => {
    const { styleLabel, className, ...rest } = props

    return (
      <input
        {...rest}
        data-input={
          (typeof props.value === 'string' && props.value !== '') ||
          (typeof props.value === 'number' && props.value !== undefined)
        }
        className={twMerge(inputMainInputStyle({ styleLabel }), className)}
        spellCheck="false"
      />
    )
  }
)

InputMainInput.displayName = 'InputMainInput'

export default InputMainInput
