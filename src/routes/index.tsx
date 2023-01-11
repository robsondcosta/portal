import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Login, Error } from '../pages';
import { Configuracao } from '../pages/Configuracao/Configuracao';
import { Dashboard } from '../pages/Dashboard/Dashboard';

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