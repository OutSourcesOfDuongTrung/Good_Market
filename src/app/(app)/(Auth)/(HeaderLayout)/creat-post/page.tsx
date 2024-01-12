'use client';
import ModalSelectCustom from '@/components/common/ModalSelectCustom';
import { CloudUploadOutlined, InboxOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
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
          <ModalSelectCustom />
        </div>
      </div>
    </div>
  );
}
