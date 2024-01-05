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
import SEOoptimization from '@/components/CMS/ToolsPage/SEOoptimization';
import CMSCategory from '@/components/CMSCategory';
import UserPage from '@/components/CMS/PostManagerPage/Product/User/UserPage';
import IndustryWorkPage from '@/components/CMS/PostManagerPage/Product/Work/IndustryWorkPage';

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
  getItem('Tổng quan', 'OVERVIEW', <PieChartOutlined />),
  getItem('Doanh thu', 'REVENUE', <DesktopOutlined />),
  getItem('Giao dịch an toàn', 'SAFE_TRANSACTIONS', <DesktopOutlined />),
  getItem('Giao dịch nạp thẻ', 'RECHARGE_TRANSACTIONS', <DesktopOutlined />),
  getItem('Vòng quay may mắn', 'ROTATION_LUCK', <DesktopOutlined />),
  getItem('Quản lý tin đăng', 'POST_MANAGER_SUB', <UserOutlined />, [
    getItem('Danh sách', 'POST_MANAGER_SUB_LIST', <TeamOutlined />),
    getItem('Danh mục', 'POST_MANAGER_SUB_CATEGORY', <TeamOutlined />),
    getItem('Thuộc tính', 'POST_MANAGER_SUB_PROPERTIES', <TeamOutlined />),
    getItem(
      'Dịch vụ trả phí',
      'POST_MANAGER_SUB_PAID_SERVICE',
      <TeamOutlined />
    ),
    getItem('Khiếu nại', 'POST_MANAGER_SUB_COMPLAIN', <TeamOutlined />),
    getItem('Sản phẩm', 'PRODUCT_SUB', <TeamOutlined />, [
      getItem('A1 - Người dùng', 'USER_SUB', <TeamOutlined />, [
        getItem('Người dùng', 'USER_SUB_USER', <TeamOutlined />),
      ]),
      getItem('A2 - Việc làm', 'JOB_SUB', <TeamOutlined />, [
        getItem('Nghành làm', 'JOB_SUB_INDUSTRY_DOES', <TeamOutlined />),
        getItem('Loại công việc', 'JOB_SUB_WORK_TYPE', <TeamOutlined />),
        getItem('Hình thức trả lương', 'JOB_SUB_PAY_FORMS', <TeamOutlined />),
        getItem('Kinh nghiệm', 'JOB_SUB_EXPERIENCE', <TeamOutlined />),
        getItem('Bài đăng', 'JOB_SUB_POST', <TeamOutlined />),
      ]),
      getItem('A3 - Nhà tốt', 'GOOD_HOUSE_SUB', <TeamOutlined />, [
        getItem('Doanh mục', 'GOOD_HOUSE_SUB_CATEGORY', <TeamOutlined />),
        getItem(
          'Tình trạng nội thất',
          'GOOD_HOUSE_SUB_INTERIOR_CONDITION',
          <TeamOutlined />
        ),
        getItem(
          'Thông tin người bán',
          'GOOD_HOUSE_SUB_Seller_Information',
          <TeamOutlined />
        ),
        getItem('Bài đăng', 'GOOD_HOUSE_SUB_Post', <TeamOutlined />),
      ]),
      getItem(
        'A4 - Tủ lạnh - Máy lạnh - Máy giặt',
        'Fridge_Sub',
        <TeamOutlined />,
        [
          getItem('Danh mục', 'Fridge_Sub_CATEGORY', <TeamOutlined />),
          getItem('Tình trạng', 'Fridge_Sub_CONDITION', <TeamOutlined />),
          getItem('Bảo hành', 'Fridge_Sub_Guarantee', <TeamOutlined />),
          getItem('Thể tích', 'Fridge_Sub_Volume', <TeamOutlined />),
          getItem('Công suất', 'Fridge_Sub_Wattage', <TeamOutlined />),
          getItem(
            'Khối lượng giặt',
            'Fridge_Sub_Washing_volume',
            <TeamOutlined />
          ),
          getItem(
            'Quản lý bài đăng',
            'Fridge_Sub_Manage_posts',
            <TeamOutlined />
          ),
        ]
      ),
      getItem(
        'A5 - Máy móc - thiết bị chuyên dụng',
        'Specialized_Sub',
        <TeamOutlined />,
        [
          getItem('Tình trạng', 'Specialized_Sub_CONDITION', <TeamOutlined />),
          getItem('Bảo hành', 'Specialized_Sub_Guarantee', <TeamOutlined />),
        ]
      ),
      getItem('A6 - Taxi', 'Taxi_Sub', <TeamOutlined />, [
        getItem('Tình trạng', 'Taxi_Sub_CONDITION', <TeamOutlined />),
      ]),
      getItem('B1 - Xe cộ', 'Vehicle_Sub', <TeamOutlined />, [
        getItem('Danh mục', 'Vehicle_Sub_Category', <TeamOutlined />),
        getItem('Hãng xe', 'Vehicle_Sub_Brand', <TeamOutlined />),
        getItem(
          'Năm sản xuất',
          'Vehicle_Sub_ManufacturingYear',
          <TeamOutlined />
        ),
        getItem('Hộp số', 'Vehicle_Sub_Transmission', <TeamOutlined />),
        getItem('Nhiên liệu', 'Vehicle_Sub_FuelType', <TeamOutlined />),
        getItem('Bảo hành', 'Vehicle_Sub_Warranty', <TeamOutlined />),
        getItem('Số chổ', 'Vehicle_Sub_SeatingCapacity', <TeamOutlined />),
        getItem('Tình trạng', 'Vehicle_Sub_Condition', <TeamOutlined />),
        getItem(
          'Thông tin người bán',
          'Vehicle_Sub_SellerInfo',
          <TeamOutlined />
        ),
        getItem('Dung tích', 'Vehicle_Sub_Capacity', <TeamOutlined />),
        getItem('Sản Phẩm', 'Vehicle_Sub_Product', <TeamOutlined />),
      ]),
      getItem('B2 - Đồ điện tử', 'Electronice_Device_Sub', <TeamOutlined />, [
        getItem(
          'Danh mục',
          'Electronice_Device_Sub_Category',
          <TeamOutlined />
        ),
        getItem(
          'Tình trạng',
          'Electronice_Device_Sub_Condition',
          <TeamOutlined />
        ),
        getItem('Hãng xe', 'Electronice_Device_Sub_Brand', <TeamOutlined />),
        getItem('Màu sắc', 'Electronice_Device_Sub_Color', <TeamOutlined />),
        getItem(
          'Dung lượng',
          'Electronice_Device_Sub_Capacity',
          <TeamOutlined />
        ),
        getItem(
          'Bảo hành',
          'Electronice_Device_Sub_Warranty',
          <TeamOutlined />
        ),
        getItem(
          'Bộ vi xử lí',
          'Electronice_Device_Sub_Processor',
          <TeamOutlined />
        ),
        getItem('Ram', 'Electronice_Device_Sub_Ram', <TeamOutlined />),
        getItem('Ổ cứng', 'Electronice_Device_Sub_HardDrive', <TeamOutlined />),
        getItem(
          'Card màn hình',
          'Electronice_Device_Sub_GraphicsCard',
          <TeamOutlined />
        ),
        getItem(
          'Kích cỡ màn hình',
          'Electronice_Device_Sub_ScreenSize',
          <TeamOutlined />
        ),
        getItem(
          'Thông tin người bán',
          'Electronice_Device_Sub_SellerInfo',
          <TeamOutlined />
        ),
        getItem('Sản phẩm', 'Electronice_Device_Sub_Product', <TeamOutlined />),
      ]),
      getItem('B3 - Dịch vụ', 'Services_Sub', <TeamOutlined />, [
        getItem('Danh mục', 'Services_Sub_Category', <TeamOutlined />),
        getItem('Tình trạng', 'Services_Sub_Condition', <TeamOutlined />),
        getItem('Bảo hành', 'Services_Sub_Warranty', <TeamOutlined />),
        getItem(
          'Thông tin người bán',
          'Services_Sub_SellerInfo',
          <TeamOutlined />
        ),
        getItem('Sản phẩm', 'Services_Sub_Product', <TeamOutlined />),
      ]),
      getItem(
        'B4 - Nội thất cây cảnh',
        'Bonsai_Furniture_Sub',
        <TeamOutlined />,
        [
          getItem(
            'Danh mục',
            'Bonsai_Furniture_Sub_Category',
            <TeamOutlined />
          ),
          getItem(
            'Tình trạng',
            'Bonsai_Furniture_Sub_Condition',
            <TeamOutlined />
          ),
          getItem(
            'Bảo hành',
            'Bonsai_Furniture_Sub_Warranty',
            <TeamOutlined />
          ),
          getItem(
            'Thông tin người bán',
            'Bonsai_Furniture_Sub_SellerInfo',
            <TeamOutlined />
          ),
          getItem('Sản phẩm', 'Bonsai_Furniture_Sub_Product', <TeamOutlined />),
        ]
      ),
      getItem('B5 - Cửa hàng Việt', 'Viet_Shop_Sub', <TeamOutlined />, [
        getItem('Danh mục', 'Viet_Shop_Sub_Category', <TeamOutlined />),
        getItem('Bảo hành', 'Viet_Shop_Sub_Warranty', <TeamOutlined />),
        getItem(
          'Thông tin người bán',
          'Viet_Shop_Sub_SellerInfo',
          <TeamOutlined />
        ),
        getItem('Sản phẩm', 'Viet_Shop_Sub_Product', <TeamOutlined />),
      ]),
    ]),
  ]),
  getItem('Người dùng', 'User_Manager', <TeamOutlined />),
  getItem('Người theo dõi', 'Follow_User_Manager', <FileOutlined />),
  getItem('Blog', 'Blog_Manager', <FileOutlined />),
  getItem('Thành phố', 'City_Manager', <FileOutlined />),
  getItem('Quản lý trang', 'Page_Manager', <FileOutlined />),
  getItem('Công cụ', 'Tools_Page', <FileOutlined />, [
    getItem('Menu Slide', 'Tools_Page_Menu_Slide', <TeamOutlined />),
    getItem('Banner / Quảng cáo', 'Tools_Page_Banner', <TeamOutlined />),
    getItem('Slider', 'Tools_Page_Slider', <TeamOutlined />),
    getItem('Tối ưu SEO', 'Tools_Page_SEO_Optimal', <TeamOutlined />),
    getItem('Bộ lọc SEO', 'Tools_Page_SEO_Filter', <TeamOutlined />),
    getItem('Feeds', 'Tools_Page_Feeds', <TeamOutlined />),
    getItem('RSS Feeds', 'Tools_Page_RSS_Feeds', <TeamOutlined />),
  ]),
];
const pageList = [
  { key: 'OVERVIEW', children: <OverViewPage /> },
  { key: 'REVENUE', children: <div>Doanh thu</div> },
  { key: 'SAFE_TRANSACTIONS', children: <div>Giao dịch an toàn</div> },
  { key: 'RECHARGE_TRANSACTIONS', children: <div>Giao dịch nạp thẻ</div> },
  { key: '5', children: <div>Vòng quay may mắn</div> },
  { key: 'POST_MANAGER_SUB_LIST', children: <ListPage /> },
  { key: 'POST_MANAGER_SUB_CATEGORY', children: <CategoryPage /> },
  { key: '8', children: <div>Thuộc tính</div> },
  { key: '9', children: <div>Dịch vụ trả phí</div> },
  { key: '10', children: <div>Khiếu nại</div> },
  { key: 'User_Manager', children: <UserManagerPage /> },
  { key: 'Follow_User_Manager', children: <FollowUserManagerPage /> },
  { key: '13', children: <div>Blog</div> },
  { key: '14', children: <div>Thành phố</div> },
  { key: '15', children: <div>Quản lý trang</div> },
  { key: 'Tools_Page_Menu_Slide', children: <MenuSlidePage /> },
  { key: 'Tools_Page_Banner', children: <BannerManagerPage /> },
  { key: 'Tools_Page_Slider', children: <SliderPage /> },
  { key: 'Tools_Page_SEO_Optimal', children: <SEOoptimization /> },
  { key: '20', children: <div>Feeds</div> },
  { key: '21', children: <div>RSS Feeds</div> },
  { key: 'admin', children: <AdminInforPage /> },
  { key: 'USER_SUB_USER', children: <UserPage /> },
  { key: 'JOB_SUB_INDUSTRY_DOES', children: <IndustryWorkPage /> },
];

export default function AdminPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('1');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        theme="light"
        width={350}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
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
