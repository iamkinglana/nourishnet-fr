import { useForm } from "react-hook-form"
import axios from "../../../api/axios"
import { useEffect, useState } from "react"

export default function ClientProfile() {
  const { register, handleSubmit, reset } = useForm()
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    axios.get("/client/profile").then(res => reset(res.data))
  }, [reset])

  const onSubmit = async (data: any) => {
    await axios.put("/client/profile", data)
    setSuccess(true)
  }

  return (
    <div className="bg-white p-6 rounded shadow max-w-xl">
      <h2 className="text-xl font-semibold mb-4">Profile</h2>
      {success && <p className="text-green-600 mb-4">Profile updated!</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input {...register("name")} className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input {...register("email")} className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block font-medium">New Password</label>
          <input type="password" {...register("password")} className="w-full border px-3 py-2 rounded" />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Update Profile
        </button>
      </form>
    </div>
  )
}
