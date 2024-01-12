'use client';
import CardItem from '@/components/common/CardItem';
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  HeartFilled,
  MessageFilled,
  ShareAltOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { Avatar, Image, Rate, Space } from 'antd';
import React, { useRef } from 'react';

export default function ProductIdPage() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (ref.current) {
      ref.current.scrollLeft += scrollOffset;
    }
  };
  return (
    <div className="w-3/4 m-auto">
      <div className="flex gap-x-5">
        <div className="w-2/3 flex flex-col gap-y-5">
          <div className="w-full bg-white p-[10px] rounded-lg">
            <Image
              width={'100%'}
              height={300}
              className="object-cover "
              preview={false}
              src={''}
              alt=""
            />
            <div className="w-full overflow-x-auto">
              <div className="flex gap-x-2">
                {[...Array(50)].map((_, index) => (
                  <Image
                    key={index}
                    width={100}
                    height={100}
                    className="object-cover "
                    preview={false}
                    src={''}
                    alt=""
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="p-[10px] rounded-lg bg-white">
            <p className="font-semibold">
              Tuyển NV Nam, Nữ PV Nhà hàng tại quận 5
            </p>
            <div className="flex justify-between">
              <b className="text-[#d0021b]">$26.000</b>
              <div className="flex gap-x-5">
                <Space>
                  <ShareAltOutlined />
                  Chia sẻ
                </Space>
                <Space>
                  <HeartFilled />
                  lưu tin
                </Space>
              </div>
            </div>
            <div className="py-[10px]">
              <Space className="text-[#777777] ">
                <ShareAltOutlined />
                <p className="truncate w-[500px]">
                  23 duröng Sö 14, Phuong 5, Quén Gö Väp, Tp Hö Chi Mi
                </p>
              </Space>
              <Space className="text-[#777777] ">
                <ShareAltOutlined />
                <p className="truncate w-[500px]">
                  23 duröng Sö 14, Phuong 5, Quén Gö Väp, Tp Hö Chi Mi
                </p>
              </Space>
              <Space className="text-[#777777] ">
                <ShareAltOutlined />
                <p className="truncate w-[500px]">
                  23 duröng Sö 14, Phuong 5, Quén Gö Väp, Tp Hö Chi Mi
                </p>
              </Space>
            </div>
          </div>
          <div className="p-[10px] rounded-lg bg-white">
            <p className="font-semibold">Mô tả chi tiết</p>
            <div className="py-[10px]">
              {`-Thvc hién cong viéc lau chüi, don dep, ve vinh theo phån cöng cüa
              Quån II' Hånh chinh Thöi gian låm viéc: 6h30-4h45
              - Khu vvc låm
              vi$c: 23 dubng 14 phurdng 5 Quan Gö Väp`}
            </div>
          </div>
          <div className="p-[10px] rounded-lg bg-white">
            <p className="font-semibold">Đặc điểm công việc</p>
            <div className="grid grid-cols-2 gap-y-2 py-[10px]">
              {[...Array(7)].map((_, index) => (
                <Space className="w-1/2" key={index}>
                  <ShareAltOutlined />
                  <p className="truncate w-[300px]">
                    23 duröng Sö 14, Phuong 5, Quén Gö Väp, Tp Hö Chi Mi
                  </p>
                </Space>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-y-5">
          <div className="p-[15px] bg-white rounded-lg">
            <div className="flex gap-x-3">
              <Avatar size={50} src={''} />
              <div className="flex flex-col gap-y-1">
                <b>Dương Lê Văn Anh</b>
                <Space className="text-[14px]">
                  <Rate
                    className={'!text-[14px]'}
                    allowHalf
                    defaultValue={2.5}
                  />
                  <p>2.5</p>
                  <p className="text-[#28699f]">(25 đánh giá)</p>
                </Space>
                <p className="text-[13px] text-[#9b9b9b]">
                  • Hoạt động 3 tuần trước
                </p>
              </div>
            </div>
            <div className="flex gap-x-3 text-[14px] mt-[20px]">
              <button className="flex flex-1 items-center justify-center rounded-md hover:bg-[#fe9900] hover:text-white border-2 border-[#fe9900] text-[#fe9900]">
                Đang theo dõi
              </button>
              <button className="flex flex-1 items-center justify-center rounded-md hover:bg-[#fe9900] hover:text-white border-2 border-[#fe9900] text-[#fe9900]">
                {`Trang cá nhân >`}
              </button>
            </div>
          </div>
          <div className="p-[15px] bg-white rounded-lg">
            <p className="font-medium">Liên hệ bán</p>
            <div className="w-full overflow-x-auto py-[10px]">
              <div className="w-max flex text-[14px]">
                {[...Array(5)].map((_, index) => (
                  <p
                    key={index}
                    className=" inline-block py-[5px] px-[10px] border rounded-full border-[#fe9900]"
                  >
                    Công việc này còn ko ạ
                  </p>
                ))}
              </div>
            </div>
            <div className="flex items-center mt-[20px] rounded-lg px-[10px] py-[5px] text-white justify-between bg-[#48862d]">
              <MessageFilled />
              <b className="uppercase">Chat với người bán</b>
            </div>
          </div>
          <Space className="text-[#b5b5b5]">
            <WarningOutlined />
            Báo cáo tin đăng này
          </Space>
        </div>
      </div>
      <div className="relative">
        <div className="rounded-lg my-[20px] bg-white font-semibold uppercase text-[20px] px-[10px] py-[5px] shadow-[0_2px_8px_rgba(0,0,0,.15)]">
          Tin rao khåc cüa Nguyen Trung Quan
        </div>
        <button
          className="absolute -translate-x-full left-0 top-1/2"
          onClick={() => scroll(-200)}
        >
          <CaretLeftOutlined />
        </button>
        <button
          className="absolute translate-x-full right-0 top-1/2"
          onClick={() => scroll(200)}
        >
          <CaretRightOutlined />
        </button>
        <div
          ref={ref}
          className="w-full scroll-smooth overflow-x-auto no-scrollbar "
        >
          <div className="flex gap-x-2 py-[20px] px-[10px]">
            {[...Array(12)].map((_, index) => (
              <CardItem key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
