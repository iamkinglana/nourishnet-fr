import { useForm } from "react-hook-form"
import axios from "../../../api/axios"
import { useState } from "react"

export default function CheckInForm() {
  const { register, handleSubmit, reset } = useForm()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const onSubmit = async (data: any) => {
    try {
      await axios.post("/client/check-ins", data)
      setSuccess(true)
      reset()
    } catch (err: any) {
      setError("Something went wrong. Try again.")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl bg-white p-6 rounded shadow space-y-4">
      {success && <p className="text-green-600">Check-in submitted successfully!</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div>
        <label className="block font-medium">Weight (kg)</label>
        <input type="number" {...register("weight", { required: true })} className="w-full border px-3 py-2 rounded" />
      </div>

      <div>
        <label className="block font-medium">Mood</label>
        <select {...register("mood", { required: true })} className="w-full border px-3 py-2 rounded">
          <option value="">Select mood</option>
          <option value="Happy">Happy</option>
          <option value="Neutral">Neutral</option>
          <option value="Tired">Tired</option>
          <option value="Stressed">Stressed</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Energy (1-10)</label>
        <input type="number" min={1} max={10} {...register("energy")} className="w-full border px-3 py-2 rounded" />
      </div>

      <div>
        <label className="block font-medium">Notes</label>
        <textarea {...register("notes")} rows={3} className="w-full border px-3 py-2 rounded" />
      </div>

      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Submit Check-In
      </button>
    </form>
  )
}
