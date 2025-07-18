import { useForm } from "react-hook-form"
import axios from "../../../api/axios"
import { useEffect, useState } from "react"

export default function IntakeForm() {
  const { register, handleSubmit, reset } = useForm()
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    axios.get("/client/intake-form").then(res => {
      if (res.data) {
        reset(res.data)
        setSubmitted(true)
      }
    }).catch(() => {})
  }, [reset])

  const onSubmit = async (data: any) => {
    await axios.post("/client/intake-form", data)
    setSubmitted(true)
  }

  return (
    <div className="bg-white p-6 rounded shadow max-w-xl">
      <h2 className="text-xl font-semibold mb-4">Intake Form</h2>
      {submitted && <p className="text-green-600 mb-4">Preferences submitted!</p>}

      {!submitted && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium">Health Goals</label>
            <input {...register("goals")} className="w-full border px-3 py-2 rounded" />
          </div>

          <div>
            <label className="block font-medium">Allergies</label>
            <input {...register("allergies")} className="w-full border px-3 py-2 rounded" />
          </div>

          <div>
            <label className="block font-medium">Dietary Preferences</label>
            <input {...register("diet")} className="w-full border px-3 py-2 rounded" />
          </div>

          <div>
            <label className="block font-medium">Lifestyle / Activity</label>
            <textarea {...register("lifestyle")} rows={3} className="w-full border px-3 py-2 rounded" />
          </div>

          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            Submit Preferences
          </button>
        </form>
      )}
    </div>
  )
}
