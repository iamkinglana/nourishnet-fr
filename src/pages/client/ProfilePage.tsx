import ClientProfile from "./components/ClientProfile"
import IntakeForm from "./components/IntakeForm"

export default function ProfilePage() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Profile & Preferences</h1>
      <ClientProfile />
      <IntakeForm />
    </div>
  )
}
