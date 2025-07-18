import { createContext, useContext, useEffect, useState } from "react"
import axios from "../../api/axios"

export const AuthContext = createContext(null) // ✅ FIXED

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const login = async (email: string, password: string) => {
    const res = await axios.post("/auth/login", { email, password })
    const { user, token } = res.data
    localStorage.setItem("token", token)
    setUser(user)
    return user
  }

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      axios
        .get("/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data.user))
        .catch(() => logout())
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
