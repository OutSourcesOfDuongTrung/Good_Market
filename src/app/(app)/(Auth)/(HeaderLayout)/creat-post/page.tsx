'use client';
import InputCustom from '@/components/common/InputCustom';
import ModalLocationSelectCustom from '@/components/common/ModalLocationSelectCustom';
import ModalSelectCustom from '@/components/common/ModalSelectCustom';
import SelectCustom from '@/components/common/SelectCustom';
import { CloudUploadOutlined, InboxOutlined } from '@ant-design/icons';
import { Flex, Input, Space } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import Link from 'next/link';
import React from 'react';

export default function CreatePostPage() {
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
          <ModalSelectCustom label="Danh mục tin đăng" />
          <p className="py-[30px] text-[20px] font-bold">
            Thông tin nhà tuyển dụng
          </p>
          <ModalLocationSelectCustom label={'Địa chỉ'} />
          <p className="py-[30px] text-[20px] font-bold">Nội dung đăng tuyển</p>
          <Flex vertical gap={20}>
            <InputCustom required label={'Tiêu đề tin đăng'} />
            <InputCustom required type="number" label={'Số lượng tuyển dụng'} />
            <SelectCustom label={'Nghành nghề'} />
            <SelectCustom label={'Loại công việc'} />
            <SelectCustom required label={'Hình thức trả lương'} />
            <InputCustom required type="number" label={'Lương'} />
          </Flex>
          <p className="py-[30px] text-[20px] font-bold">Thông tin thêm</p>
          <Flex gap={20}>
            <InputCustom type="number" label={'Độ tuổi tối thiểu'} />
            <InputCustom type="number" label={'Độ tuổi tối đa'} />
          </Flex>
        </div>
      </div>
    </div>
  );
}
