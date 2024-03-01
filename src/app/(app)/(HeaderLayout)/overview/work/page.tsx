'use client';
import CardItem from '@/components/common/CardItem';
import TitleBar from '@/components/common/TitleBar';
import TopWork from '@/components/common/TopWork';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Avatar, Carousel, Image, Space } from 'antd';
import React, { useRef } from 'react';

export default function WorkPage() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (ref.current) {
      ref.current.scrollLeft += scrollOffset;
    }
  };
  const contentStyle: React.CSSProperties = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <div className="w-3/4 flex flex-col gap-y-5 m-auto">
      <div className="p-[10px] bg-white shadow-xl rounded-lg">
        <Carousel className="rounded-lg overflow-hidden" autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
      <div className="p-[10px] relative rounded-lg bg-white">
        <TitleBar
          shadow={false}
          title={'Việc làm theo ngành nghề'}
          subTitle={'Xem tất cả tin đăng'}
          onClick={() => alert('OK')}
        />

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
          // style={{ scrollBehavior: 'smooth' }}
          ref={ref}
          className="w-full mt-[10px] scroll-smooth transition relative overflow-x-auto no-scrollbar"
        >
          <div className="flex gap-x-4  justify-between">
            {[...Array(15)].map((item, index) => (
              <div
                key={index}
                className="flex w-[100px] hover:bg-[#f5f5f5] px-[20px] py-[10px] rounded-md flex-col gap-y-5 items-center"
              >
                <Image
                  className=" hover:bg-white bg-[#f5f5f5] rounded-full object-cover"
                  width={70}
                  preview={false}
                  height={70}
                  src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/411846395_1033629967741924_4686555832896425400_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=173fa1&_nc_ohc=TFo6GokxkkoAX8QCOlI&_nc_ht=scontent.fhan2-4.fna&oh=00_AfCyB703T6CTQ_eLMh6Rk8c3C6MYPVeCwXKcELXXWL0vyg&oe=65A4E06E"
                  alt=""
                />
                <p className="text-wrap text-center text-[12px] font-medium">
                  Nội thất cây cảnh
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-[10px] relative rounded-lg bg-white">
        <TitleBar
          title={'Chuyên trang việc làm'}
          subTitle={'Xem tất cả'}
          shadow={false}
          onClick={() => alert('OK')}
        />
        <div className="flex gap-x-3">
          <div className="flex-1">
            <TopWork />
          </div>
          <div className="flex-1">
            <TopWork />
          </div>
        </div>
      </div>
      <div className="relative">
        <TitleBar
          title={'VIỆC LÀM 24H'}
          subTitle={'Xem tất cả'}
          onClick={() => {}}
          shadow={true}
        />

        <div className="w-full scroll-smooth overflow-x-auto no-scrollbar ">
          <div className="flex gap-x-2 py-[20px] px-[10px]">
            {[...Array(4)].map((_, index) => (
              <CardItem key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative">
        <TitleBar
          title={'VIỆC LÀM MỚI'}
          subTitle={'Xem tất cả'}
          onClick={() => {}}
          shadow={true}
        />

        <div className="w-full scroll-smooth overflow-x-auto no-scrollbar ">
          <div className="flex gap-x-2 py-[20px] px-[10px]">
            {[...Array(4)].map((_, index) => (
              <CardItem key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
