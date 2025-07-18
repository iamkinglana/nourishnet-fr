import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "../../../../api/axios"

export default function MealList() {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    axios.get("/nutritionist/meals").then(res => setMeals(res.data))
  }, [])

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {meals.map((meal: any) => (
        <div key={meal.id} className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">{meal.name}</h2>
          <p className="text-sm text-gray-600">{meal.type}</p>
          <p className="text-xs mt-1">Calories: {meal.calories} | Protein: {meal.protein}g</p>
          <Link to={`/n/meals/${meal.id}/edit`} className="text-blue-600 mt-2 inline-block">Edit</Link>
        </div>
      ))}
    </div>
  )
}
