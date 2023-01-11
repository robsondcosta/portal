import { theme } from 'antd';
import { 
  MenuItem, 
  getItem 
} from './types/Sider.Types';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { MenuStyled, SiderStyled } from './styled/Sider.Styled';

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

export const SiderComponent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <SiderStyled backgroundColor={colorBgContainer}>
      <MenuStyled
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
        items={items}
      />
    </SiderStyled>
  );
};