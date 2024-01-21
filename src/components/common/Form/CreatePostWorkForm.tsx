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
  const data = useContext(PreviewDataContext);
  const [locationId, setLocationId] = useState<string | number>();
  const [careerList, setCareerList] = useState<IJob[]>([]);
  const [experienceList, setExperienceList] = useState<IJob[]>([]);
  const [payFormsList, setPayFormsList] = useState<IJob[]>([]);
  const [workTypeList, setWorkTypeList] = useState<IJob[]>([]);
  const [careerId, setCareerId] = useState<string | number>();
  const [adressId, setAdressId] = useState<string | number>();
  const [workTypeId, setWorkTypeId] = useState<string | number>();
  const [payMethodId, setPayMethodId] = useState<string | number>();
  const [minAge, setMinAge] = useState<number>();
  const [maxAge, setMaxAge] = useState<number>();
  const [wage, setWage] = useState<number>();
  const [recruitmentTotal, setRecruitmentTotal] = useState<number>();
  const [title, setTitle] = useState<string>();
  const [genderId, setGenderId] = useState<string | number>(
    data.previewData?.Sex || ''
  );
  const [experienceId, setExperienceId] = useState<string | number>();

  const previewData: IJobPostCreate = {
    Location: locationId,
    Address: adressId,
    Career: careerId,
    Type_of_work: workTypeId,
    Pay_forms: payMethodId,
    Sex: genderId,
    Experience: experienceId,
    Map: 11,
    Title: title,
    Number_of_recruitment: recruitmentTotal,
    Wage: wage,
    Detailed_description: '12312',
    Minimum_age: minAge,
    Maximum_age: maxAge,
    Video: '131',
    Contact_phone_number: '12313',
    Url: '3123',
  };

  useEffect(() => {
    fetchCareerList().then((res) => setCareerList(res.data.data || []));
    fetchExperienceList().then((res) => setExperienceList(res.data.data || []));
    fetchPayFormsList().then((res) => setPayFormsList(res.data.data || []));
    fetchWorkTypeList().then((res) => setWorkTypeList(res.data.data || []));
  }, []);

  const onSubmit = async () => {
    const isValid = !Object.values(previewData).some((value) => !value);

    if (!isValid) {
      return notification.error({
        message: 'Dữ liệu bạn nhập không đủ hoặc không đúng!',
        description: 'Vui lòng kiểm tra lại.',
      });
    }

    const body = {
      ...data.previewData,
      ...previewData,
    };
    await fetchCreateWorkPost(body)
      .then((res) =>
        notification.success({
          message: 'Đã tạo',
          description: 'Đã tạo bài đăng',
        })
      )
      .catch((err) =>
        notification.error({
          message: 'Lỗi',
          description: 'Tạo bài đăng thất bại',
        })
      );
  };

  return (
    <Flex vertical>
      <p className="py-[30px] text-[20px] font-bAge">
        Thông tin nhà tuyển dụng
      </p>
      <ModalLocationSelectCustom
        onChange={(e) => {
          setLocationId(e);
          setAdressId(e);
        }}
        label={'Địa chỉ'}
      />
      <p className="py-[30px] text-[20px] font-bAge">Nội dung đăng tuyển</p>
      <Flex vertical gap={20}>
        <InputCustom
          required
          defaultValue={data.previewData?.Title}
          onChange={(e) => setTitle(e as string | undefined)}
          label={'Tiêu đề tin đăng'}
        />
        <InputCustom
          required
          type="number"
          defaultValue={data.previewData?.Number_of_recruitment}
          onChange={(e) => setRecruitmentTotal(e as number | undefined)}
          label={'Số lượng tuyển dụng'}
        />
        <SelectCustom
          onChange={(e) => setCareerId(e)}
          data={careerList}
          defaultValue={data.previewData?.Career}
          label={'Nghành nghề'}
        />
        <SelectCustom
          onChange={(e) => setWorkTypeId(e)}
          data={workTypeList}
          defaultValue={data.previewData?.Type_of_work}
          label={'Loại công việc'}
        />
        <SelectCustom
          onChange={(e) => setPayMethodId(e)}
          data={payFormsList}
          defaultValue={data.previewData?.Pay_forms}
          required
          label={'Hình thức trả lương'}
        />
        <InputCustom
          required
          defaultValue={data.previewData?.Wage}
          onChange={(e) => setWage(e as number | undefined)}
          type="number"
          label={'Lương'}
        />
        <TextAreaCustom required label={'Mô tả chi tiết'} />
        <p className="py-[10px] text-[20px] font-bAge">Thông tin thêm</p>

        <Flex gap={20}>
          <InputCustom
            required
            type="number"
            defaultValue={data.previewData?.Minimum_age}
            onChange={(e) => setMinAge(e as number)}
            label={'Độ tuổi tối thiểu'}
          />
          <InputCustom
            required
            defaultValue={data.previewData?.Maximum_age}
            onChange={(e) => setMaxAge(e as number)}
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
            onClick={() => setGenderId(1)}
            className={`px-[20px] py-[5px] rounded-full bg-[#f4f4f4] ${
              genderId === 1 && 'bg-[#ffe9c2] text-[#da7502]'
            }`}
          >
            Nam
          </p>
          <p
            onClick={() => setGenderId(2)}
            className={`px-[20px] py-[5px] rounded-full bg-[#f4f4f4] ${
              genderId === 2 && 'bg-[#ffe9c2] text-[#da7502]'
            }`}
          >
            Nữ
          </p>
        </Flex>
        <SelectCustom
          onChange={(e) => setExperienceId(e)}
          data={experienceList}
          defaultValue={data.previewData?.Experience}
          required
          label={'Kinh nghiệm'}
        />
        <Flex gap={20}>
          <button
            onClick={() => {
              data.setPreviewData?.((prevData) => ({
                ...prevData,
                Location: undefined,
                Address: adressId,
                Career: careerId,
                Type_of_work: workTypeId,
                Pay_forms: payMethodId,
                Sex: genderId,
                Experience: experienceId,
                Map: undefined,
                Title: title,
                Number_of_recruitment: recruitmentTotal,
                Wage: wage,
                Detailed_description: '',
                Minimum_age: minAge,
                Maximum_age: maxAge,
                Video: '',
                Contact_phone_number: '',
                Url: '',
              }));
              props.onPreview?.();
            }}
            className="flex-1 py-[10px] rounded-lg border text-[#da7502] border-[#da7502]  hover:bg-[#ffe9c2]"
          >
            Xem trước
          </button>
          <button
            onClick={onSubmit}
            className="flex-1 py-[10px] rounded-lg border text-white bg-[#da7502] border-[#da7502] hover:text-white hover:bg-[#da6702]"
          >
            Đăng tin
          </button>
        </Flex>
      </Flex>
    </Flex>
  );
}
