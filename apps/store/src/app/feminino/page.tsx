'use client'

import React, { useEffect, useMemo, useState } from 'react'

export class UserService {
  async getPosts() {
    try {
      const res = await fetch('http://localhost:3001/test', {
        next: {
          tags: ['feminino'],
        }
      })

      if (!res.ok) throw new Error('Erro ao buscar posts')

      const data = await res.json()

      return data
    } catch (error) {
      throw new Error('Erro ao buscar posts')
    }
  }
}

export default function Feminino() {
  const [posts, setPosts] = useState()
  const userService = useMemo(() => new UserService(), [])

  useEffect(() => {
    userService
      .getPosts()
      .then((data) => setPosts(data))
      .catch((error) => console.log(error))
  }, [userService])

  function click() {
    userService
      .getPosts()
      .then((data) => setPosts(data))
      .catch((error) => console.log(error))

    console.log(posts)
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <button onClick={click} className="border border-white px-8 py-4 rounded">
        CLICK ME
      </button>
      <div>{JSON.stringify(posts)}</div>
    </div>
  )
}
