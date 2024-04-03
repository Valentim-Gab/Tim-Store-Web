import { authOptions } from '@/auth/authOptions'
import { Env } from '@/environment/Env'
import { User } from '@/interfaces/User'
import { getServerSession } from 'next-auth'

export class UserService {
  async create(user: User) {
    console.log(user)

    try {
      const res = await fetch(`${Env.API_URL}/user`, {
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

  async getProfileImage() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      throw new Error('Usuário não autenticado')
    }

    try {
      const res = await fetch(`${Env.API_URL}/user/profile-image`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${session.tokens.token}`,
        },
      })

      const data = await res.json()

      if (res.status == 400 && !res.ok) {
        throw new Error(data.message)
      }

      return data.profile_image
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error('Erro ao conectar-se ao servidor')
      }

      throw error
    }
  }
}
