import { Breadcrumb, Layout, theme } from 'antd';
import { ContentStyled, BreadcrumbStyled, TitleStyled } from './styled/Content.Styled';
import { IContentComponent } from './types/Content.Type';
const { Content } = Layout;

export const ContentComponent: React.FC<IContentComponent> = ({ children, title }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <BreadcrumbStyled >
        <TitleStyled>{title}</TitleStyled>
      </BreadcrumbStyled>
      <ContentStyled backgroundColor={colorBgContainer}>
        { children }
      </ContentStyled>
    </>
  );
};