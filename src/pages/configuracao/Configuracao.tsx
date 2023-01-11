import { Layout } from 'antd';
import { Breadcrumb, theme } from 'antd';
const { Content } = Layout;

export const Configuracao = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
          background: colorBgContainer,
        }}
      >
        Ola configuração
      </Content>
    </>
  );
}