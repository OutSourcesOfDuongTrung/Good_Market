'use client';
import CardItemHorizontalManager from '@/components/common/CardItemHorizontalManager';
import { Avatar, Flex, Pagination } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';

export default function PostManagePage() {
  const [currentTab, setCurrentTab] = useState('active');
  const tabList = [
    { key: 'active', label: 'Đang hiện thị', children: <p>ok</p> },
    { key: 'expired', label: 'Hết hạn', children: <p>ok</p> },
    { key: 'reject', label: 'Bị từ chối', children: <p>ok</p> },
    { key: 'not_active', label: 'Đã ẩn', children: <p>ok</p> },
    { key: 'different', label: 'Khác', children: <p>ok</p> },
  ];
  return (
    <div className="w-2/3 m-auto">
      <p className="py-[20px] font-bold">Quản lí tin đăng</p>
      <Flex
        align="center"
        gap={20}
        className="relative p-[10px] rounded-lg bg-white"
      >
        <Avatar size={100} />
        <Flex vertical gap={10}>
          <p className="font-semibold text-[18px]">Khánh sky</p>
          <Link href={'/user/1'}>
            <p className="px-[20px] py-[5px] text-[14px] cursor-pointer rounded-lg text-[#4e8bef] border border-[#4e8bef]">
              Xem trang cá nhân
            </p>
          </Link>
        </Flex>
        <Flex
          align="center"
          className="absolute right-0 top-1/2 -translate-y-1/2 py-[5px] pl-[5px] pr-[20px] rounded-s-full bg-[#ffba00]"
          gap={10}
        >
          <Avatar size={30} />
          <p className="text-[12px] font-medium">BlueCar Auto</p>
        </Flex>
      </Flex>
      <Flex className="bg-white rounded-lg my-[10px] cursor-pointer">
        {tabList.map((item, index) => (
          <p
            onClick={() => setCurrentTab(item.key)}
            className={`flex-1 relative text-center transition-all py-[10px] uppercase text-[#9b9b9b] font-semibold ${
              currentTab === item.key &&
              "before:content-[''] before:absolute  before:bg-[#ffba00] before:w-full before:h-[2px] before:rounded-full before:top-full before:left-0"
            }`}
            key={index}
          >
            {item.label}
          </p>
        ))}
      </Flex>
      <Flex vertical gap={5} align="center">
        {[...Array(5)].map((item, index) => (
          <CardItemHorizontalManager key={index} />
        ))}
        <Pagination className="!my-[20px]" defaultCurrent={1} total={50} />
      </Flex>
    </div>
  );
}
