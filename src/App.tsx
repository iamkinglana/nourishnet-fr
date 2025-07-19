import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "./pages/auth/Login"
import RegisterPage from "./pages/auth/Register"


import ClientDashboard from "./pages/client/ClientDashboard"
import ClientMealPlanPage from "./pages/client/MealPlanPage"
import GroceryListPage from "./pages/client/GroceryListPage"
import CheckInPage from "./pages/client/CheckInPage"
import ProfilePage from "./pages/client/ProfilePage"
// import IntakeFormPage from "./pages/client/IntakeFormPage"

import NutritionistDashboard from "./pages/nutritionist/DashboardPage"
import ClientProgressPage from "./pages/nutritionist/ClientProgressPage"
import MealSuggestionsPage from "./pages/nutritionist/MealSuggestionsPage"
import AutoMealPlanPage from "./pages/nutritionist/AutoMealPlanPage"
import MealPlanEditor from "./pages/nutritionist/components/MealPlanning/MealPlanEditor"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Client Routes */}
        <Route path="/clinet/dashboard" element={<ClientDashboard />} />
        <Route path="/client/meal-plan" element={<ClientMealPlanPage />} />
        <Route path="/client/grocery-list" element={<GroceryListPage />} />
        <Route path="/client/check-in" element={<CheckInPage />} />
        <Route path="/client/profile" element={<ProfilePage />} />


        {/* Nutritionist Routes */}
        <Route path="/nutritionist/dashboard" element={<NutritionistDashboard />} />
        <Route path="/nutritionist/clients/:id/progress" element={<ClientProgressPage />} />
        <Route path="/nutritionist/ai/meals" element={<MealSuggestionsPage />} />
        <Route path="/nutritionist/ai/meal-plans" element={<AutoMealPlanPage />} />
        <Route path="/nutritionist/meal-plans/:id/edit" element={<MealPlanEditor planId="new" />} />

        {/* Redirects / 404 */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<div className="p-8 text-center text-lg">404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}
