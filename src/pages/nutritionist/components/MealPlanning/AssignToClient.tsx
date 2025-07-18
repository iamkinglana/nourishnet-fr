import { useEffect, useState } from "react"
import axios from "../../../../api/axios"

export default function AssignToClient({ planId }: { planId: string }) {
  const [clients, setClients] = useState([])

  useEffect(() => {
    axios.get("/nutritionist/clients").then(res => setClients(res.data))
  }, [])

  const handleAssign = async (clientId: string) => {
    await axios.post(`/nutritionist/meal-plans/${planId}/assign`, { client_id: clientId })
    alert("Meal plan assigned!")
  }

  return (
    <select onChange={e => handleAssign(e.target.value)} className="border rounded px-2 py-1">
      <option value="">Assign to client</option>
      {clients.map((c: any) => (
        <option key={c.id} value={c.id}>{c.name}</option>
      ))}
    </select>
  )
}
