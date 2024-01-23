import { Flex, Space } from 'antd';
import React, { useState } from 'react';

interface Props {
  data: IJob[];
  label: string;
  required?: boolean;
  className?: string;
}
export default function HorizontalSelect(props: Props) {
  const [currentData, setCurrentData] = useState<string | number>();
  return (
    <div className={props.className}>
      <Space
        className={`w-full text-[#9b9b9b] py-[5px] transition-all !text-[12px] font-medium`}
      >
        {props.label}{' '}
        {props.required && <span className="text-red-500">*</span>}
      </Space>
      <Flex className="text-[14px] cursor-pointer" wrap="wrap" gap={10}>
        {props.data.map((item, index) => (
          <p
            key={index}
            onClick={() => setCurrentData(item.id)}
            className={`px-[20px] py-[5px] rounded-full bg-[#f4f4f4] ${
              currentData === item.id && 'bg-[#ffe9c2] text-[#da7502]'
            }`}
          >
            {item.Name}
          </p>
        ))}
        {/* <p
          // onClick={() => setGenderId(2)}
          className={`px-[20px] py-[5px] rounded-full bg-[#f4f4f4] ${
            currentData === 2 && 'bg-[#ffe9c2] text-[#da7502]'
          }`}
        >
          Nữ
        </p> */}
      </Flex>
    </div>
  );
}
