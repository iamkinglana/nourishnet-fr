import { useEffect, useState } from "react"
import axios from "../../../../api/axios"
import { useForm } from "react-hook-form"

type Note = {
  id: string
  content: string
  created_at: string
}

export default function ClientNotes({ clientId }: { clientId: string }) {
  const { register, handleSubmit, reset } = useForm()
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    axios
      .get(`/nutritionist/clients/${clientId}/notes`)
      .then(res => {
        if (Array.isArray(res.data)) {
          setNotes(res.data)
        } else {
          console.error("Unexpected notes response:", res.data)
          setError("Invalid response format.")
          setNotes([])
        }
      })
      .catch(err => {
        console.error("Failed to fetch notes:", err)
        setError("Failed to load notes.")
        setNotes([])
      })
      .finally(() => setLoading(false))
  }, [clientId])

  const onSubmit = async (data: { content: string }) => {
    try {
      const res = await axios.post(`/nutritionist/clients/${clientId}/notes`, data)
      setNotes(prev => [res.data, ...prev])
      reset()
    } catch (err) {
      console.error("Failed to add note:", err)
    }
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-3">Client Notes</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 mb-4">
        <textarea
          {...register("content", { required: true })}
          rows={3}
          className="w-full border px-3 py-2 rounded"
          placeholder="Write a note..."
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Note
        </button>
      </form>

      {loading ? (
        <p>Loading notes...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : notes.length === 0 ? (
        <p className="text-gray-500 italic">No notes yet.</p>
      ) : (
        <ul className="space-y-2">
          {notes.map(note => (
            <li key={note.id} className="bg-gray-100 p-3 rounded text-sm">
              {note.content}
              <div className="text-gray-500 text-xs mt-1">
                {new Date(note.created_at).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
