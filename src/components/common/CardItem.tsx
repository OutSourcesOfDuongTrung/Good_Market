import { Avatar, Badge, Image, Space } from 'antd';
import Link from 'next/link';
import React from 'react';

interface Props {
  ribbon?: string;
  imageHeight?: number;
  imageWidth?: number;
}

export default function CardItem(props: Props) {
  const children = (
    <div className="w-fit bg-white shadow-[0_2px_8px_rgba(0,0,0,.15)] p-[10px] rounded-lg">
      <Image
        width={props.imageWidth ? props.imageWidth : 200}
        height={props.imageHeight ? props.imageHeight : 230}
        preview={false}
        className="object-cover rounded-lg overflow-hidden"
        alt={''}
        src="https://cdn.chotot.com/bk7hjvTBw-LnlG4DfqV80eh-L45j2lXCkGjWinYGU3g/preset:listing/plain/63d6a881d9ca9d45a1442de9dab3c64d-2860416483063833569.jpg"
      />
      <div className="w-[200px]">
        <div className="h-[90px]">
          <p className="line-clamp-2 font-medium text-[15px]">
            Mai t4 cần 10 nam quét dọn ctrinh tại ga như hình
          </p>
          <p className="truncate text-[#808080] py-[5px] text-[14px]">
            Ngày làm: 10/10/23
          </p>
        </div>
        <b className="text-[#d0021b]">$300/ngày</b>
        <Space className="w-full">
          <Avatar src="" />
          <p className="w-[150px] block text-[12px] text-[#c7c7c7] truncate">
            2 giờ trước • Cao hùng
          </p>
        </Space>
      </div>
    </div>
  );

  return props.ribbon ? (
    <Link href={'/product/1'}>
      <Badge.Ribbon color="red" placement="start" text="Hippies">
        {children}
      </Badge.Ribbon>
    </Link>
  ) : (
    children
  );
}
