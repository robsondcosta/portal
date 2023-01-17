import { Api } from "../axios-config";

interface IAuth {
  token: string;
  refresh_token: string;
  nome: string;
  mensagem: string;
};

const auth = async (cpf: string, senha: string): Promise<IAuth | Error> => {
  try {
    const { data } = await Api.post('/jwt-auth/login', {cpf, senha})

    if (data)
      return data;
    
    return new Error('Falha na autenticação.');
  }
  catch (error) {
    console.log(error);
    return new Error((error as { message: string }).message || 'Erro ao realizar o login.');
  }
};

export const AuthService = {
  auth,
};