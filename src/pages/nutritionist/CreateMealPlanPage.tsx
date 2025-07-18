import NutritionistLayout from "./components/Layout/NutritionistLayout"
import MealPlanEditor from "./components/MealPlanning/MealPlanEditor"

export default function CreateMealPlanPage() {
  return (
    <NutritionistLayout>
      <h1 className="text-2xl font-bold mb-4">Create Meal Plan</h1>
      <MealPlanEditor />
    </NutritionistLayout>
  )
}
