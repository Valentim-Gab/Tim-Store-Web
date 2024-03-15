import React, { DetailedHTMLProps, ReactNode, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'
import './input-main.scss'

const InputMainStyle = tv({
  base: 'flex items-center gap-2 w-full rounded border relative',
})

interface InputMainInputProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: ReactNode
}

const InputMainInput = forwardRef<HTMLDivElement, InputMainInputProps>(
  (props, ref) => {
    return (
      <div ref={ref} className={twMerge(InputMainStyle(), props.className)}>
        {props.children}
      </div>
    )
  }
)

InputMainInput.displayName = 'InputMainInput'

export default InputMainInput
