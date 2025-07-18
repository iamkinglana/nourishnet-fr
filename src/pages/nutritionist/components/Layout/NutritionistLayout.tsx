import NutritionistSidebar from "./NutritionistSidebar"

export default function NutritionistLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <NutritionistSidebar />
      <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
        {children}
      </main>
    </div>
  )
}
