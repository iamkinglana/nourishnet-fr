import { useState } from "react"
import axios from "../../../../api/axios"
import GeneratedMealPlanViewer from "./GeneratedMealPlanViewer"

export default function AutoMealPlanForm() {
  const [goal, setGoal] = useState("")
  const [preferences, setPreferences] = useState("")
  const [macros, setMacros] = useState({ calories: 0, protein: 0, carbs: 0, fat: 0 })
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await axios.post("/nutritionist/meal-plans/generate", {
      goal, preferences, macros
    })
    setResult(res.data)
    setLoading(false)
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input value={goal} onChange={e => setGoal(e.target.value)}
          placeholder="Goal (e.g. muscle gain)" className="w-full border px-3 py-2 rounded" />
        <input value={preferences} onChange={e => setPreferences(e.target.value)}
          placeholder="Preferences (e.g. no dairy, high-protein)" className="w-full border px-3 py-2 rounded" />

        <div className="grid grid-cols-2 gap-2">
          <input type="number" placeholder="Calories" value={macros.calories}
            onChange={e => setMacros({ ...macros, calories: Number(e.target.value) })}
            className="border px-2 py-1 rounded" />
          <input type="number" placeholder="Protein (g)" value={macros.protein}
            onChange={e => setMacros({ ...macros, protein: Number(e.target.value) })}
            className="border px-2 py-1 rounded" />
          <input type="number" placeholder="Carbs (g)" value={macros.carbs}
            onChange={e => setMacros({ ...macros, carbs: Number(e.target.value) })}
            className="border px-2 py-1 rounded" />
          <input type="number" placeholder="Fat (g)" value={macros.fat}
            onChange={e => setMacros({ ...macros, fat: Number(e.target.value) })}
            className="border px-2 py-1 rounded" />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {loading ? "Generating..." : "Generate Meal Plan"}
        </button>
      </form>

      {result && <GeneratedMealPlanViewer plan={result} />}
    </div>
  )
}
