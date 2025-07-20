import { useEffect, useState } from "react"
import axios from "../../../../api/axios"

export default function ClientDetails({ clientId }: { clientId: string }) {
  const [client, setClient] = useState<any>(null)

  useEffect(() => {
    axios.get(`/nutritionist/clients/${clientId}`).then(res => setClient(res.data))
  }, [clientId])

  if (!client) return <p>Loading client info...</p>

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-xl font-semibold">{client.name}</h2>
      <p>Email: {client.email}</p>
      <p>Goals: {client.intake?.goals}</p>
      <p>Allergies: {client.allergies}</p>
      <p>Diet: {client.diet}</p>
      <p>Lifestyle: {client.lifestyle}</p>
    </div>
  )
}
