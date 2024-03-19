import { Gender } from './Gender'

export interface User {
  name: string
  last_name?: string
  email?: string
  password?: string
  active?: boolean
  cnpj?: string
  cpf?: string
  date_birth?: Date
  phone_number?: string
  role?: string
  profile_image?: string
  gender?: Gender
}
