import { useEffect, useState } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import axios from "../../../../api/axios"
import { useNavigate } from "react-router-dom"

export default function MealForm({ mealId }: { mealId?: string }) {
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: "",
      type: "Lunch",
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      ingredients: [{ name: "", quantity: "" }]
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients"
  })

  const navigate = useNavigate()

  useEffect(() => {
    if (mealId) {
      axios.get(`/nutritionist/meals/${mealId}`).then(res => reset(res.data))
    }
  }, [mealId, reset])

  const onSubmit = async (data: any) => {
    if (mealId) {
      await axios.put(`/nutritionist/meals/${mealId}`, data)
    } else {
      await axios.post("/nutritionist/meals", data)
    }
    navigate("/n/meals")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl">
      <input {...register("name", { required: true })} placeholder="Meal Name" className="w-full border px-3 py-2 rounded" />

      <select {...register("type")} className="w-full border px-3 py-2 rounded">
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select>

      <div className="grid grid-cols-2 gap-4">
        <input type="number" {...register("calories")} placeholder="Calories" className="border px-3 py-2 rounded" />
        <input type="number" {...register("protein")} placeholder="Protein (g)" className="border px-3 py-2 rounded" />
        <input type="number" {...register("carbs")} placeholder="Carbs (g)" className="border px-3 py-2 rounded" />
        <input type="number" {...register("fat")} placeholder="Fat (g)" className="border px-3 py-2 rounded" />
      </div>

      <h3 className="text-lg font-semibold mt-4">Ingredients</h3>
      {fields.map((item, index) => (
        <div key={item.id} className="flex gap-2 mb-2">
          <input {...register(`ingredients.${index}.name`)} placeholder="Name" className="flex-1 border px-2 py-1 rounded" />
          <input {...register(`ingredients.${index}.quantity`)} placeholder="Quantity" className="flex-1 border px-2 py-1 rounded" />
          <button type="button" onClick={() => remove(index)} className="text-red-600">×</button>
        </div>
      ))}
      <button type="button" onClick={() => append({ name: "", quantity: "" })} className="text-blue-600">
        + Add Ingredient
      </button>

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        {mealId ? "Update Meal" : "Create Meal"}
      </button>
    </form>
  )
}
