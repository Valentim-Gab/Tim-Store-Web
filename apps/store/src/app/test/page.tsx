import fetchAuthClient from '@/auth/fetch-auth-client'
import FetchAuthServer from '@/auth/fetch-auth-server'
import { redirect, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default async function Test() {
  // const [data, setData] = React.useState(null)
  // const router = useRouter()

  // useEffect(() => {
  //   fetchAuthClient({
  //     url: 'http://localhost:3001/user',
  //     method: 'GET',
  //   }).then(data => {
  //     console.log(data)
  
  //     if (!data) {
  //       return router.push('/logout')
  //     }
  
  //     setData(data)
  //   }).catch(err => {
  //     console.error(err)
  
  //     return router.push('/logout')
  //   })
  // }, [router])

  const data = await FetchAuthServer({
    url: 'http://localhost:3001/user',
    method: 'GET',
    cache: 'no-cache',
  })

  if (!data) {
    return redirect('/test')
  }

  return <div>{JSON.stringify(data)}</div>
}
