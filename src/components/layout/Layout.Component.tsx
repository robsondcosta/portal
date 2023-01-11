import React from 'react';
import { Layout } from 'antd';
import { 
  HeaderComponent, 
  SiderComponent
} from '../../components';
import { ILayoutComponent } from "./types/Layout.Type";
import { LayoutStyled } from './styled/Layout.Styled';

export const LayoutComponent: React.FC<ILayoutComponent> = ({ children }) => {
  return (
    <LayoutStyled style={{ height: '100vh'}}>
      <HeaderComponent/>
      <Layout>
        <SiderComponent/>
        <Layout style={{ padding: '0 24px 24px' }}>
          { children }
        </Layout>
      </Layout>
    </LayoutStyled>
  );
};