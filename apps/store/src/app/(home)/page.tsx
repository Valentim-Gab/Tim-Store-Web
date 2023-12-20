import React, { useEffect } from 'react'
import { api } from '../api'
import { destroyCookie } from 'nookies'

import { NextRequest } from 'next/server'
import { FetchAuth } from './feth'
import { GetServerSideProps } from 'next'
import { get } from 'http'
import { getApiClient } from '../axios'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '@/components/stripe/checkout-form'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

//const stripe = loadStripe('{{CHAVE PÚBLICA}}')

export default async function Home() {
  // const api = getApiClient()
  // await api.get('/test')

  const options = {
    clientSecret: '{{CLIENT_SECRET}}',
  }

  console.log(cookies().get('access_token'))

  // const resRefresh = await fetch('http://localhost:3001/refresh', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${cookies().get('access_token')?.value}`,
  //   },
  //   body: JSON.stringify({
  //     refresh_token: cookies().get('refresh_token')?.value,
  //   }),
  // })

  //console.log(cookies().get('teste'))

  redirect('/logout-user')

  return (
    // <Elements stripe={stripe} options={options}>
    //   <CheckoutForm />
    // </Elements>
    <div></div>
  )
}
