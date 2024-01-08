'use client'

import CheckoutForm from '@/components/stripe/checkout-form'
import { Elements } from '@stripe/react-stripe-js'
import { StripeElementsOptions, loadStripe } from '@stripe/stripe-js'

const stripe = loadStripe('pk_test...')

export default function StripeElement({ options }: { options: StripeElementsOptions}) {
  return (
    <Elements stripe={stripe} options={options}>
      <CheckoutForm />
    </Elements>
  )
}
