import { Form, Input } from 'antd';
import { useAuthContext } from '../../contexts';
import { FormContainerStyled } from './styled/Login.Styled';
import { ILoginProps } from './types/Login.Type';

export const Login: React.FC<ILoginProps> = ({ children }) => {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) 
    return (
      <>
      {children}
      </>
    );

  return (
    <FormContainerStyled>

    </FormContainerStyled>
  );
};