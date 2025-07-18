import { Link } from "react-router-dom"

export default function NutritionistSidebar() {
  return (
    <aside className="w-64 h-screen bg-teal-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">NourishNet</h2>
      <nav className="space-y-3">
        <Link to="/n/dashboard" className="block hover:text-yellow-300">Dashboard</Link>
        <Link to="/n/clients" className="block hover:text-yellow-300">Clients</Link>
        <Link to="/n/meals" className="block hover:text-yellow-300">Meals</Link>
        <Link to="/n/meal-plans" className="block hover:text-yellow-300">Meal Plans</Link>
        <Link to="/n/reports" className="block hover:text-yellow-300">Reports</Link>
      </nav>
    </aside>
  )
}
