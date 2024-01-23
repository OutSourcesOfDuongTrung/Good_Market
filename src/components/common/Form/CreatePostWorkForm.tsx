import React, { useContext, useEffect, useState } from 'react';
import SelectCustom from '../SelectCustom';
import { Flex, Space, notification } from 'antd';
import InputCustom from '../InputCustom';
import TextAreaCustom from '../TextAreaCustom';
import ModalLocationSelectCustom from '../ModalLocationSelectCustom';
import ModalCategorySelectCustom from '../ModalCategorySelectCustom';
import {
  fetchCareerList,
  fetchCreateWorkPost,
  fetchExperienceList,
  fetchPayFormsList,
  fetchWorkTypeList,
} from '@/api/jobRequest';
import { PreviewDataContext } from '@/app/(app)/(HeaderLayout)/(Auth)/layout';

interface Props {
  onPreview?: () => void;
}

export default function CreatePostWorkForm(props: Props) {
  const previewData = useContext(PreviewDataContext);
  const [careerList, setCareerList] = useState<IJob[]>([]);
  const [experienceList, setExperienceList] = useState<IJob[]>([]);
  const [payFormsList, setPayFormsList] = useState<IJob[]>([]);
  const [workTypeList, setWorkTypeList] = useState<IJob[]>([]);

  const onChangeData = (data: IJobPostCreate) => {
    console.log(data);
    previewData.setPreviewData?.((prevData) => ({ ...prevData, ...data }));
  };
  useEffect(() => {
    fetchCareerList().then((res) => setCareerList(res.data.data || []));
    fetchExperienceList().then((res) => setExperienceList(res.data.data || []));
    fetchPayFormsList().then((res) => setPayFormsList(res.data.data || []));
    fetchWorkTypeList().then((res) => setWorkTypeList(res.data.data || []));
  }, []);
  const titleClassName = 'py-[30px] text-[20px] font-semibold';
  return (
    <Flex vertical>
      <p className={titleClassName}>Thông tin nhà tuyển dụng</p>
      <ModalLocationSelectCustom
        onChange={(e) => {
          onChangeData({ Location: e, Address: e });
        }}
        label={'Địa chỉ'}
      />
      <p className={titleClassName}>Nội dung đăng tuyển</p>
      <Flex vertical gap={20}>
        <InputCustom
          required
          defaultValue={previewData.previewData?.Title}
          onChange={(e) => onChangeData({ Title: e as string })}
          label={'Tiêu đề tin đăng'}
        />
        <InputCustom
          required
          type="number"
          defaultValue={previewData.previewData?.Number_of_recruitment}
          onChange={(e) => onChangeData({ Number_of_recruitment: e as number })}
          label={'Số lượng tuyển dụng'}
        />
        <SelectCustom
          onChange={(e) => onChangeData({ Career: e })}
          data={careerList}
          defaultValue={previewData.previewData?.Career}
          label={'Nghành nghề'}
        />
        <SelectCustom
          onChange={(e) => onChangeData({ Type_of_work: e as number })}
          data={workTypeList}
          defaultValue={previewData.previewData?.Type_of_work}
          label={'Loại công việc'}
        />
        <SelectCustom
          onChange={(e) => onChangeData({ Pay_forms: e })}
          data={payFormsList}
          defaultValue={previewData.previewData?.Pay_forms}
          required
          label={'Hình thức trả lương'}
        />
        <InputCustom
          required
          defaultValue={previewData.previewData?.Wage}
          onChange={(e) => onChangeData({ Wage: e as number })}
          type="number"
          label={'Lương'}
        />
        <TextAreaCustom required label={'Mô tả chi tiết'} />
        <p className="py-[10px] text-[20px] font-semibold">Thông tin thêm</p>

        <Flex gap={20}>
          <InputCustom
            required
            type="number"
            defaultValue={previewData.previewData?.Minimum_age}
            onChange={(e) => onChangeData({ Minimum_age: e as number })}
            label={'Độ tuổi tối thiểu'}
          />
          <InputCustom
            required
            defaultValue={previewData.previewData?.Maximum_age}
            onChange={(e) => onChangeData({ Maximum_age: e as number })}
            type="number"
            label={'Độ tuổi tối đa'}
          />
        </Flex>
        <Space
          className={`w-full text-[#9b9b9b] transition-all !text-[12px] font-medium`}
        >
          Giới tính <span className="text-red-500">*</span>
        </Space>
        <Flex className="text-[14px] cursor-pointer" gap={10}>
          <p
            onClick={() => onChangeData({ Sex: 1 })}
            className={`px-[20px] py-[5px] rounded-full bg-[#f4f4f4] ${
              previewData.previewData?.Sex === 1 &&
              'bg-[#ffe9c2] text-[#da7502]'
            }`}
          >
            Nam
          </p>
          <p
            onClick={() => onChangeData({ Sex: 2 })}
            className={`px-[20px] py-[5px] rounded-full bg-[#f4f4f4] ${
              previewData.previewData?.Sex === 2 &&
              'bg-[#ffe9c2] text-[#da7502]'
            }`}
          >
            Nữ
          </p>
        </Flex>
        <SelectCustom
          onChange={(e) => onChangeData({ Experience: e })}
          data={experienceList}
          defaultValue={previewData.previewData?.Experience}
          required
          label={'Kinh nghiệm'}
        />
      </Flex>
    </Flex>
  );
}
