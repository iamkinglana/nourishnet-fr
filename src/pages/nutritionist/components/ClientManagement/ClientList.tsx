import { useEffect, useState } from "react"
import axios from "../../../../api/axios"
import ClientCard from "./ClientCard"

type ClientType = {
  id: number
  name: string
  email: string
  // add any other expected fields here
}

export default function ClientList() {
  const [clients, setClients] = useState<ClientType[]>([])

  useEffect(() => {
    axios.get("/nutritionist/clients")
      .then(res => {
        const data = res.data?.clients
        if (Array.isArray(data)) {
          setClients(data)
        } else {
          setClients([]) // fallback to empty array
        }
      })
      .catch(() => {
        setClients([])
      })
  }, [])

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {clients.map(client => (
        <ClientCard key={client.id} client={client} />
      ))}
    </div>
  )
}
