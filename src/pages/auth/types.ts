export interface User {
  id: string
  name: string
  email: string
  role?: string // add more fields depending on your actual user shape
}

export interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<User>
  logout: () => void
  loading: boolean
}
