import { useParams } from "react-router-dom"
import NutritionistLayout from "./components/Layout/NutritionistLayout"
import ClientProgress from "./components/Analytics/ClientProgress"

export default function ClientProgressPage() {
  const { id } = useParams()

  return (
    <NutritionistLayout>
      <h1 className="text-2xl font-bold mb-4">Client Progress</h1>
      <ClientProgress clientId={id!} />
    </NutritionistLayout>
  )
}
