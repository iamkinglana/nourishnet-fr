import { useEffect, useState } from "react"
import axios from "../../../../api/axios"

export default function StatCards() {
  const [stats, setStats] = useState({ total_clients: 0, total_meal_plans: 0 })

  useEffect(() => {
    axios.get("/nutritionist/dashboard").then(res => setStats(res.data))
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded shadow text-center">
        <p className="text-xl font-bold">{stats.total_clients}</p>
        <p className="text-sm text-gray-600">Clients</p>
      </div>
      <div className="bg-white p-4 rounded shadow text-center">
        <p className="text-xl font-bold">{stats.total_meal_plans}</p>
        <p className="text-sm text-gray-600">Meal Plans</p>
      </div>
    </div>
  )
}
