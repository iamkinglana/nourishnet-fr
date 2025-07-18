import GroceryListViewer from "./components/GroceryListViewer"

export default function GroceryListPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Grocery List</h1>
      <GroceryListViewer />
    </div>
  )
}
