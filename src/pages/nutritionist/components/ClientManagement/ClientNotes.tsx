import { useEffect, useState } from "react"
import axios from "../../../../api/axios"
import { useForm } from "react-hook-form"

export default function ClientNotes({ clientId }: { clientId: string }) {
  const { register, handleSubmit, reset } = useForm()
  const [notes, setNotes] = useState<any[]>([])

  useEffect(() => {
    axios.get(`/nutritionist/clients/${clientId}/notes`).then(res => setNotes(res.data))
  }, [clientId])

  const onSubmit = async (data: any) => {
    const res = await axios.post(`/nutritionist/clients/${clientId}/notes`, data)
    setNotes(prev => [res.data, ...prev])
    reset()
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-3">Client Notes</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 mb-4">
        <textarea {...register("content")} rows={3} className="w-full border px-3 py-2 rounded" placeholder="Write a note..." />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Note</button>
      </form>

      <ul className="space-y-2">
        {notes.map(note => (
          <li key={note.id} className="bg-gray-100 p-3 rounded text-sm">
            {note.content}
            <div className="text-gray-500 text-xs mt-1">{new Date(note.created_at).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
