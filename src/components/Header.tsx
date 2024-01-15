import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { logout } from '@/app/reducers/userReducer';
import {
  AimOutlined,
  BellOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  ImportOutlined,
  LogoutOutlined,
  MenuOutlined,
  MessageOutlined,
  ProfileOutlined,
  SearchOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Dropdown, Image, Input, Modal, Popover, Space } from 'antd';
import { deleteCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Header() {
  const [showModalMenu, setShowModalMenu] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const router = useRouter();
  const handleLogout = () => {
    dispatch(logout());
    deleteCookie('access');
    deleteCookie('refresh');
    router.push('/auth');
    // setShowModal(true);
  };
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
          <Popover
            trigger={['click']}
            // getPopupContainer={(trigger) => trigger.parentNode as HTMLElement}
            content={
              <div>
                <div
                  className="min-w-[200px] items-center flex py-[10px] font-medium text-[16px] space-x-3 px-[5px] rounded-xl"
                  onClick={
                    user.logged ? handleLogout : () => router.push('/auth')
                  }
                >
                  <div className="w-[30px]">
                    {user.logged ? <LogoutOutlined /> : <UserAddOutlined />}
                  </div>
                  <p>{`${user.logged ? 'Đăng xuất' : 'Đăng nhập'}`}</p>
                </div>
              </div>
            }
            placement={'bottom'}
          >
            <UserOutlined />
          </Popover>
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
