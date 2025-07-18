import { useEffect, useState } from "react"
import axios from "../../../../api/axios"
import ProgressChart from "./ProgressChart"

export default function ClientProgress({ clientId }: { clientId: string }) {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`/nutritionist/clients/${clientId}/progress`).then(res => setData(res.data))
  }, [clientId])

  return (
    <div className="space-y-6">
      <ProgressChart data={data} metric="weight" color="#4ade80" />
      <ProgressChart data={data} metric="energy" color="#60a5fa" />
      <ProgressChart data={data} metric="mood" color="#facc15" />
    </div>
  )
}
