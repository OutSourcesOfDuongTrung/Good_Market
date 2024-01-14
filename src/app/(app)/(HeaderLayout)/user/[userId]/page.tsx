'use client';
import CardItem from '@/components/common/CardItem';
import {
  ContactsOutlined,
  EllipsisOutlined,
  HomeOutlined,
  MessageFilled,
} from '@ant-design/icons';
import {
  Avatar,
  Button,
  Empty,
  Flex,
  Image,
  Pagination,
  Rate,
  Result,
  Space,
} from 'antd';
import React, { useState } from 'react';

export default function UserIdPage() {
  const [currentTab, setCurrentTab] = useState<'POST' | 'RATE'>('POST');
  return (
    <div className="w-4/5 m-auto mt-[10px] ">
      <div className="flex gap-x-5">
        <div className="w-1/3 rounded-lg bg-white">
          <div className="relative">
            <Image
              height={150}
              width={'100%'}
              className="object-cover"
              preview={false}
              alt=""
              src={''}
            />
            <div className="absolute p-[5px] bg-white rounded-full -translate-y-1/2 left-5 top-full">
              <Avatar
                size={100}
                src={
                  'https://app.getgrass.io/_next/image?url=%2Fimages%2Ficons%2Ftoken-flat.png&w=1920&q=75'
                }
              />
            </div>
            <p className="absolute px-[20px] py-[5px] translate-y-full text-white text-[14px] rounded-lg top-1/2 right-5 bg-[rgba(0,0,0,0.5)]">
              • Hoạt động 2 phút trước
            </p>
          </div>
          <div className="p-[10px]">
            <Flex
              gap={5}
              align="center"
              className="w-full justify-end items-end"
            >
              <p className="rounded-full text-[14px] px-[10px] py-[5px] hover:bg-[#dd8500] hover:text-white text-[#dd8500] border border-[#dd8500]">
                Đang theo dõi
              </p>
              <EllipsisOutlined className="p-[5px] text-[#757575] rounded-full border text-[20px]" />
            </Flex>
            <Space direction="vertical" className="mt-[20px]">
              <p className="font-semibold text-[20px]">Dương Lê Anh Vân</p>
              <Space className="text-[14px]">
                <Rate className={'!text-[20px]'} allowHalf defaultValue={2.5} />
                <p>2.5</p>
                <p className="text-[#28699f]">(25 đánh giá)</p>
              </Space>
            </Space>
            <Flex
              className="my-[10px] border rounded-lg px-[20px] py-[10px]"
              gap={35}
            >
              <Space className="flex-1" align="center" direction="vertical">
                <p className="text-[12px] text-center text-[#666666] font-semibold">
                  Số tin đang hiện thị
                </p>
                <b>5</b>
              </Space>
              <Space className="flex-1" align="center" direction="vertical">
                <p className="text-[12px] text-center text-[#666666] font-semibold">
                  Thời gian tham gia
                </p>
                <b>5</b>
              </Space>
              <Space className="flex-1" align="center" direction="vertical">
                <p className="text-[12px] text-center text-[#666666] font-semibold">
                  Số người theo dõi
                </p>
                <b>5</b>
              </Space>
            </Flex>
            <Space direction="vertical">
              <Flex align="baseline" gap={10}>
                <HomeOutlined />
                <p className="text-[13px] text-blue-500 text-wrap">
                  <b className="text-[#666666] font-normal text-[13px]">
                    Số điện thoại:{' '}
                  </b>
                  0123123 12313
                </p>
              </Flex>
              <Flex align="baseline" gap={10}>
                <HomeOutlined />
                <p className="text-[13px] text-blue-500 text-wrap">
                  <b className="text-[#666666] font-normal text-[13px]">
                    Địa chỉ:{' '}
                  </b>
                  0123123 12313qwe eeeeeeee eeee eeee eee eeeeeeee eeeeeeeeee
                  eeeeeeee eeeeeeee
                </p>
              </Flex>
              <div className="flex items-center mt-[10px] rounded-lg px-[10px] py-[5px] text-white justify-between bg-[#48862d]">
                <MessageFilled />
                <b className="uppercase text-[14px] font-semibold">
                  Chat với người bán
                </b>
              </div>
            </Space>
          </div>
        </div>
        <div className="w-2/3">
          <Flex className="flex rounded-lg text-[14px] px-[10px] bg-white">
            <p
              onClick={() => setCurrentTab('POST')}
              className={`flex-1 py-[10px] text-center uppercase font-semibold ${
                currentTab === 'POST' && 'border-b-[4px]'
              } border-[#ffc528]`}
            >
              Tin đăng
            </p>
            <p
              onClick={() => setCurrentTab('RATE')}
              className={`flex-1 py-[10px]  text-center uppercase font-semibold ${
                currentTab === 'RATE' && 'border-b-[4px]'
              } border-[#ffc528]`}
            >
              Đánh giá
            </p>
          </Flex>
          {currentTab === 'POST' && (
            <div className="py-[10px]">
              <div className="flex justify-between">
                {[...Array(3)].map((_, index) => (
                  <CardItem imageWidth={240} imageHeight={250} key={index} />
                ))}
              </div>
              <div className="flex justify-center mt-[20px]">
                <Pagination defaultCurrent={1} total={50} />
              </div>
            </div>
          )}
          {currentTab === 'RATE' && (
            <div className="py-[10px] bg-white">
              <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                // extra={<Button type="primary">Back Home</Button>}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
