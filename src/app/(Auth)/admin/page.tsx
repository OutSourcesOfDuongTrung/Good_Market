'use client';
import AdminInforPage from '@/components/CMS/AdminInforPage/AdminInforPage';
import FollowUserManagerPage from '@/components/CMS/FollowUserManagerPage/FollowUserManagerPage';
import ChartCard from '@/components/CMS/OverViewPage/components/ChartCard';
import OverViewPage from '@/components/CMS/OverViewPage/OverViewPage';
import BannerManagerPage from '@/components/CMS/ToolsPage/BannerManagerPage';
import MenuSlidePage from '@/components/CMS/ToolsPage/MenuSlidePage';
import CategoryPage from '@/components/CMS/PostManagerPage/CategoryPage';
import ListPage from '@/components/CMS/PostManagerPage/ListPage';
import UserManagerPage from '@/components/CMS/UserManagerPage/UserManagerPage';
import {
  BellOutlined,
  DesktopOutlined,
  ExportOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Layout, Menu, MenuProps, theme } from 'antd';
import { useState } from 'react';
import SliderPage from '@/components/CMS/ToolsPage/SliderPage';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Tổng quan', '1', <PieChartOutlined />),
  getItem('Doanh thu', '2', <DesktopOutlined />),
  getItem('Giao dịch an toàn', '3', <DesktopOutlined />),
  getItem('Giao dịch nạp thẻ', '4', <DesktopOutlined />),
  getItem('Vòng quay may mắn', '5', <DesktopOutlined />),
  getItem('Quản lý tin đăng', 'sub1', <UserOutlined />, [
    getItem('Danh sách', '6', <TeamOutlined />),
    getItem('Danh mục', '7', <TeamOutlined />),
    getItem('Thuộc tính', '8', <TeamOutlined />),
    getItem('Dịch vụ trả phí', '9', <TeamOutlined />),
    getItem('Khiếu nại', '10', <TeamOutlined />),
  ]),
  getItem('Người dùng', '11', <TeamOutlined />),
  getItem('Người theo dõi', '12', <FileOutlined />),
  getItem('Blog', '13', <FileOutlined />),
  getItem('Thành phố', '14', <FileOutlined />),
  getItem('Quản lý trang', '15', <FileOutlined />),
  getItem('Công cụ', 'sub2', <FileOutlined />, [
    getItem('Menu Slide', '16', <TeamOutlined />),
    getItem('Banner / Quảng cáo', '17', <TeamOutlined />),
    getItem('Slider', '18', <TeamOutlined />),
    getItem('Tối ưu SEO', '19', <TeamOutlined />),
    getItem('Bộ lọc SEO', '20', <TeamOutlined />),
    getItem('Feeds', '21', <TeamOutlined />),
    getItem('RSS Feeds', '22', <TeamOutlined />),
  ]),
];
const pageList = [
  { key: '1', children: <OverViewPage /> },
  { key: '2', children: <div>Doanh thu</div> },
  { key: '3', children: <div>Giao dịch an toàn</div> },
  { key: '4', children: <div>Giao dịch nạp thẻ</div> },
  { key: '5', children: <div>Vòng quay may mắn</div> },
  { key: '6', children: <ListPage /> },
  { key: '7', children: <CategoryPage /> },
  { key: '8', children: <div>Thuộc tính</div> },
  { key: '9', children: <div>Dịch vụ trả phí</div> },
  { key: '10', children: <div>Khiếu nại</div> },
  { key: '11', children: <UserManagerPage /> },
  { key: '12', children: <FollowUserManagerPage /> },
  { key: '13', children: <div>Blog</div> },
  { key: '14', children: <div>Thành phố</div> },
  { key: '15', children: <div>Quản lý trang</div> },
  { key: '16', children: <MenuSlidePage /> },
  { key: '17', children: <BannerManagerPage /> },
  { key: '18', children: <SliderPage /> },
  { key: '19', children: <div>Tối ưu SEO</div> },
  { key: '20', children: <div>Feeds</div> },
  { key: '21', children: <div>RSS Feeds</div> },
  { key: 'admin', children: <AdminInforPage /> },
];

export default function AdminPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('1');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div
          className="flex items-center text-black px-[10px]"
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        >
          {!collapsed && <p className="font-medium">CMS</p>}
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          onSelect={(e) => {
            window.scrollTo(0, 0);
            setCurrentPage(e.key);
          }}
          selectedKeys={[currentPage]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          className="shadow flex justify-between !p-0 !pr-[30px]"
          style={{ background: colorBgContainer }}
        >
          <Button
            className="-translate-x-full"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className="w-fit flex gap-x-7 items-center text-[20px] text-[#b1acc5]">
            <WarningOutlined />
            <div className="relative">
              <div className="absolute right-0 translate-x-5 top-1/5 w-[30px] h-[30px] rounded-full bg-[#ff000023] before:absolute before:content-[''] before:w-[15px] before:h-[15px] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-red-500 before:border-white before:border-2"></div>
              <BellOutlined />
            </div>
            <Avatar onClick={() => setCurrentPage('admin')} src={''} />
            <ExportOutlined />
          </div>
        </Header>
        <Content
          className="bg-[#f2f3f8]"
          style={{
            // margin: '24px 16px',
            // padding: 24,
            minHeight: 280,
            // background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div className="py-[10px] px-[20px]">
            {pageList.find((item) => item.key === currentPage)?.children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
