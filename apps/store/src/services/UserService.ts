import { User } from "@/interfaces/User";

export class UserService {
  getUser() {
    const user: User = {
      name: 'teste',
      email: 'teste@email'
    }

    return user;
  }
}