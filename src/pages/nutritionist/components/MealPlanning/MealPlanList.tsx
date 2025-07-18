import { useEffect, useState } from "react"
import axios from "../../../../api/axios"
import { Link } from "react-router-dom"
import AssignToClient from "./AssignToClient"

export default function MealPlanList() {
  const [plans, setPlans] = useState([])

  useEffect(() => {
    axios.get("/nutritionist/meal-plans").then(res => setPlans(res.data))
  }, [])

  return (
    <div className="grid gap-4">
      {plans.map((plan: any) => (
        <div key={plan.id} className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">{plan.title}</h2>
          <p className="text-sm text-gray-500">Created: {new Date(plan.created_at).toLocaleDateString()}</p>
          <div className="mt-2 space-x-2">
            <Link to={`/n/meal-plans/${plan.id}/edit`} className="text-blue-600">Edit</Link>
            <AssignToClient planId={plan.id} />
          </div>
        </div>
      ))}
    </div>
  )
}
