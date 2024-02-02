'use client';
import ModalCategorySelectFilterCustom from '@/components/common/ModalCategorySelectFilterCustom';
import ModalLocationSelectFilterCustom from '@/components/common/ModalLocationSelectFilterCustom';
import ModalLocationSliderFilterCustom from '@/components/common/ModalLocationSliderFilterCustom';
import { ILocationResponse } from '@/types/Job';
import { CaretDownOutlined, CaretLeftOutlined } from '@ant-design/icons';
import { Flex, Image, Modal, Space } from 'antd';
import React, { useState } from 'react';

export default function OverViewGoodHouse() {
  const [showModal, setShowModal] = useState(false);
  const [areaList, setAreaList] = useState<ILocationResponse[]>([]);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [currentTab, setCurrentTab] = useState(1);

  //   const [value, setValue] = useState<string | number>(props.defaultValue || '');
  return (
    <div className="w-full">
      <Flex className="bg-white py-[10px] pl-[200px]" gap={20}>
        <ModalLocationSelectFilterCustom label={''} />
        <ModalCategorySelectFilterCustom label={'Loại nhà'} menuList={[]} />
        <ModalLocationSliderFilterCustom label={'Giá'} />
        <ModalLocationSliderFilterCustom label={'Diện tích'} />
      </Flex>
      <div className="ml-[200px] w-1/2">
        <p className="font-bold py-[20px]">
          Thuê nhà vị trí thuận lợi, giá hợp lý
        </p>
        <Flex gap={20} className="bg-white p-[10px]">
          {[...Array(3)].map((item, index) => (
            <Flex key={index} vertical align="center" justify="center">
              <Image
                src=""
                alt=""
                preview={false}
                width={70}
                height={70}
                className="p-[10px] bg-[#f5f5f5] rounded-full"
              />
              <p className="text-[12px] text-center text-wrap w-24">
                Phòng trọ/ ký túc xá
              </p>
            </Flex>
          ))}
        </Flex>
        <Flex className="w-full" justify="space-between">
          <Flex className="w-full">
            <p
              className={`p-[10px] w-1/5 ${
                currentTab === 1 && `border-b-2 border-[#ffbd0b]`
              }`}
            >
              Tất cả
            </p>
            <p className="p-[10px] w-1/5 ">Cá nhân</p>
            <p className="p-[10px] w-1/5 ">Bán chuyên</p>
          </Flex>
          <Space className="" wrap={false}>
            <p className="text-nowrap">Tin mới trước</p>
            <CaretDownOutlined />
          </Space>
        </Flex>
      </div>
    </div>
  );
}
