import NutritionistLayout from "./components/Layout/NutritionistLayout"
import AutoMealPlanForm from "./components/AIFeatures/AutoMealPlanForm"

export default function AutoMealPlanPage() {
  return (
    <NutritionistLayout>
      <h1 className="text-2xl font-bold mb-4">Auto-Generate Meal Plan</h1>
      <AutoMealPlanForm />
    </NutritionistLayout>
  )
}
