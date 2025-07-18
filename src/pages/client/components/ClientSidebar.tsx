import { Link } from "react-router-dom"

export default function ClientSidebar() {
  return (
    <aside className="w-64 h-full bg-blue-800 text-white p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-4">NourishNet</h2>
      <nav className="space-y-2">
        <Link to="/dashboard" className="block hover:text-yellow-300">Dashboard</Link>
        <Link to="/meal-plan" className="block hover:text-yellow-300">Meal Plan</Link>
        <Link to="/grocery-list" className="block hover:text-yellow-300">Grocery List</Link>
        <Link to="/check-in" className="block hover:text-yellow-300">Check-In</Link>
        <Link to="/profile" className="block hover:text-yellow-300">Profile</Link>
      </nav>
    </aside>
  )
}
