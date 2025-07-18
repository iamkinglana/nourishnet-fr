import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAuth } from "../auth/AuthContext"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import ClientDashboard from "../pages/client/ClientDashboard"
import NutritionistDashboard from "../pages/nutritionist/NutritionistDashboard"

export default function AppRouter() {
    const { user } = useAuth()

    return (
        <BrowserRouter>
        <Routes>
        <Route path= "/login" element = {< Login />} />
            < Route path = "/register" element = {< Register />} />


{
    user?.role === "client" && (
        <Route path="/dashboard" element = {< ClientDashboard />} />
            < Route path = "/meal-plan" element = {< MealPlanPage />} />
                < Route path = "/grocery-list" element = {< GroceryListPage />} />
                    < Route path = "/check-in" element = {< CheckInPage />} />
                        < Route path = "/profile" element = {< ProfilePage />} />

        )}

{
    user?.role === "nutritionist" && (
        <Route path="/dashboard" element = {< NutritionistDashboard />} />
        <Route path="/n/dashboard" element={<NutritionistDashboard />} />
        <Route path="/n/clients" element={<ClientsPage />} />
        <Route path="/n/clients/:id" element={<ClientDetailsPage />} />
        <Route path="/n/meal-plans/new" element={<CreateMealPlanPage />} />
<Route path="/n/meal-plans/:id/edit" element={<EditMealPlanPage />} />
<Route path="/n/meals" element={<MealsPage />} />
<Route path="/n/meals/new" element={<CreateMealPage />} />
<Route path="/n/meals/:id/edit" element={<EditMealPage />} />
<Route path="/n/clients/:id/progress" element={<ClientProgressPage />} />
<Route path="/n/dashboard" element={<DashboardPage />} />
<Route path="/n/ai/meals" element={<MealSuggestionsPage />} />







        )}

<Route path="*" element = {< Navigate to = "/login" />} />
    </Routes>
    </BrowserRouter>
  )
}
