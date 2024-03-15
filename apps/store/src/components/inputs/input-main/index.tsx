import { tv } from 'tailwind-variants'
import InputMainDate from './input-main-date'
import InputMainInput from './input-main-input'
import InputMainInputMask from './input-main-input-mask'
import InputMainLabel from './input-main-label'
import InputMainRoot from './input-main-root'
import './input-main.scss'

export const inputMainInputStyle = tv({
  base: 'focus-visible:outline-none bg-transparent form-input w-full p-4',
  variants: {
    styleLabel: {
      primary: 'label-primary',
    },
  },
})

export const InputMain = {
  InputMask: InputMainInputMask,
  Input: InputMainInput,
  Root: InputMainRoot,
  Label: InputMainLabel,
  Date: InputMainDate,
}
