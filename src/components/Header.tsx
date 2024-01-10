import {
  AimOutlined,
  BellOutlined,
  ImportOutlined,
  MenuOutlined,
  MessageOutlined,
  ProfileOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Image, Input, Space } from 'antd';
import React from 'react';

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between gap-x-5 px-[200px] py-[10px] bg-[#ffba00]">
      <div className="w-2/3 flex items-center gap-x-3 ">
        <Image
          className="!w-[200px] m-auto scale-150"
          preview={false}
          src="https://static.chotot.com/storage/APP_WRAPPER/logo/chotot-logo-appwrapper.png"
          alt="Chotot Logo"
        />
        <MenuOutlined className="mx-[20px]" />
        <div className="relative w-full">
          <Input placeholder="Tìm kiếm" />
          <div className="absolute right-[5px] top-1/2 rounded-md -translate-y-1/2 bg-[#ffba00] px-[20px] py-[5px]">
            <SearchOutlined />
          </div>
        </div>
      </div>
      <div className="w-1/3 flex gap-x-5">
        <div className="flex gap-x-7 text-[24px]">
          <ProfileOutlined />
          <BellOutlined />
          <MessageOutlined />
          <AimOutlined />
          <UserOutlined />
        </div>
        <Space className="bg-[#dd8500] text-white rounded-md px-[15px] py-[5px]">
          <ImportOutlined />
          <p className=" font-semibold">Đăng tin</p>
        </Space>
      </div>
    </div>
  );
}
