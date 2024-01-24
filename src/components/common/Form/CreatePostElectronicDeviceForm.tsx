import React, { useContext, useEffect, useState } from 'react';
import SelectCustom from '../SelectCustom';
import { Flex, Space, notification } from 'antd';
import InputCustom from '../InputCustom';
import TextAreaCustom from '../TextAreaCustom';
import ModalLocationSelectCustom from '../ModalLocationSelectCustom';

import HorizontalSelect from '../HorizontalSelect';
import { IJobPostCreate } from '@/types/Job';

export default function CreatePostElectronicDeviceForm() {
  useEffect(() => {
    // fetchCareerList().then((res) => setCareerList(res.data.data || []));
    // fetchExperienceList().then((res) => setExperienceList(res.data.data || []));
    // fetchPayFormsList().then((res) => setPayFormsList(res.data.data || []));
    // fetchWorkTypeList().then((res) => setWorkTypeList(res.data.data || []));
  }, []);
  const titleClassName = 'pt-[20px] text-[20px] font-semibold';
  return (
    <Flex vertical gap={20}>
      <p className={titleClassName}>Thông tin chi tiết</p>
      <HorizontalSelect
        label="Hộp số"
        data={[
          { id: 1, Name: 'Đã sử dụng' },
          { id: 2, Name: 'Mới' },
        ]}
      />
      <SelectCustom
        className="!w-1/2"
        label={'Bảo hành'}
        data={[
          { id: 1, Name: 'Đã sử dụng' },
          { id: 2, Name: 'Mới' },
        ]}
      />
    </Flex>
  );
}
