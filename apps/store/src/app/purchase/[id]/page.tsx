import CheckoutForm from '@/components/stripe/checkout-form'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'

const stripe = loadStripe('{{CHAVE PÚBLICA}}')

export default function Purchase({ params }: {params: {id: string}}) {

  const options = {
    clientSecret: '{{CLIENT_SECRET}}',
  }

  console.log(params)

  return (
    <Elements stripe={stripe} options={options}>
      <CheckoutForm />
    </Elements>
  )
}
