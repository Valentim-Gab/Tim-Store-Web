'use client'

import React, { useEffect } from 'react'
import { api } from '../api'
import { destroyCookie } from 'nookies'

import { NextRequest } from 'next/server'
import { FetchAuth } from './feth'
import { GetServerSideProps } from 'next'
import { get } from 'http'
import { redirect } from 'next/dist/server/api-utils'
import { getApiClient } from '../axios'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '@/components/stripe/checkout-form'

const stripe = loadStripe('{{CHAVE PÚBLICA}}')

export default function Home(ctx: any) {
  // const res = await FetchAuth('http://localhost:3001/user/admin', 'GET')

  // console.log(await res.json())

  // try {
  // useEffect(() => {
  //   const apiClient = getApiClient(ctx)

  //   // apiClient.get('/user/admin')
  //   // .then(res => {
  //   //   console.log(res.data)
  //   // })
  //   // .catch((err) => {
  //   //   console.error("Ocorreu um erro", err.data)
  //   // })

  //   FetchAuth('http://localhost:3001/user/admin', 'GET', ctx).then((data) => {
  //     console.log(data)
  //   })
  //   .catch((err) => {
  //     console.log('Erro')
  //   })
  // })

  //   //console.log(res.data)
  // } catch (err) {

  // }

  //console.log(ctx)

  const options = {
    clientSecret: '{{CLIENT_SECRET}}'
  }

  return (
    <Elements stripe={stripe} options={options}>
      <CheckoutForm />
    </Elements>
  )
}