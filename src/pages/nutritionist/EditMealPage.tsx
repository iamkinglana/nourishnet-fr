// EditMealPage.tsx
import { useParams } from "react-router-dom"
import NutritionistLayout from "./components/Layout/NutritionistLayout"
import MealForm from "./components/MealPlanning/MealForm"

export default function EditMealPage() {
  const { id } = useParams()
  return (
    <NutritionistLayout>
      <h1 className="text-2xl font-bold mb-4">Edit Meal</h1>
      <MealForm mealId={id!} />
    </NutritionistLayout>
  )
}
