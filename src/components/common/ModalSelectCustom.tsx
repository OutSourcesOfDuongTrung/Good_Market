import { Modal, Space } from 'antd';
import React, { useState } from 'react';
import { Span } from 'next/dist/trace';
import {
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  ProfileOutlined,
} from '@ant-design/icons';

export default function ModalSelectCustom() {
  const [showModal, setShowModal] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);

  return (
    <div className="w-full ">
      <div
        onClick={() => setShowModal(true)}
        className="w-full  flex justify-between py-[15px] px-[10px] rounded-lg border"
      >
        <Space className="w-full text-[#9b9b9b] text-[14px]">
          Danh mục đăng tin <span className="text-red-500">*</span>
        </Space>
        <CaretDownOutlined />
      </div>
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
        // className="!absolute !top-[50px] !left-[370px]"
        classNames={{
          // mask: '!bg-transparent',
          content: '!p-0 overflow-hidden',
          header: 'rounded',
        }}
        onCancel={() => setShowModal(false)}
        open={showModal}
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
  );
}
