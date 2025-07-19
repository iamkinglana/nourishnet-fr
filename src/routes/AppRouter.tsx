import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAuth } from "../pages/auth/AuthContext"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import ClientDashboard from "../pages/client/ClientDashboard"
import NutritionistDashboard from "../pages/nutritionist/NutritionistDashboard"
import MealPlanPage from "../pages/client/MealPlanPage"
import GroceryListPage from "../pages/client/GroceryListPage"
import CheckInPage from "../pages/client/CheckInPage"
import ProfilePage from "../pages/client/ProfilePage"

import ClientsPage from "../pages/nutritionist/ClientsPage"
import ClientDetailsPage from "../pages/nutritionist/ClientDetailsPage"



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
            < Route path = "/nutritionist/dashboard" element = {< NutritionistDashboard />} />
                < Route path = "/nutritionist/clients" element = {< ClientsPage />} />
                    < Route path = "/nutritionist/clients/:id" element = {< ClientDetailsPage />} />


        )}

<Route path="*" element = {< Navigate to = "/login" />} />
    </Routes>
    </BrowserRouter>
  )
}
