import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Login, Error } from '../pages';
import { Configuracao } from '../pages/configuracao/Configuracao';
import { Dashboard } from '../pages/dashboard/Dashboard';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Navigate to="/login" />} />
      <Route path='/painel' element={<Home />} >
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='configuracao' element={<Configuracao />} />
      </Route>
      <Route path='*' element={<Error />} />
    </Routes>
  );
};