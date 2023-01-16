// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { Navigate } from 'react-router-dom';
// import { Form, Input } from 'antd';
// import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, LockOutlined } from '@ant-design/icons';
// import { ErrorLoginStyled, FormButtonStyled, FormColStyled, FormContainerStyled, FormRecuperarStyled, FormRowStyled, FormTitleStyled } from './styled/Login.Styled';

export const asdaLogin = () => {
//   // const { register } = useForm();
//   // const { login, error, loading, realizaLogin } = React.useContext(UsuarioContext) as IUsuarioContextData;
//   const auth = usuarioAuth();

//   if (auth.login)
//     return <Navigate to="painel/dashboard" />

//   const onFinish = async (values: IUsuarioLogin) => {
//     auth.handleLogin(values).catch((err: Error) => {
//       console.log(err);
//     })
//   }

//   return (
//     <FormContainerStyled>
//       <FormRowStyled>
//         <FormColStyled>
//           <Form name="normal_login" onFinish={onFinish}>
//             <Form.Item>
//               <FormTitleStyled>Portal do Professor</FormTitleStyled>
//             </Form.Item>
            
//             <Form.Item 
//               name="usuario" 
//               rules={[
//                 {
//                   required: true,
//                   message: 'Informe o seu usuário!',
//                 },
//               ]}
//               >
//               <Input 
//                 size="large"
//                 prefix={<UserOutlined className="site-form-item-icon" />} 
//                 placeholder="Usuário" 
//                 {...register('usuario')}
//               />
//             </Form.Item>

//             <Form.Item
//               name="senha"
//               rules={[
//                 {
//                   required: true,
//                   message: 'Informe a sua senha!',
//                 },
//               ]}
//               >
//               <Input.Password
//                 size="large"
//                 placeholder="Senha"
//                 prefix={<LockOutlined className="site-form-item-icon" />}
//                 iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
//                 {...register('senha')}
//               />
//             </Form.Item>

//             <Form.Item>
//               <FormRecuperarStyled className="login-form-forgot" href="">
//                 Esqueceu sua senha?
//               </FormRecuperarStyled>
//             </Form.Item>

//             <Form.Item>
//               {/* { loading && 
//                 <FormButtonStyled htmlType="submit" disabled>
//                   Carregando...
//                 </FormButtonStyled>
//               }
//               { !loading &&  */}
//                 <FormButtonStyled htmlType="submit" >
//                   Acessar
//                 </FormButtonStyled>
//               {/* {/* } */}
//             </Form.Item>

//             {/* { error && <ErrorLoginStyled>{error}</ErrorLoginStyled>} */} 
//           </Form>
//         </FormColStyled>
//       </FormRowStyled>
//     </FormContainerStyled>
//   );
};
