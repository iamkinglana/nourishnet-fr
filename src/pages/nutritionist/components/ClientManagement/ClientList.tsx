import { useEffect, useState } from "react"
import axios from "../../../../api/axios"
import ClientCard from "./ClientCard"

export default function ClientList() {
  const [clients, setClients] = useState([])

  useEffect(() => {
    axios.get("/nutritionist/clients").then(res => setClients(res.data))
  }, [])

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {clients.map((client: any) => (
        <ClientCard key={client.id} client={client} />
      ))}
    </div>
  )
}
