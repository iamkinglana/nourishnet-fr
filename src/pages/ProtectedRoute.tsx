// import { createContext, useContext, useEffect, useState, ReactNode } from "react"
// import axios from "../api/axios"

// interface User {
//   id: string
//   email: string
//   role: string
// }

// interface AuthContextType {
//   user: User | null
//   login: (email: string, password: string) => Promise<User>
//   logout: () => void
//   loading: boolean
// }

// const AuthContext = createContext<AuthContextType>({} as AuthContextType)

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null)
//   const [loading, setLoading] = useState(true)

//   const login = async (email: string, password: string) => {
//     const res = await axios.post("/auth/login", { email, password })
//     const { user, token } = res.data
//     localStorage.setItem("token", token)
//     setUser(user)
//     return user
//   }

//   const logout = () => {
//     localStorage.removeItem("token")
//     setUser(null)
//   }

//   useEffect(() => {
//     const token = localStorage.getItem("token")
//     if (token) {
//       axios.get("/auth/me", {
//         headers: { Authorization: `Bearer ${token}` }
//       })
//       .then(res => setUser(res.data.user))
//       .catch(() => logout())
//       .finally(() => setLoading(false))
//     } else {
//       setLoading(false)
//     }
//   }, [])

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => useContext(AuthContext)


import { createContext, useContext, useEffect, useState } from "react"
import type { ReactNode } from "react"
import axios from "../api/axios"
import type { AxiosResponse } from "axios"

interface User {
  id: string
  email: string
  role: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<User>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const login = async (email: string, password: string) => {
    const res: AxiosResponse<{ user: User; token: string }> = await axios.post("/auth/login", {
      email,
      password,
    })
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
        .then((res: AxiosResponse<{ user: User }>) => setUser(res.data.user))
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

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within an AuthProvider")
  return context
}
