'use client';
import MessageTabItem from '@/components/common/MessageTabItem';
import NotificationItem from '@/components/common/NotificationItem';
import { Flex } from 'antd';
import React from 'react';

export default function ChatPage() {
  return (
    <div className="w-4/6 m-auto bg-white">
      <Flex>
        <div className="w-2/5">
          <Flex className="p-[10px]" gap={10}>
            <p className="bg-[#ffe9c2] px-[20px] py-[3px] text-[#ffa031] rounded-full text-[14px]">
              Tất cả
            </p>
            <p className="bg-[#ffe9c2] px-[20px] py-[3px] text-[#ffa031] rounded-full text-[14px]">
              Tôi mua
            </p>
            <p className="bg-[#ffe9c2] px-[20px] py-[3px] text-[#ffa031] rounded-full text-[14px]">
              Tôi bán
            </p>
          </Flex>
          <Flex vertical>
            {[...Array(5)].map((_, index) => (
              <MessageTabItem key={index} />
            ))}
          </Flex>
        </div>
        <div className="w-3/5"></div>
      </Flex>
    </div>
  );
}
