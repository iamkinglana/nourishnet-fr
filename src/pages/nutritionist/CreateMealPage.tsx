// CreateMealPage.tsx
import NutritionistLayout from "./components/Layout/NutritionistLayout"
import MealForm from "./components/MealPlanning/MealForm"

export default function CreateMealPage() {
  return (
    <NutritionistLayout>
      <h1 className="text-2xl font-bold mb-4">Add New Meal</h1>
      <MealForm />
    </NutritionistLayout>
  )
}
