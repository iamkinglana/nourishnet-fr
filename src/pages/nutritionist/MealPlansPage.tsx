import NutritionistLayout from "./components/Layout/NutritionistLayout"
import MealPlanList from "./components/MealPlanning/MealPlanList"
import { Link } from "react-router-dom"

export default function MealPlansPage() {
  return (
    <NutritionistLayout>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Meal Plans</h1>
        <Link to="/n/meal-plans/new" className="bg-blue-600 text-white px-4 py-2 rounded">
          + Create Plan
        </Link>
      </div>
      <MealPlanList />
    </NutritionistLayout>
  )
}
