import React from 'react';
import * as yup from 'yup';
import { Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, LockOutlined } from '@ant-design/icons';

import { useAuthContext } from '../../contexts';
import { FormButtonStyled, FormColStyled, FormContainerStyled, FormRecuperarStyled, FormRowStyled, FormTitleStyled } from './styled/Login.Styled';
import { ILoginProps } from './types/Login.Type';

const loginSchema = yup.object().shape({
  cpf: yup.string().required().min(11),
  senha: yup.string().required().min(5)
})

export const Login: React.FC<ILoginProps> = ({ children }) => {
  const { isAuthenticated, login } = useAuthContext();

  const [cpfError, setCpfError] = React.useState('');
  const [senhaError, setSenhaError] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [senha, setSenha] = React.useState('');

  
  const handleSubmit = async () => {
    loginSchema
    .validate({cpf, senha}, {abortEarly: false})
    .then(dadosValidados => {
      login(dadosValidados.cpf, dadosValidados.senha);
    })
    .catch((errors: yup.ValidationError) => {
      errors.inner.forEach(error => {
        if (error.path === 'cpf') {
          setCpfError(error.message);
        }
        else if (error.path === 'senha') {
          setSenhaError(error.message);
        }
      })
    })
    
  }

  if (isAuthenticated) 
    return (
      <>
      {children}
      </>
    );

  return (
    <FormContainerStyled>
      <FormRowStyled>
        <FormColStyled>
          <Form name="normal_login" onFinish={handleSubmit}>
            <Form.Item>
              <FormTitleStyled>Portal do Professor</FormTitleStyled>
            </Form.Item>
            
            <Form.Item 
              name="cpf" 
              rules={[
                {
                  required: true,
                  message: 'Informe o seu cpf!',
                },
              ]}
            >
              <Input 
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />} 
                placeholder="Número do CPF" 
                value={cpf}
                // status={!!cpfError ? "error" : ""}
                
                onChange={e => setCpf(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              name="senha"
              rules={[
                {
                  required: true,
                  message: 'Informe a sua senha!',
                },
              ]}
              >
              <Input.Password
                size="large"
                placeholder="Senha"
                prefix={<LockOutlined className="site-form-item-icon" />}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                value={senha}
                // status={!!senhaError ? "error" : ""}
                onChange={e => setSenha(e.target.value)}
              />
            </Form.Item>

            <Form.Item>
              <FormRecuperarStyled className="login-form-forgot" href="">
                Esqueceu sua senha?
              </FormRecuperarStyled>
            </Form.Item>

            <Form.Item>
              {/* { loading && 
                <FormButtonStyled htmlType="submit" disabled>
                  Carregando...
                </FormButtonStyled>
              }
              { !loading &&  */}
                <FormButtonStyled htmlType="submit" >
                  Acessar
                </FormButtonStyled>
              {/* {/* } */}
            </Form.Item>

            {/* { error && <ErrorLoginStyled>{error}</ErrorLoginStyled>} */} 
          </Form>
        </FormColStyled>
      </FormRowStyled>
    </FormContainerStyled>
  );
};