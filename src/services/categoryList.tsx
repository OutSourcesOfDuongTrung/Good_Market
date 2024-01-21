import { GithubOutlined } from '@ant-design/icons';

const categoryList: ICategory[] = [
  {
    key: 'WORK',
    label: 'Việc làm',
    icon: <GithubOutlined />,
  },
  {
    key: 'a',
    label: 'Xe cộ',
    icon: <GithubOutlined />,
  },
  {
    key: 'a',
    label: 'Đồ điện tử',
    icon: <GithubOutlined />,
  },
  {
    key: 'a',
    label: 'Nhà tốt',
    icon: <GithubOutlined />,
  },
  {
    key: 'a',
    label: 'Tủ lạnh, máy lạnh, máy giặt',
    icon: <GithubOutlined />,
  },
  {
    key: 'a',
    label: 'Đồ gia dụng, nội thất',
    icon: <GithubOutlined />,
  },
  {
    key: 'a',
    label: 'Máy móc, thiết bị chuyên dụng',
    children: false,
    icon: <GithubOutlined />,
    url: 'maymoc',
  },
  {
    key: 'a',
    label: 'Taxi',
    children: false,
    icon: <GithubOutlined />,
    url: 'taxi',
  },
  {
    key: 'a',
    label: 'Dịch vụ',
    icon: <GithubOutlined />,
  },
];
export default categoryList;
