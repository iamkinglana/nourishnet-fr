import { useEffect, useState } from "react"
import axios from "../../../api/axios"

type GroceryList = Record<string, string[]> // e.g., { Fruits: ['Bananas', 'Oranges'] }

export default function GroceryListViewer() {
  const [groceryList, setGroceryList] = useState<GroceryList>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGroceryList = async () => {
      try {
        const plans = await axios.get("/client/meal-plans")
        const latestPlan = plans.data?.[0]
        if (latestPlan) {
          const res = await axios.get(`/client/meal-plans/${latestPlan.id}/grocery-list`)
          setGroceryList(res.data)
        }
      } catch (err) {
        console.error("Failed to load grocery list", err)
      } finally {
        setLoading(false)
      }
    }

    fetchGroceryList()
  }, [])

  if (loading) return <p>Loading grocery list...</p>

  return (
    <div className="grid gap-4">
      {Object.entries(groceryList).map(([category, items]) => (
        <div key={category} className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">{category}</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
