import { Routes, Route } from 'react-router-dom';

import { Landing } from '../pages/Landing';
import  LoginPage from '../pages/LoginPage';
import  { ForgotPasswordPage } from '../pages/ForgotPasswordPage';
import { SignUpPage } from '../pages/SignUpPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}
