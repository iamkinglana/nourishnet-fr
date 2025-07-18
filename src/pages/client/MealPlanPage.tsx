import { useEffect, useState } from "react"
import axios from "./../../api/axios"

type Meal = { time: string; name: string }
type Plan = Record<string, Meal[]> // e.g., { Monday: [...], Tuesday: [...] }

export default function MealPlanViewer() {
  const [mealsByDay, setMealsByDay] = useState<Plan>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMealPlan = async () => {
      try {
        const res = await axios.get("/client/meal-plans")
        const latestPlan = res.data?.[0]
        if (latestPlan) {
          const details = await axios.get(`/client/meal-plans/${latestPlan.id}`)
          setMealsByDay(details.data.meals)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchMealPlan()
  }, [])

  if (loading) return <p>Loading meal plan...</p>

  return (
    <div className="grid gap-4">
      {Object.entries(mealsByDay).map(([day, meals]) => (
        <div key={day} className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">{day}</h2>
          <ul className="space-y-1">
            {meals.map((meal, idx) => (
              <li key={idx} className="text-gray-700">
                {meal.time}: <span className="font-medium">{meal.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
