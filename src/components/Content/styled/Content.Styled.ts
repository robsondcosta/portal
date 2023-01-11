import { IContentStyled } from './../types/Content.Type';
import { Breadcrumb, Layout } from 'antd';
import styled from "styled-components";
const { Content } = Layout;

export const TitleStyled = styled(Breadcrumb)`
  margin: 16px 0px;
`;

export const ContentStyled = styled(Content)<IContentStyled>`
  padding: 24px;
  margin: 0px;
  min-height: 280px;
  background-color: ${props => props.backgroundColor} !important;
`;