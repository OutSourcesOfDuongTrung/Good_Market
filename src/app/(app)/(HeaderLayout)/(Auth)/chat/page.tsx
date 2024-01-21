'use client';
import MessageTabItem from '@/components/common/MessageTabItem';
import NotificationItem from '@/components/common/NotificationItem';
import {
  DeploymentUnitOutlined,
  FileImageOutlined,
  MenuOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { Avatar, Flex, Input, Space } from 'antd';
import React from 'react';

export default function ChatPage() {
  return (
    <div className="w-5/6 h-[630px] m-auto bg-white">
      <Flex className="h-full">
        <Flex
          vertical
          justify="space-between"
          className="w-2/5 h-full cursor-pointer"
        >
          <Flex vertical className="h-full">
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
            <Flex className="overflow-y-auto" vertical align="revert">
              <Flex vertical>
                {[...Array(100)].map((_, index) => (
                  <MessageTabItem key={index} />
                ))}
              </Flex>
            </Flex>
            <Flex vertical className="">
              <button className="w-fit my-[20px] m-auto px-[10px] py-[5px] rounded-lg border text-orange-600 border-orange-600">
                Xóa cuộc trò chuyện
              </button>
            </Flex>
          </Flex>
        </Flex>
        <Flex vertical className="w-3/5 h-full text-[14px]">
          <Flex justify="space-between" className="p-[10px] border-b">
            <Flex justify="center" align="center" gap={10}>
              <Avatar src="" size={50} />
              <Flex vertical>
                <p>BlueCar Auto</p>
                <Space> • Đang hoạt động</Space>
              </Flex>
            </Flex>
            <MenuOutlined />
          </Flex>
          <Flex className="p-[10px]  border-b" align="center" gap={10}>
            <Avatar shape="square" src="" size={50} />
            <Flex vertical>
              <p>BlueCar Auto</p>
              <p className="text-red-500 font-semibold">$200.000</p>
            </Flex>
          </Flex>
          <div className="h-full flex flex-col-reverse overflow-y-auto">
            <Flex vertical className="p-[10px]">
              {[...Array(50)].map((_, index) => (
                <Flex key={index} justify={index % 2 === 0 ? 'start' : 'end'}>
                  <Flex
                    vertical
                    className={`p-[10px] rounded-lg ${
                      index % 2 === 0 ? 'bg-[#f4f4f4]' : 'bg-[#fff4d6]'
                    }`}
                  >
                    <p>asdqweqweqwqwqwqwe-{index}</p>
                    <p
                      className={`text-[#bdc1c9] text-[12px] ${
                        index % 2 !== 0 && 'text-right'
                      }`}
                    >
                      {index} giờ trước
                    </p>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </div>
          <Flex gap={10} className="m-[20px] text-[20px]">
            <FileImageOutlined />
            <DeploymentUnitOutlined />
            <Input className="text-[14px]" placeholder="..." />
            <SendOutlined />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
