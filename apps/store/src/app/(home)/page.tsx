import { cookies } from 'next/headers'
import React from 'react'
import { makeApiRequest } from '../api'

export default async function Home() {
  // const res = await fetch('http://localhost:3001/user/admin', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${cookies().get('access_token')?.value}`
  //   }
  // })     
  // console.log(await res.json())

  try {
    const data = await makeApiRequest('http://localhost:3001/user/admin', {
      method: 'GET',
    });
    console.log(data);
  } catch (error) {
    console.error('Erro:', error);
  }

  return (
    <main className="min-h-screen p-8">
      salve
    </main>
  )
}
