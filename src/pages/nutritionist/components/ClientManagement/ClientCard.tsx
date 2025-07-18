import { Link } from "react-router-dom"

export default function ClientCard({ client }: { client: any }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold text-lg">{client.name}</h2>
      <p className="text-sm text-gray-600">{client.email}</p>
      <Link
        to={`/n/clients/${client.id}`}
        className="mt-2 inline-block text-blue-600 hover:underline"
      >
        View Profile →
      </Link>
    </div>
  )
}
