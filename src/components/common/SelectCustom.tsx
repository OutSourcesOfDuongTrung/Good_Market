import { CaretDownOutlined } from '@ant-design/icons';
import { Flex, Form, Select, Space } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

interface Props {
  maxLength?: number;
  required?: boolean;
  label: string;
  className?: string;
  data: IJob[];
  onChange?: (e: string | number | undefined) => void;
  defaultValue?: string | number;
}

export default function SelectCustom(props: Props) {
  const [showModal, setShowModal] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState(props.defaultValue);
  const divRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    setFocus(false);
  };
  useEffect(() => {
    props.onChange?.(value || undefined);
  }, [props, value]);
  useOnClickOutside(divRef, handleClickOutside);

  return (
    <div ref={divRef} className={`w-full transition-all ${props.className}`}>
      <div
        onClick={() => {
          setFocus(true);
          setShowModal(!showModal);
        }}
        className={`w-full relative flex justify-between px-[10px] rounded-lg border ${
          value ? 'py-[5px]' : 'py-[15px] '
        }`}
      >
        <div className="w-full flex flex-col gap-y-0">
          <Space
            className={`w-full text-[#9b9b9b] text-[14px] ${
              value && '!text-[12px] font-medium'
            }`}
          >
            {props.label} <span className="text-red-500">*</span>
          </Space>
          {/* {focus && (
            <Select
              open={focus}
              // showSearch
              className="!border-none !shadow-none"
              style={{ width: '100%' }}
              placeholder="Select a person"
              // optionFilterProp="children"
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'tom',
                  label: 'Tom',
                },
              ]}
            />
          )} */}
          {value && <p className="text-[14px]">{value}</p>}
        </div>

        <CaretDownOutlined />
      </div>

      {showModal && (
        <Flex
          vertical
          className={`w-full flex justify-between p-[10px] rounded-lg border`}
        >
          {props.data.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setShowModal(false);
                setValue(item.Name);
              }}
              className={`transform-gpu transition-transform duration-500 w-full relative flex justify-between hover:bg-gray-100 rounded-lg text-[#9b9b9b] text-[14px] px-[20px] py-[15px]`}
            >
              {item.Name}
            </div>
          ))}
        </Flex>
      )}
    </div>
  );
}
