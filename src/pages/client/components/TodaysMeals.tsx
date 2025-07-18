import { useEffect, useState } from "react"
import axios from "../../../api/axios"

type Meal = {
  time: string
  name: string
}

export default function TodaysMeals() {
  const [meals, setMeals] = useState<Meal[]>([])

  useEffect(() => {
    axios.get("/client/upcoming-meals")
      .then(res => setMeals(res.data))
      .catch(() => setMeals([]))
  }, [])

  return (
    <div className="bg-white p-4 rounded shadow h-full">
      <h2 className="font-semibold text-lg mb-2">Today’s Meals</h2>
      {meals.length === 0 ? (
        <p>No meals found.</p>
      ) : (
        <ul className="space-y-2">
          {meals.map((meal, index) => (
            <li key={index}>🍽 {meal.time}: {meal.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
