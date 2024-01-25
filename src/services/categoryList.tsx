import { ICategory } from '@/types/Job';
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
    urlSub: 'vehicle/category/',
  },
  {
    key: 'a',
    label: 'Đồ điện tử',
    icon: <GithubOutlined />,
    urlSub: 'ElectronicDevice/category/',
  },
  {
    key: 'GOODHOUSE',
    label: 'Nhà tốt',
    children: true,
    icon: <GithubOutlined />,
    urlSub: 'good-house/category/',
  },
  {
    key: 'a',
    label: 'Tủ lạnh, máy lạnh, máy giặt',
    icon: <GithubOutlined />,
    urlSub: 'refrigerator-airconditioner-washingmachine/category/',
  },
  {
    key: 'HOUSEWARE',
    label: 'Đồ gia dụng, nội thất',
    icon: <GithubOutlined />,
    urlSub: 'home-appliance/category/',
  },
  {
    key: 'MACHINE',
    label: 'Máy móc, thiết bị chuyên dụng',
    icon: <GithubOutlined />,
    url: 'maymoc',
  },
  {
    key: 'TAXI',
    label: 'Taxi',
    icon: <GithubOutlined />,
    url: 'taxi',
  },
  {
    key: 'a',
    label: 'Dịch vụ',
    icon: <GithubOutlined />,
    urlSub: 'service/category/',
  },
];
export default categoryList;
