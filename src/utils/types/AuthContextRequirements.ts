type User = {
  name: string
  email: string
  id: string
  banner: string
  token?: string
}

interface AuthContextRequirements{
  user: User
  isAuthenticated: boolean
}

interface SigInRequirements{
  email: string
  password: string
}

interface RegisterRequirements{
  name: string
  email: string
  password: string
  banner: File
}

export type {AuthContextRequirements, User, SigInRequirements}