import NutritionistLayout from "./components/Layout/NutritionistLayout"
import MealList from "./components/MealPlanning/MealList"
import { Link } from "react-router-dom"

export default function MealsPage() {
  return (
    <NutritionistLayout>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">My Meals</h1>
        <Link to="/nutritionist/meals/new" className="bg-blue-600 text-white px-4 py-2 rounded">
          + Add Meal
        </Link>
      </div>
      <MealList />
    </NutritionistLayout>
  )
}
