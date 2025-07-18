import ClientSidebar from "./components/ClientSidebar"
import OverviewCards from "./components/OverviewCards"
import TodaysMeals from "./components/TodaysMeals"
import WeeklyPreview from "./components/WeeklyPreview"
import QuickActions from "./components/QuickActions"

export default function ClientDashboard() {
  return (
    <div className="flex h-screen">
      <ClientSidebar />

      <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">Your Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <OverviewCards />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TodaysMeals />
          <WeeklyPreview />
        </div>

        <div className="mt-6">
          <QuickActions />
        </div>
      </main>
    </div>
  )
}
