import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { logout } from '@/app/reducers/userReducer';
import {
  AimOutlined,
  BellOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  HeartOutlined,
  ImportOutlined,
  LogoutOutlined,
  MenuOutlined,
  MessageOutlined,
  ProfileOutlined,
  SearchOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Dropdown,
  Flex,
  Image,
  Input,
  Modal,
  Popover,
  Space,
} from 'antd';
import { deleteCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

export default function Header() {
  const [showModalMenu, setShowModalMenu] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const router = useRouter();
  const ref = useRef<HTMLElement>(null);
  const handleLogout = () => {
    dispatch(logout());
    deleteCookie('access');
    deleteCookie('refresh');
    router.push('/auth');
    // setShowModal(true);
  };
  const redirectURL = (url: string) => {
    router.push(url);
    setOpenMenu(false);
  };
  useOnClickOutside(ref, () => {
    setOpenMenu(false);
  });
  return (
    <div className="w-full flex items-center justify-between gap-x-5 px-[200px] py-[10px] bg-[#ffba00]">
      <div className="w-2/3 flex items-center gap-x-3 ">
        <Link href={'/'}>
          <Image
            className="!w-[200px] m-auto scale-150"
            preview={false}
            src="https://static.chotot.com/storage/APP_WRAPPER/logo/chotot-logo-appwrapper.png"
            alt="Chotot Logo"
          />
        </Link>

        <div className="relative">
          <MenuOutlined
            className="mx-[20px]"
            onClick={() => setShowModalMenu(true)}
          />
          <Modal
            title={
              <div className="relative">
                <p className="bg-[#f4f4f4] font-bold py-[10px] text-center">
                  Chọn danh mục
                </p>
                {isSubMenu && (
                  <button
                    className="absolute left-[10px] top-1/2 -translate-y-1/2"
                    onClick={() => setIsSubMenu(false)}
                  >
                    <CaretLeftOutlined />
                  </button>
                )}
              </div>
            }
            className="!absolute !top-[50px] !left-[370px]"
            classNames={{
              mask: '!bg-transparent',
              content: '!p-0 overflow-hidden',
              header: 'rounded',
            }}
            onCancel={() => setShowModalMenu(false)}
            open={showModalMenu}
            footer={[]}
          >
            <div className="rounded-lg border mx-[30px] overflow-hidden">
              {[...Array(12)].map((_, index) => (
                <div
                  key={index}
                  onClick={() => setIsSubMenu(true)}
                  className="flex justify-between p-[10px] border-b hover:bg-[#f5f5f5]"
                >
                  <Space className="">
                    {!isSubMenu && <ProfileOutlined />}
                    Việc làm
                  </Space>
                  <CaretRightOutlined />
                </div>
              ))}
            </div>
          </Modal>
        </div>
        <div className="relative w-full">
          <Input placeholder="Tìm kiếm" />
          <div className="absolute right-[5px] top-1/2 rounded-md -translate-y-1/2 bg-[#ffba00] px-[20px] py-[5px]">
            <SearchOutlined />
          </div>
        </div>
      </div>
      <div className="w-1/3 flex gap-x-5">
        <div className="flex gap-x-6 text-[24px]">
          <Link href={'/post-manager'}>
            <ProfileOutlined />
          </Link>
          <BellOutlined />
          <MessageOutlined />
          <AimOutlined />

          <div className="relative cursor-pointer">
            <UserOutlined onClick={() => setOpenMenu(true)} />
            {openMenu && (
              <Flex
                ref={ref}
                vertical
                className="absolute min-w-[250px] -translate-x-1/2 z-[9999] text-[14px] top-full bg-white rounded-lg shadow-lg"
              >
                <Flex
                  gap={15}
                  align="center"
                  className="font-semibold text-[14px] p-[10px]"
                >
                  <Avatar size={50} />
                  <p className=" uppercase font-semibold">
                    Đăng nhập / Đăng kí
                  </p>
                </Flex>
                <Flex vertical>
                  <p className="bg-[#f4f4f4]  px-[10px] py-[5px] text-[#9b9b9b] font-semibold">
                    Tiện ích
                  </p>
                  <Space
                    onClick={() => redirectURL('/save-post')}
                    className="font-medium p-[10px] hover:bg-[#e1e1e1]"
                  >
                    <HeartOutlined />
                    Tin đã lưu
                  </Space>
                </Flex>
                <Flex vertical>
                  <p className="bg-[#f4f4f4] px-[10px] py-[5px] text-[#9b9b9b] font-semibold">
                    Tiện ích
                  </p>
                  <Space className="font-medium p-[10px] hover:bg-[#e1e1e1]">
                    <HeartOutlined />
                    Tạo cửa hàng/Chuyên trang
                  </Space>
                  <Space className="font-medium p-[10px] hover:bg-[#e1e1e1]">
                    <HeartOutlined />
                    Lịch sử giao dịch
                  </Space>
                </Flex>
                <Flex vertical>
                  <p className="bg-[#f4f4f4] px-[10px] py-[5px] text-[#9b9b9b] font-semibold">
                    Khác
                  </p>
                  <Space className="font-medium p-[10px] hover:bg-[#e1e1e1]">
                    <HeartOutlined />
                    Cài đặt tài khoản
                  </Space>
                  <Space className="font-medium p-[10px] hover:bg-[#e1e1e1]">
                    <HeartOutlined />
                    Trợ giúp
                  </Space>
                  <Space className="font-medium p-[10px] hover:bg-[#e1e1e1]">
                    <HeartOutlined />
                    Đóng góp ý kiến
                  </Space>
                  <Space
                    className="font-medium p-[10px] hover:bg-[#e1e1e1]"
                    onClick={
                      user.logged ? handleLogout : () => router.push('/auth')
                    }
                  >
                    {user.logged ? <LogoutOutlined /> : <UserAddOutlined />}
                    {user.logged ? 'Đăng xuất' : 'Đăng nhập'}
                  </Space>
                </Flex>
              </Flex>
            )}
          </div>
        </div>
        <Link href={'/creat-post'}>
          <Space className="bg-[#dd8500] text-white rounded-md px-[15px] py-[5px]">
            <ImportOutlined />
            <p className=" font-semibold">Đăng tin</p>
          </Space>
        </Link>
      </div>
    </div>
  );
}
