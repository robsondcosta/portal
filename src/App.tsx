import { BrowserRouter } from 'react-router-dom';
import { Login } from './components';
import { AuthProvider } from './contexts';
import { AppRoutes } from './routes';

export const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Login>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </Login>
      </AuthProvider>
    </div>
  );
}