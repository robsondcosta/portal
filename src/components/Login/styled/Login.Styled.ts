import { Form, Input, Button, Checkbox } from 'antd';
import { Col, Row } from 'antd';
import styled from 'styled-components';

export const FormContainerStyled = styled.div`
  height: 100vh;
  background-color: #e1e1e1;
`;

export const FormRowStyled = styled(Row)`
  height: 100%;
  display: grid;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const FormColStyled = styled(Col)`
  width: 350px;
  padding: 10px 20px 5px;
  background-color: #fff;
  border-radius: 8px;
  border: 0.5px solid #d1cece;
`;

export const FormRecuperarStyled = styled.a`
  float: right;
  font-size: 0.8rem;
  font-weight: 600;
  color: #838383;

  &:hover {
    color: #595959 !important;
  }
`;

export const FormTitleStyled = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
`;

export const FormInputStyled = styled(Input)`
  height: 30px;
`;

export const FormButtonStyled = styled(Button)`
  width: 100%;
  background-color: #138889;
  color: #fff;
  font-size: 1rem;
  padding: 5px 10px;
  border: 1px solid #138889;
  height: 45px;
  // transition: 0.5s;

  &:hover {
    background-color: #25afaf;
    border-color: #25afaf !important;
    color: #fff !important;
    // font-size: 1.1rem;
    font-weight: bold;
  }
`;

export const ErrorLoginStyled = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #842029;
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  background-color: #f8d7da;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 4px;
  border: 1px solid #f5c2c7;
`;