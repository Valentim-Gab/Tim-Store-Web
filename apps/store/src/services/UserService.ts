import { User } from '@/interfaces/User'

export class UserService {
  async create(user: User) {
    console.log(user)

    const res = await fetch('http://localhost:3001/user', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    console.log(await res.json())
  }

  getUser() {
    const user: User = {
      name: 'teste',
      email: 'teste@email',
    }

    return user
  }
}
