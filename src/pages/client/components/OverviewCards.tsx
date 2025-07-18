import { useEffect, useState } from "react"
import axios from "../../../api/axios"

export default function OverviewCards() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    axios.get("/client/dashboard")
      .then(res => setData(res.data))
      .catch(() => setData(null))
  }, [])

  if (!data) return <p>Loading...</p>

  return (
    <>
      <div className="bg-white p-4 rounded shadow">Weight: {data.weight} kg</div>
      <div className="bg-white p-4 rounded shadow">Next Meal: {data.nextMeal}</div>
      <div className="bg-white p-4 rounded shadow">Mood: {data.mood}</div>
      <div className="bg-white p-4 rounded shadow">Energy: {data.energy}</div>
    </>
  )
}
