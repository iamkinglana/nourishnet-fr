import { useState } from "react"
import axios from "../../../../api/axios"
import SuggestedMealsList from "./SuggestedMealsList"

export default function MealSuggestionForm() {
  const [goal, setGoal] = useState("")
  const [preferences, setPreferences] = useState("")
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await axios.post("/nutritionist/meals/suggest", { goal, preferences })
    setMeals(res.data)
    setLoading(false)
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input
          type="text"
          placeholder="Dietary goal (e.g. weight loss)"
          className="w-full border px-3 py-2 rounded"
          value={goal}
          onChange={e => setGoal(e.target.value)}
        />
        <input
          type="text"
          placeholder="Preferences (e.g. high-protein, vegetarian)"
          className="w-full border px-3 py-2 rounded"
          value={preferences}
          onChange={e => setPreferences(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {loading ? "Generating..." : "Get Suggestions"}
        </button>
      </form>

      {meals.length > 0 && <SuggestedMealsList meals={meals} />}
    </div>
  )
}
