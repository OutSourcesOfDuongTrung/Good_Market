import { AlertOutlined } from '@ant-design/icons';
import { Avatar, Badge, Image, Rate, Space } from 'antd';
import React from 'react';

export default function TopWork() {
  return (
    <div className="w-full">
      <div className="relative ">
        <Image preview={false} width={'100%'} height={200} alt="" src="" />
        <div className="absolute left-[20px] top-full -translate-y-1/2">
          <Badge dot={true} color="green" size="default">
            <Image
              alt=""
              preview={false}
              width={100}
              height={100}
              className="p-[2px] bg-black  object-cover rounded-full "
            />
          </Badge>
        </div>
        <p className="absolute right-5 bottom-5 px-[10px] py-[5px] rounded-full border text-[12px] text-[#dd8500] border-[#dd8500] ">
          Đang theo dõi
        </p>
      </div>
      <div className="w-full">
        <p className="w-full pl-10 text-center font-semibold">
          Khánh blue - trùm việc làm
        </p>
        <div className="flex flex-col gap-y-1 pt-[40px] pb-[10px]">
          <Space className="text-[14px]">
            <Rate className={'!text-[14px]'} allowHalf defaultValue={2.5} />
            <p>2.5</p>
            <p className="text-[#28699f]">(25 đánh giá)</p>
          </Space>
          <Space className="text-[13px] text-[#9b9b9b]">
            <AlertOutlined className="text-[18px]" />• Hoạt động 3 tuần trước
          </Space>
          <p className="text-[15px] text-[#9b9b9b]">
            “ Möi gidi viéc låm ( Cöng trinh, näng lugng, cöp pha, nöng nghiép )
            khu vvrc AnNan, AnPing, Yongkang - Dåi Nam „
          </p>
        </div>
      </div>
    </div>
  );
}
