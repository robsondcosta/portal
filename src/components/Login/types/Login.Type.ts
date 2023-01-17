export interface IUsuarioLogin {
  usuario: string;
  senha: string;
}

export interface ILoginProps {
  children: React.ReactNode;
}

export interface IAuthAdministrador {
  mensagem: string;
  token: string;
  refresh_token: string;
  nome: string;
}