import { CaretDownOutlined } from '@ant-design/icons';
import { Flex, Space } from 'antd';
import React, { useState } from 'react';

interface Props {
  maxLength?: number;
  required?: boolean;
  label: string;
  className?: string;
}

export default function SelectCustom(props: Props) {
  const [showModal, setShowModal] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [value, setValue] = useState('');
  return (
    <div className={`w-full transition-all ${props.className}`}>
      <div
        onClick={() => setShowModal(!showModal)}
        className={`w-full relative flex justify-between px-[10px] rounded-lg border ${
          value ? 'py-[5px]' : 'py-[15px] '
        }`}
      >
        <div className="flex flex-col gap-y-0">
          <Space
            className={`w-full text-[#9b9b9b] text-[14px] ${
              value && '!text-[12px] font-medium'
            }`}
          >
            {props.label} <span className="text-red-500">*</span>
          </Space>
          <p className="text-[14px]">{value}</p>
        </div>

        <CaretDownOutlined />
      </div>
      {showModal && (
        <Flex
          vertical
          className={`w-full relative flex justify-between p-[10px] rounded-lg border`}
        >
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              onClick={() => {
                setShowModal(false);
                setValue(index.toString());
              }}
              className={`w-full relative flex justify-between hover:bg-gray-100 rounded-lg text-[#9b9b9b] text-[14px] px-[20px] py-[15px]`}
            >
              Danh mục đăng tin
            </div>
          ))}
        </Flex>
      )}
    </div>
  );
}
