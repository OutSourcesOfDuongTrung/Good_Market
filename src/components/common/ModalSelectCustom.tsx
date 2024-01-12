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
  const [value, setValue] = useState('');

  return (
    <div className="w-full ">
      <div
        onClick={() => setShowModal(true)}
        className={`w-full relative flex justify-between  px-[10px] rounded-lg border ${
          value ? 'py-[3px]' : 'py-[15px] '
        }`}
      >
        <div className="flex flex-col gap-y-0">
          <Space className={`w-full text-[#9b9b9b] text-[14px]`}>
            Danh mục đăng tin <span className="text-red-500">*</span>
          </Space>
          <p>{value}</p>
        </div>

        <CaretDownOutlined />
      </div>
      <Modal
        width={700}
        title={
          <div className="relative">
            <p className="bg-[#f4f4f4] font-bold py-[10px] text-center">
              Chọn danh mục
            </p>
            {isSubMenu && (
              <button
                className="absolute left-[10px] top-1/2 -translate-y-1/2"
                onClick={() => {
                  setIsSubMenu(false);
                }}
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
        centered
        open={showModal}
        footer={[]}
      >
        <div className="rounded-lg border mx-[30px] overflow-hidden">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              onClick={() => {
                setValue('AAAA');
                isSubMenu ? setShowModal(false) : setIsSubMenu(true);
              }}
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
