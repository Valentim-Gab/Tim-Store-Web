import { StripeElementsOptions } from '@stripe/stripe-js'
import StripeElement from './stripe-element'

export default async function Purchase({ params }: { params: { id: string } }) {
  const options: StripeElementsOptions = {}
  const response = await fetch(
    `http://localhost:3001/stripe/pay/${params.id}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )

  const data = await response.json()

  if (data.client_secret)
    options.clientSecret = data.client_secret

  return <StripeElement options={options} />
}
