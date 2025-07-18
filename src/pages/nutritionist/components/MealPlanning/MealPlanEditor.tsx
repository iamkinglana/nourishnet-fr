import { useEffect, useState } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import axios from "../../../../api/axios"
import { useNavigate } from "react-router-dom"

type FormData = {
  title: string
  days: {
    day: string
    meals: {
      time: string
      meal_id: string
    }[]
  }[]
}

const defaultDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const defaultMeals = ["Breakfast", "Lunch", "Dinner"]

export default function MealPlanEditor({ planId }: { planId?: string }) {
  const { register, control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      title: "",
      days: defaultDays.map(day => ({
        day,
        meals: defaultMeals.map(time => ({ time, meal_id: "" }))
      }))
    }
  })

  const navigate = useNavigate()
  const [meals, setMeals] = useState([])

  useEffect(() => {
    axios.get("/nutritionist/meals").then(res => setMeals(res.data))
    if (planId) {
      axios.get(`/nutritionist/meal-plans/${planId}`).then(res => reset(res.data))
    }
  }, [planId, reset])

  const onSubmit = async (data: FormData) => {
    if (planId) {
      await axios.put(`/nutritionist/meal-plans/${planId}`, data)
    } else {
      await axios.post("/nutritionist/meal-plans", data)
    }
    navigate("/n/meal-plans")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-3xl">
      <div>
        <label className="block font-medium mb-1">Plan Title</label>
        <input {...register("title", { required: true })} className="w-full border px-3 py-2 rounded" />
      </div>

      {defaultDays.map((day, i) => (
        <div key={day} className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">{day}</h3>
          {defaultMeals.map((meal, j) => (
            <div key={meal} className="mb-2">
              <label className="block font-medium">{meal}</label>
              <select {...register(`days.${i}.meals.${j}.meal_id`)} className="w-full border px-2 py-1 rounded">
                <option value="">Select meal</option>
                {meals.map((m: any) => (
                  <option key={m.id} value={m.id}>{m.name}</option>
                ))}
              </select>
              <input type="hidden" value={meal} {...register(`days.${i}.meals.${j}.time`)} />
            </div>
          ))}
        </div>
      ))}

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        {planId ? "Update Plan" : "Create Plan"}
      </button>
    </form>
  )
}
