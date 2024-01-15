import {
  EditOutlined,
  EyeOutlined,
  MoreOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Dropdown, Flex, Image } from 'antd';
import React from 'react';

export default function CardItemHorizontalManager() {
  return (
    <div className="w-full">
      <Flex
        align="center"
        gap={20}
        className=" relative bg-white rounded-lg p-[10px]"
      >
        <div className="relative rounded-lg overflow-hidden">
          <Image
            width={100}
            height={70}
            preview={false}
            className=""
            alt=""
            src=""
          />
          <p className="absolute w-full left-0 bottom-0 py-[5px] text-[10px] text-white text-center bg-[rgba(0,0,0,0.7)]">
            Đẫ ẩn
          </p>
        </div>
        <Flex vertical gap={5}>
          <p>SH 125 CBS 2020 xe CVC Chät Siéu Li-rdT NEW</p>
          <b className="text-red-500 text-[14px]">$3000/tháng</b>
          <p className="text-[#9b9b9b] text-[12px]">
            Hiện thị: <b className="text-[#9b9b9b]">03/06/23 - 07/10/23</b>
          </p>
        </Flex>
        <Dropdown
          placement="bottomRight"
          menu={{
            items: [
              {
                key: '1',
                icon: <ShareAltOutlined />,
                label: 'Chia sẻ',
              },
              {
                key: '2',
                icon: <EyeOutlined />,
                label: 'Đã bán / Ẩn tin',
              },
              {
                key: '3',
                icon: <EditOutlined />,
                label: 'Sửa tin',
              },
            ],
          }}
        >
          <MoreOutlined className="absolute right-5 top-5" />
        </Dropdown>
      </Flex>
    </div>
  );
}
