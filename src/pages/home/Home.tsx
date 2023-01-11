import { Outlet } from 'react-router-dom';
import { LayoutComponent } from '../../components';

export const Home: React.FC = () => {
  return (
    <LayoutComponent>
      <Outlet />
    </LayoutComponent>
  );
}