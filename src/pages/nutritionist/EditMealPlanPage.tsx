import { useParams } from "react-router-dom"
import NutritionistLayout from "./components/Layout/NutritionistLayout"
import MealPlanEditor from "./components/MealPlanning/MealPlanEditor"

export default function EditMealPlanPage() {
  const { id } = useParams()

  return (
    <NutritionistLayout>
      <h1 className="text-2xl font-bold mb-4">Edit Meal Plan</h1>
      <MealPlanEditor planId={id!} />
    </NutritionistLayout>
  )
}
