import NutritionistLayout from "./components/Layout/NutritionistLayout"
import StatCards from "./components/Dashboard/StatCards"
import RecentCheckIns from "./components/Dashboard/RecentCheckIns"

export default function DashboardPage() {
  return (
    <NutritionistLayout>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <StatCards />
      <RecentCheckIns />
    </NutritionistLayout>
  )
}
