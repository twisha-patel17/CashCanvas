import { Routes, Route } from "react-router-dom";

import { Landing } from "../pages/Landing";
import LoginPage from "../pages/LoginPage";
import { ForgotPasswordPage } from "../pages/ForgotPasswordPage";
import { SignUpPage } from "../pages/SignUpPage";
import { DashboardPage } from "../pages/DashboardPage";
import { TransactionsPage } from "../pages/TransactionsPage";
import { AnalyticsPage } from "../pages/AnalyticsPage";
import { BudgetPage } from "../pages/BudgetPage"
import { CategoriesPage } from "../pages/CategoriesPage";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { ProfilePage } from "../pages/ProfilePage";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      {/* Dashboard Layout */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/budget" element={<BudgetPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};
