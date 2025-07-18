import { useState } from "react"
import axios from "../../../../api/axios"
import { useNavigate } from "react-router-dom"

export default function GeneratedMealPlanViewer({ plan }: { plan: any }) {
  const navigate = useNavigate()
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    try {
      const res = await axios.post("/nutritionist/meal-plans", plan)
      navigate(`/n/meal-plans/${res.data.id}/edit`)
    } catch (err) {
      alert("Failed to save meal plan.")
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">{plan.title}</h2>
      {plan.days.map((day: any) => (
        <div key={day.day} className="mb-6">
          <h3 className="text-lg font-bold mb-2">{day.day}</h3>
          <ul className="space-y-2">
            {day.meals.map((meal: any, idx: number) => (
              <li key={idx} className="bg-white p-3 rounded shadow text-sm">
                <strong>{meal.time}:</strong> {meal.name} – {meal.calories} kcal
                <br />
                <span className="text-gray-500">Ingredients: {meal.ingredients?.join(", ")}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button
        onClick={handleSave}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
        disabled={saving}
      >
        {saving ? "Saving..." : "Save to Meal Plans"}
      </button>
    </div>
  )
}
