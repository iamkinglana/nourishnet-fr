export default function QuickActions() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold text-lg mb-3">Quick Actions</h2>
      <div className="flex gap-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded">Check-In</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">View Grocery List</button>
        <button className="bg-yellow-600 text-white px-4 py-2 rounded">Download PDF</button>
      </div>
    </div>
  )
}
