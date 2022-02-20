import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from 'views/Login/LoginPage/LoginPage';
import { RegisterPage } from 'views/Register/RegisterPage/RegisterPage';

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/' element={<Navigate to='login' />} />
    </Routes>
  );
};
