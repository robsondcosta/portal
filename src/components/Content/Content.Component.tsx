import { Breadcrumb, Layout, theme } from 'antd';
import { ContentStyled, TitleStyled } from './styled/Content.Styled';
import { IContentComponent } from './types/Content.Type';
const { Content } = Layout;

export const ContentComponent: React.FC<IContentComponent> = ({ children, title }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <TitleStyled >
        {/* {
          title.map((key) => {
            <Breadcrumb.Item>{key}</Breadcrumb.Item>
          })
        } */}

        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </TitleStyled>
      <ContentStyled backgroundColor={colorBgContainer}>
        { children }
      </ContentStyled>
    </>
  );
};