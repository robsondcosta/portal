import { ISiderStyled } from './../types/Sider.Types';
import { Menu, Layout } from "antd";
import styled from "styled-components";
const { Sider } = Layout;

export const SiderStyled = styled(Sider)<ISiderStyled>`
  width: 200px;
  background-color: ${props => props.backgroundColor} !important;
`;

export const MenuStyled = styled(Menu)`
  height: 100%; 
  border-right: 0px;
`;