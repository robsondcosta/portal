import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, Error } from '../pages';
import { Configuracao } from '../pages/Configuracao/Configuracao';
import { Dashboard } from '../pages/Dashboard/Dashboard';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/painel" />} />
      <Route path='/painel' element={<Home />} >
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='configuracao' element={<Configuracao />} />
      </Route>
      <Route path='*' element={<Error />} />
    </Routes>
  );
};