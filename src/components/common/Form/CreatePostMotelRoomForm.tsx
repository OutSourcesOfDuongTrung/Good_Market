import React, { useContext, useEffect, useState } from 'react';
import SelectCustom from '../SelectCustom';
import { Flex, Space, notification } from 'antd';
import InputCustom from '../InputCustom';
import TextAreaCustom from '../TextAreaCustom';
import ModalLocationSelectCustom from '../ModalLocationSelectCustom';

import { PreviewDataContext } from '@/app/(app)/(HeaderLayout)/(Auth)/layout';
import HorizontalSelect from '../HorizontalSelect';

export default function CreatePostMotelRoomForm() {
  const previewData = useContext(PreviewDataContext);
  const onChangeData = (data: IJobPostCreate) => {
    console.log(data);
    previewData.setPreviewData?.((prevData) => ({ ...prevData, ...data }));
  };
  useEffect(() => {
    // fetchCareerList().then((res) => setCareerList(res.data.data || []));
    // fetchExperienceList().then((res) => setExperienceList(res.data.data || []));
    // fetchPayFormsList().then((res) => setPayFormsList(res.data.data || []));
    // fetchWorkTypeList().then((res) => setWorkTypeList(res.data.data || []));
  }, []);
  const titleClassName = 'pt-[20px] text-[20px] font-semibold';
  return (
    <Flex vertical gap={20}>
      <p className={titleClassName}>Địa chỉ</p>
      <ModalLocationSelectCustom label={'Địa chỉ'} />
      <p className={titleClassName}>Diện tích & Giá</p>
      <Flex gap={10}>
        <InputCustom label={'Diện tích'} />
        <InputCustom label={'Giá'} />
      </Flex>
      <p className={titleClassName}>Thông tin khác</p>
      <Flex gap={10}>
        <InputCustom label={'Số tiền cọc'} />
        <SelectCustom
          label={'Giá'}
          data={[{ id: 1, Name: 'Nội thất đầy đủ' }]}
        />
      </Flex>
      <p className={titleClassName}>Tiêu đề và mô tả chi tiết</p>
      <InputCustom label={'Tiêu đề tin đăng'} />
      <TextAreaCustom label="Mô tả chi tiết" />
      <p className={titleClassName}>Thông tin người đăng</p>
      <HorizontalSelect
        label="Thông tin người bán"
        data={[
          { id: 1, Name: 'Cá nhân' },
          { id: 2, Name: 'Môi giới' },
        ]}
      />
    </Flex>
  );
}
