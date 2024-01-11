import {
  AimOutlined,
  BellOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  ImportOutlined,
  MenuOutlined,
  MessageOutlined,
  ProfileOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Dropdown, Image, Input, Modal, Space } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {
  const [showModalMenu, setShowModalMenu] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);
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

        <div className="relative ">
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
