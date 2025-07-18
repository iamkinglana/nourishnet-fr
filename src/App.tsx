import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage"

import ClientDashboard from "./pages/client/ClientDashboard"
import ClientMealPlanPage from "./pages/client/MealPlanPage"
import GroceryListPage from "./pages/client/GroceryListPage"
import CheckInPage from "./pages/client/CheckInPage"
import ProfilePage from "./pages/client/ProfilePage"
import IntakeFormPage from "./pages/client/IntakeFormPage"

import NutritionistDashboard from "./pages/nutritionist/DashboardPage"
import ClientProgressPage from "./pages/nutritionist/ClientProgressPage"
import MealSuggestionsPage from "./pages/nutritionist/MealSuggestionsPage"
import AutoMealPlanPage from "./pages/nutritionist/AutoMealPlanPage"
import MealPlanEditor from "./pages/nutritionist/MealPlanEditor"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Client Routes */}
        <Route path="/c/dashboard" element={<ClientDashboard />} />
        <Route path="/c/meal-plan" element={<ClientMealPlanPage />} />
        <Route path="/c/grocery-list" element={<GroceryListPage />} />
        <Route path="/c/check-in" element={<CheckInPage />} />
        <Route path="/c/profile" element={<ProfilePage />} />
        <Route path="/c/intake-form" element={<IntakeFormPage />} />

        {/* Nutritionist Routes */}
        <Route path="/n/dashboard" element={<NutritionistDashboard />} />
        <Route path="/n/clients/:id/progress" element={<ClientProgressPage />} />
        <Route path="/n/ai/meals" element={<MealSuggestionsPage />} />
        <Route path="/n/ai/meal-plans" element={<AutoMealPlanPage />} />
        <Route path="/n/meal-plans/:id/edit" element={<MealPlanEditor />} />

        {/* Redirects / 404 */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<div className="p-8 text-center text-lg">404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}
