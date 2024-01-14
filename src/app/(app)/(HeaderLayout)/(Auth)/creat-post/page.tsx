'use client';
import { fetchCareerList } from '@/api/jobRequest';
import InputCustom from '@/components/common/InputCustom';
import ModalLocationSelectCustom from '@/components/common/ModalLocationSelectCustom';
import ModalCategorySelectCustom from '@/components/common/ModalCategorySelectCustom';
import SelectCustom from '@/components/common/SelectCustom';
import TextAreaCustom from '@/components/common/TextAreaCustom';
import { CloudUploadOutlined, InboxOutlined } from '@ant-design/icons';
import { Flex, Input, Space } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function CreatePostPage() {
  const [careerList, setCareerList] = useState<IJob[]>([]);
  useEffect(() => {
    fetchCareerList().then((res) => setCareerList(res.data.data || []));
  }, []);
  return (
    <div className="w-3/5 flex flex-col gap-y-5 py-[20px] px-[10px] m-auto bg-white mt-[20px] rounded-lg">
      <div className="w-full flex gap-x-5">
        <div className="flex-1">
          <b>Ảnh / video sản phẩm</b>
          <Space className="flex text-[#9b9b9b] text-[13px]">
            Xem thêm về
            <Link href="/">
              <p className="text-blue-500 underline text-wrap">
                Quy định đăng tin của chợ tốt
              </p>
            </Link>
          </Space>
          <div className="w-[300px] h-[200px] flex items-center justify-center">
            <Dragger>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Dragger>
          </div>
        </div>
        <div className="flex-[2_2_0%]">
          <ModalCategorySelectCustom label="Danh mục tin đăng" />
          <p className="py-[30px] text-[20px] font-bold">
            Thông tin nhà tuyển dụng
          </p>
          <ModalLocationSelectCustom label={'Địa chỉ'} />
          <p className="py-[30px] text-[20px] font-bold">Nội dung đăng tuyển</p>
          <Flex vertical gap={20}>
            <InputCustom required label={'Tiêu đề tin đăng'} />
            <InputCustom required type="number" label={'Số lượng tuyển dụng'} />
            <SelectCustom
              onChange={(e) => console.log(e)}
              data={careerList}
              label={'Nghành nghề'}
            />
            <SelectCustom data={[]} label={'Loại công việc'} />
            <SelectCustom data={[]} required label={'Hình thức trả lương'} />
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
              <p className="px-[20px] py-[5px] rounded-full bg-[#f4f4f4]">
                Nam
              </p>
              <p className="px-[20px] py-[5px] rounded-full bg-[#f4f4f4]">Nữ</p>
            </Flex>
            <SelectCustom data={[]} required label={'Kinh nghiệm'} />
            <Flex gap={20}>
              <button className="flex-1 py-[10px] rounded-lg border text-[#da7502] border-[#da7502]  hover:bg-[#ffe9c2]">
                Xem trước
              </button>
              <button className="flex-1 py-[10px] rounded-lg border text-white bg-[#da7502] border-[#da7502] hover:text-white hover:bg-[#da6702]">
                Đăng tin
              </button>
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
}
