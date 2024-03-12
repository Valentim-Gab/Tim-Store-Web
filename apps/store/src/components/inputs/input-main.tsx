import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'
import './input-main.scss'

const InputMainStyle = tv({
  base: 'flex items-center gap-2 w-full rounded border relative',
})

interface InputMainProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const InputMain = forwardRef<HTMLInputElement, InputMainProps>((props, ref) => {
  const { className, placeholder, ...rest } = props

  return (
    <div ref={ref} className={twMerge(InputMainStyle(), className)}>
      <input
        {...rest}
        data-input={props.value != ''}
        className="focus-visible:outline-none bg-transparent form-input w-full p-4"
        spellCheck="false"
      />
      <label
        htmlFor={props.name}
        className="form-label"
        data-label={props.value != ''}
      >
        {placeholder}
      </label>
    </div>
  )
})

InputMain.displayName = 'InputMain'

export default InputMain
