import { Avatar, Image, Space } from 'antd';
import React from 'react';

export default function CardItem() {
  return (
    <div className="w-fit shadow-[0_2px_8px_rgba(0,0,0,.15)] p-[10px] rounded-lg">
      <Image
        width={200}
        height={230}
        preview={false}
        className="object-cover rounded-lg overflow-hidden"
        alt={''}
        src=""
      />
      <div className="w-[200px]">
        <div className="h-[90px]">
          <p className="line-clamp-2 font-medium">
            Mai t4 cần 10 nam quét dọn ctrinh tại ga như hình
          </p>
          <p className="truncate text-[#808080] py-[5px]">Ngày làm: 10/10/23</p>
        </div>
        <b className="text-[#d0021b]">$300/ngày</b>
        <Space>
          <Avatar src="" />
          <p className="text-[10px] text-[#c7c7c7]">2 giờ trước • Cao hùng</p>
        </Space>
      </div>
    </div>
  );
}
