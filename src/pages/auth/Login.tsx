// src/pages/auth/Login.tsx
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "./AuthContext"

export default function Login() {
  const { register, handleSubmit } = useForm()
  const { login } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState("")

  const onSubmit = async (data: any) => {
    try {
      const user = await login(data.email, data.password)
      if (user.role === "nutritionist") {
        navigate("/nutritionist/dashboard")
      } else if (user.role === "client") {
        navigate("/dashboard")
      } else {
        setError("Unknown user role")
      }
    } catch (err: any) {
      setError(err.message || "Login failed")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to NourishNet</h2>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input {...register("email")} type="email" className="w-full border px-3 py-2 rounded" />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Password</label>
          <input {...register("password")} type="password" className="w-full border px-3 py-2 rounded" />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  )
}
