import React from 'react'
import { cookies } from 'next/headers'



export default function Test() {

  async function local() {
    'use server'
    
    cookies().set('test', 'aaaaaa')
  }

  // const res = await fetch("http://localhost:3001/user", {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': ''
  //   }
  // })
  // const json = await res.json()

  // local()

  const cookieStore = cookies()

  console.log(cookieStore.get('test'))

  //console.log(json)

  

  return (
    <div>
      test
    </div>
  )
}
