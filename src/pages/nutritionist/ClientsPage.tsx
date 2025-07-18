import NutritionistLayout from "./components/Layout/NutritionistLayout"
import ClientList from "./components/ClientManagement/ClientList"

export default function ClientsPage() {
  return (
    <NutritionistLayout>
      <h1 className="text-2xl font-bold mb-4">Clients</h1>
      <ClientList />
    </NutritionistLayout>
  )
}
