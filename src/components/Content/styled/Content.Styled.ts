import { IContentStyled } from './../types/Content.Type';
import { Breadcrumb, Layout } from 'antd';
import styled from "styled-components";
const { Content } = Layout;

export const BreadcrumbStyled = styled(Breadcrumb)`
  margin: 16px 0px;
`;

export const TitleStyled = styled(Breadcrumb.Item)`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const ContentStyled = styled(Content)<IContentStyled>`
  padding: 24px;
  margin: 0px;
  min-height: 280px;
  background-color: ${props => props.backgroundColor} !important;
  border-radius: 4px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
`;