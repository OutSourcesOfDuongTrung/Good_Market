import React, { useContext, useEffect, useState } from 'react';
import SelectCustom from '../SelectCustom';
import { Flex, Space } from 'antd';
import InputCustom from '../InputCustom';
import TextAreaCustom from '../TextAreaCustom';
import ModalLocationSelectCustom from '../ModalLocationSelectCustom';
import ModalCategorySelectCustom from '../ModalCategorySelectCustom';
import { fetchCareerList } from '@/api/jobRequest';
import { PreviewDataContext } from '@/app/(app)/(HeaderLayout)/(Auth)/creat-post/page';

interface Props {
  onPreview?: () => void;
}

export default function CreatePostWorkForm(props: Props) {
  const [careerList, setCareerList] = useState<IJob[]>([]);
  const [careerId, setCareerId] = useState<string | number>();
  const [adressId, setAdressId] = useState<string | number>();
  const [workTypeId, setWorkTypeId] = useState<string | number>();
  const [payMethodId, setPayMethodId] = useState<string | number>();
  const [title, setTitle] = useState<string | number>();
  const [genderId, setGenderId] = useState<string | number>();
  const [experienceId, setExperienceId] = useState<string | number>();
  const data = useContext(PreviewDataContext);

  const previewData = {
    title,
    careerId,
    adressId,
    workTypeId,
    payMethodId,
    genderId,
    experienceId,
  };

  useEffect(() => {
    fetchCareerList().then((res) => setCareerList(res.data.data || []));
  }, []);
  return (
    <Flex vertical>
      <p className="py-[30px] text-[20px] font-bold">
        Thông tin nhà tuyển dụng
      </p>
      <ModalLocationSelectCustom
        onChange={(e) => setAdressId(e)}
        label={'Địa chỉ'}
      />
      <p className="py-[30px] text-[20px] font-bold">Nội dung đăng tuyển</p>
      <Flex vertical gap={20}>
        <InputCustom
          required
          onChange={(e) => setTitle(e)}
          label={'Tiêu đề tin đăng'}
        />
        <InputCustom required type="number" label={'Số lượng tuyển dụng'} />
        <SelectCustom
          onChange={(e) => setCareerId(e)}
          data={careerList}
          defaultValue={data.previewData?.careerId}
          label={'Nghành nghề'}
        />
        <SelectCustom
          onChange={(e) => setWorkTypeId(e)}
          data={[]}
          label={'Loại công việc'}
        />
        <SelectCustom
          onChange={(e) => setPayMethodId(e)}
          data={[]}
          required
          label={'Hình thức trả lương'}
        />
        <InputCustom required type="number" label={'Lương'} />
        <TextAreaCustom required label={'Mô tả chi tiết'} />
        <p className="py-[10px] text-[20px] font-bold">Thông tin thêm</p>

        <Flex gap={20}>
          <InputCustom required type="number" label={'Độ tuổi tối thiểu'} />
          <InputCustom required type="number" label={'Độ tuổi tối đa'} />
        </Flex>
        <Space
          className={`w-full text-[#9b9b9b] transition-all !text-[12px] font-medium`}
        >
          Giới tính <span className="text-red-500">*</span>
        </Space>
        <Flex className="text-[14px]" gap={10}>
          <p className="px-[20px] py-[5px] rounded-full bg-[#f4f4f4]">Nam</p>
          <p className="px-[20px] py-[5px] rounded-full bg-[#f4f4f4]">Nữ</p>
        </Flex>
        <SelectCustom
          onChange={(e) => setExperienceId(e)}
          data={[]}
          required
          label={'Kinh nghiệm'}
        />
        <Flex gap={20}>
          <button
            onClick={() => {
              data.setPreviewData?.(previewData);
              props.onPreview?.();
            }}
            className="flex-1 py-[10px] rounded-lg border text-[#da7502] border-[#da7502]  hover:bg-[#ffe9c2]"
          >
            Xem trước
          </button>
          <button className="flex-1 py-[10px] rounded-lg border text-white bg-[#da7502] border-[#da7502] hover:text-white hover:bg-[#da6702]">
            Đăng tin
          </button>
        </Flex>
      </Flex>
    </Flex>
  );
}
