'use client';
import ModalCategorySelectFilterCustom from '@/components/common/ModalCategorySelectFilterCustom';
import ModalLocationSelectFilterCustom from '@/components/common/ModalLocationSelectFilterCustom';
import ModalLocationSliderFilterCustom from '@/components/common/ModalLocationSliderFilterCustom';
import { ILocationResponse } from '@/types/Job';
import { CaretDownOutlined, CaretLeftOutlined } from '@ant-design/icons';
import { Flex, Modal } from 'antd';
import React, { useState } from 'react';

export default function OverViewGoodHouse() {
  const [showModal, setShowModal] = useState(false);
  const [areaList, setAreaList] = useState<ILocationResponse[]>([]);
  const [isSubMenu, setIsSubMenu] = useState(false);
  //   const [value, setValue] = useState<string | number>(props.defaultValue || '');
  return (
    <div>
      <Flex className="bg-white py-[10px]" gap={20}>
        <ModalLocationSelectFilterCustom label={''} />
        <ModalCategorySelectFilterCustom label={'Loại nhà'} menuList={[]} />
        <ModalLocationSliderFilterCustom label={'Giá'} />
        <ModalLocationSliderFilterCustom label={'Diện tích'} />
      </Flex>
    </div>
  );
}
