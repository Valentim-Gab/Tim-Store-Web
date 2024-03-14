import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'
import './input-main.scss'
import { useMask, MaskProps } from '@react-input/mask'

const InputMainStyle = tv({
  base: 'flex items-center gap-2 w-full rounded border relative',
})

interface InputMainProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  mask?: {
    maskPattern: string
    replacement: MaskProps['replacement']
  }
}

const InputMain = forwardRef<HTMLInputElement, InputMainProps>((props, ref) => {
  const { className, placeholder, mask, ...rest } = props
  let inputRef = useMask({ mask: mask?.maskPattern, replacement: mask?.replacement })

  function getInput() {
    if (mask)
      return (
        <input
          {...rest}
          data-input={props.value != ''}
          className="focus-visible:outline-none bg-transparent form-input w-full p-4"
          spellCheck="false"
          ref={inputRef}
        />
      )

    return (
      <input
        {...rest}
        data-input={props.value != ''}
        className="focus-visible:outline-none bg-transparent form-input w-full p-4"
        spellCheck="false"
      />
    )
  }
  return (
    <div ref={ref} className={twMerge(InputMainStyle(), className)}>
      {getInput()}
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
