import { access } from 'fs';
import React from 'react';
import { AuthService } from '../../services/auth/AuthService';
import { IAuthContextData, IAuthProviderProps } from './types/Auth.Type';

const AuthContext = React.createContext({} as IAuthContextData);

const LOCAL_STORAGE_KEY_ACCESS_TOKEN = 'APP_ACCESS_TOKEN';

export const AuthProvider: React.FC<IAuthProviderProps> = ({children}) => {
  const [accessToken, setAccessToken] = React.useState<string>();

  React.useEffect(() => {
    let accessToken = sessionStorage.getItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN);
    if (accessToken === undefined)
      accessToken = '';

    if (accessToken) {
      setAccessToken(JSON.parse(accessToken));
    }
    else {
      setAccessToken('');
    }
  }, []);

  const handleLogin = React.useCallback(async (cpf: string, senha: string) => {
    const result = await AuthService.auth(cpf, senha);

    if (result instanceof Error) {
      return result.message;
    }
    else {
      sessionStorage.setItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN, JSON.stringify(result.token));
      setAccessToken(result.token);
    }
  }, []);

  const handleLogout = React.useCallback(() => {
    sessionStorage.removeItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN);
    setAccessToken('');
  }, []);

  const isAuthenticated = React.useMemo(() => {
    return !!accessToken;
  }, [accessToken]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login: handleLogin, logout: handleLogout }}>
      { children }
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => React.useContext(AuthContext);