export interface IAuthContextData {
  isAuthenticated: boolean;
  login: (cpf: string, senha: string) => Promise<string | void>;
  logout: () => void;
}

export interface IAuthProviderProps {
  children: React.ReactNode;
}