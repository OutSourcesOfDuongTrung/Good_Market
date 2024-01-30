import { ICategory } from '@/types/Job';
import { GithubOutlined } from '@ant-design/icons';

const categoryList: ICategory[] = [
  {
    key: 'WORK',
    label: 'Việc làm',
    img: 'https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F1000.png&w=256&q=95',
    icon: <GithubOutlined />,
  },
  {
    key: 'a',
    label: 'Xe cộ',
    icon: <GithubOutlined />,
    img: 'https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F1000.png&w=256&q=95',
    urlSub: 'vehicle/category/',
  },
  {
    key: 'a',
    label: 'Đồ điện tử',
    icon: <GithubOutlined />,
    img: 'https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F1000.png&w=256&q=95',
    urlSub: 'ElectronicDevice/category/',
  },
  {
    key: 'GOODHOUSE',
    label: 'Nhà tốt',
    children: true,
    icon: <GithubOutlined />,
    img: 'https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F1000.png&w=256&q=95',
    urlSub: 'good-house/category/',
  },
  {
    key: 'a',
    label: 'Tủ lạnh, máy lạnh, máy giặt',
    icon: <GithubOutlined />,
    img: 'https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F1000.png&w=256&q=95',
    urlSub: 'refrigerator-airconditioner-washingmachine/category/',
  },
  {
    key: 'HOUSEWARE',
    label: 'Đồ gia dụng, nội thất',
    icon: <GithubOutlined />,
    img: 'https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F1000.png&w=256&q=95',
    urlSub: 'home-appliance/category/',
  },
  {
    key: 'MACHINE',
    label: 'Máy móc, thiết bị chuyên dụng',
    img: 'https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F1000.png&w=256&q=95',
    icon: <GithubOutlined />,
    url: 'maymoc',
  },
  {
    key: 'TAXI',
    label: 'Taxi',
    img: 'https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F1000.png&w=256&q=95',
    icon: <GithubOutlined />,
    url: 'taxi',
  },
  {
    key: 'a',
    label: 'Dịch vụ',
    icon: <GithubOutlined />,
    img: 'https://lighthouse.chotot.com/_next/image?url=https%3A%2F%2Fstatic.chotot.com%2Fstorage%2Fchapy-pro%2Fnewcats%2Fv8%2F1000.png&w=256&q=95',
    urlSub: 'service/category/',
  },
];
export default categoryList;
