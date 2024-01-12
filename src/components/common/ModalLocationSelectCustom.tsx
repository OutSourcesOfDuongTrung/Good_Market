import { Collapse, Modal, Space } from 'antd';
import React, { useState } from 'react';
import { Span } from 'next/dist/trace';
import {
  CaretDownOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  GlobalOutlined,
  ProfileOutlined,
} from '@ant-design/icons';

export default function ModalLocationSelectCustom() {
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
            <p className=" text-[20px] font-bold py-[10px] text-center">
              Chọn khu vực
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
        classNames={
          {
            // mask: '!bg-transparent',
            // content: '!p-0 overflow-hidden',
          }
        }
        onCancel={() => setShowModal(false)}
        centered
        open={showModal}
        footer={[]}
      >
        <div className="px-[30px] ">
          <Space className="font-semibold text-[16px]">
            <GlobalOutlined />
            Lọc khu vực
          </Space>
          <div className="flex justify-center gap-x-5 my-[20px]">
            {[...Array(4)].map((_, index) => (
              <p
                key={index}
                className="w-fit px-[20px] py-[5px] rounded-full bg-[#f4f4f4]"
              >
                Đài Bắc
              </p>
            ))}
          </div>
          <div className="rounded-lg cursor-pointer border overflow-hidden">
            {[...Array(12)].map((_, index) => (
              // <div
              //   key={index}
              //   // onClick={() => {
              //   //   setValue('AAAA');
              //   //   isSubMenu ? setShowModal(false) : setIsSubMenu(true);
              //   // }}
              //   className="flex justify-between p-[10px] border-b hover:bg-[#f5f5f5]"
              // >
              <Collapse
                key={index}
                className="w-full !rounded-none !border-0"
                expandIconPosition="end"
                collapsible="icon"
                defaultActiveKey={['1']}
                items={[
                  {
                    key: '1',
                    label: 'This panel can only be collapsed by clicking icon',
                    children: <p>{'text'}</p>,
                    className: '!rounded-none',
                  },
                ]}
              />
              // </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}
