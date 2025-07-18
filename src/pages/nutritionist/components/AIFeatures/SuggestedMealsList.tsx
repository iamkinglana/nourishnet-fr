export default function SuggestedMealsList({ meals }: { meals: any[] }) {
  return (
    <div className="grid gap-4 mt-6">
      {meals.map((meal, i) => (
        <div key={i} className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">{meal.name}</h3>
          <p className="text-sm text-gray-600">{meal.type}</p>
          <p className="text-xs mt-1">Calories: {meal.calories} | Protein: {meal.protein}g</p>
          <p className="text-xs">Ingredients: {meal.ingredients?.join(", ")}</p>
        </div>
      ))}
    </div>
  )
}
