import NutritionistLayout from "./components/Layout/NutritionistLayout"
import MealSuggestionForm from "./components/AIFeatures/MealSuggestionForm"

export default function MealSuggestionsPage() {
  return (
    <NutritionistLayout>
      <h1 className="text-2xl font-bold mb-4">AI Meal Suggestions</h1>
      <MealSuggestionForm />
    </NutritionistLayout>
  )
}
