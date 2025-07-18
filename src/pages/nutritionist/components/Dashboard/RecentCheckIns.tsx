import { useEffect, useState } from "react"
import axios from "../../../../api/axios"

export default function RecentCheckIns() {
  const [checkIns, setCheckIns] = useState([])

  useEffect(() => {
    axios.get("/nutritionist/dashboard").then(res => {
      setCheckIns(res.data.recent_check_ins || [])
    })
  }, [])

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-3">Recent Check-Ins</h2>
      <ul className="space-y-2">
        {checkIns.map((c: any, index: number) => (
          <li key={index} className="text-sm text-gray-800">
            <span className="font-semibold">{c.client_name}</span> on {new Date(c.date).toLocaleDateString()} —
            Weight: {c.weight}kg, Mood: {c.mood}/5, Energy: {c.energy}/5
          </li>
        ))}
      </ul>
    </div>
  )
}
