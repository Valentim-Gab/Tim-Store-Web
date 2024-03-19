'use client'

import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import React, { ReactNode, forwardRef, useState } from 'react'
import { ControllerRenderProps } from 'react-hook-form'
import { VariantProps, tv } from 'tailwind-variants'
import { useMask } from '@react-input/mask'
import { ptBR } from 'date-fns/locale'
import { inputMainInputStyle } from '.'
import './input-main.scss'

interface InputMainInputProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    VariantProps<typeof inputMainInputStyle> {
  field: any
  label?: ReactNode
}

const InputMainDate = forwardRef<HTMLInputElement, InputMainInputProps>(
  (props, ref) => {
    const { styleLabel, field, label, ...rest } = props

    const [dateValue, setDateValue] = useState<string>(
      field.value instanceof Date ? field.value.toLocaleDateString('pt-BR') : ''
    )

    const inputRef = useMask({
      mask: 'dd/mm/yyyy',
      replacement: { d: /\d/, m: /\d/, y: /\d/ },
    })

    function formatDate(inputValue: string) {
      const [dayStr, monthStr, yearStr] = inputValue.split('/')
      const day = Number(dayStr)
      const month = Number(monthStr)
      const year = Number(yearStr)

      const date = new Date()
      date.setFullYear(year, month - 1, day)
      date.setMonth(month - 1)
      date.setDate(day)

      if (day > 31 || month > 12) {
        setDateValue('')
        field.onChange(null)
      }

      return date
    }

    return (
      <div className="flex items-center w-full">
        <input
          ref={inputRef}
          type="text"
          onChange={(date) => {
            setDateValue(date.target.value)
            if (date.target.value.length === 10) {
              field.onChange(formatDate(date.target.value))
            } else {
              field.onChange(new Date())
            }
          }}
          value={dateValue}
          className={inputMainInputStyle({ styleLabel })}
          data-input={dateValue != ''}
          name={field.name}
          id={field.name}
          aria-describedby={rest['aria-describedby']}
          inputMode='numeric'
        />
        {label}
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex items-center justify-center p-3 rounded">
              <i className="icon-[solar--calendar-broken] w-[20px] h-[20px]"></i>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={field.value}
              onSelect={(date) => {
                field.onChange(date)
                setDateValue(date?.toLocaleDateString('pt-BR') ?? '')
              }}
              disabled={(date) =>
                date > new Date() || date < new Date('1900-01-01')
              }
              initialFocus
              defaultMonth={dateValue != '' ? field.value : new Date()}
              locale={ptBR}
            />
          </PopoverContent>
        </Popover>
      </div>
    )
  }
)

InputMainDate.displayName = 'InputMainDate'

export default InputMainDate
