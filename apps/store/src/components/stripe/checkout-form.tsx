'use client'

import { PaymentElement } from '@stripe/react-stripe-js'
import React from 'react'

export default function CheckoutForm() {
  return (
    <form>
      <PaymentElement />
      <button type="submit">Submit</button>
    </form>
  )
}
