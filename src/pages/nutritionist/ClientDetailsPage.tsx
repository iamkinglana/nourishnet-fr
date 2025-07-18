import { useParams } from "react-router-dom"
import NutritionistLayout from "./components/Layout/NutritionistLayout"
import ClientDetails from "./components/ClientManagement/ClientDetails"
import ClientNotes from "./components/ClientManagement/ClientNotes"

export default function ClientDetailsPage() {
  const { id } = useParams()

  return (
    <NutritionistLayout>
      <h1 className="text-2xl font-bold mb-4">Client Profile</h1>
      <ClientDetails clientId={id!} />
      <ClientNotes clientId={id!} />
    </NutritionistLayout>
  )
}
