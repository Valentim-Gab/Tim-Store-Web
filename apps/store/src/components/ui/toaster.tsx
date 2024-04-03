'use client'

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        icon,
        description,
        action,
        ...props
      }) {
        return (
          <Toast key={id} {...props}>
            <div className="flex items-center justify-center gap-4">
              {icon ?? icon}
              <div className="flex flex-col justify-center gap-1">
                {title && (
                  <ToastTitle className="sm:text-lg">{title}</ToastTitle>
                )}
                {description && (
                  <ToastDescription className="sm:text-base">
                    {description}
                  </ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
