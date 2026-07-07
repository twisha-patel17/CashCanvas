import { Routes, Route } from 'react-router-dom';

import { Landing } from '../pages/Landing';
import  LoginPage from '../pages/LoginPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
