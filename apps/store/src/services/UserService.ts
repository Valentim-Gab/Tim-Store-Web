import { User } from '@/interfaces/User'

export class UserService {
  async create(user: User) {
    console.log(user)

    try {
      const res = await fetch('http://localhost:3001/user', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await res.json()

      if (res.status == 400 && !res.ok) {
        throw new Error(data.message)
      }

      return data
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error('Erro ao conectar-se ao servidor')
      }

      throw error
    }
  }

  getUser() {
    const user: User = {
      name: 'teste',
      email: 'teste@email',
    }

    return user
  }
}
