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

export type {AuthContextRequirements, User, SigInRequirements}