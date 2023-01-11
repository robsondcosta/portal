import React from 'react';
import { Layout } from 'antd';
import { 
  HeaderComponent, 
  SiderComponent
} from '../../components';
import { ILayoutComponent } from "./types/Layout.Type";
import { LayoutStyled, ContentStyled } from './styled/Layout.Styled';

export const LayoutComponent: React.FC<ILayoutComponent> = ({ children }) => {
  return (
    <LayoutStyled>
      <HeaderComponent/>
      <Layout>
        <SiderComponent/>
        <ContentStyled>
          { children }
        </ContentStyled>
      </Layout>
    </LayoutStyled>
  );
};