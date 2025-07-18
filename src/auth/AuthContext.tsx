import { createContext, useContext, useEffect, useState } from "react"
import axios from "../api/axios"

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = async (email: string, password: string) => {
    const res = await axios.post("/auth/login", { email, password })
    const { user, token } = res.data
    localStorage.setItem("token", token)
    setUser(user)
  }

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      axios.get("/auth/me", {
        headers: { Authorization: `Bearer ${token}` }
      }).then(res => setUser(res.data.user)).catch(() => logout())
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
