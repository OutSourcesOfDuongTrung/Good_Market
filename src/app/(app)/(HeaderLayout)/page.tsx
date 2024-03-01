'use client';
import instanceAxios from '@/api/instanceAxios';
import CardItem from '@/components/common/CardItem';
import InputCustom from '@/components/common/InputCustom';
import InputTest from '@/components/common/InputTest';
import categoryList from '@/services/categoryList';
import { IProduct } from '@/types/Job';
import {
  BellFilled,
  CaretLeftOutlined,
  CaretRightOutlined,
  HeartFilled,
} from '@ant-design/icons';
import { Badge, Button, Carousel, Flex, Form, Image, Input } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';

export default function HomePage() {
  const ref = useRef<HTMLDivElement>(null);
  const [productList, setProducList] = useState<IProduct[]>([]);
  const router = useRouter();
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

  useEffect(() => {
    const fetchProducHome = async () => {
      await instanceAxios
        .get(`list_home/`)
        .then((res) => {
          setProducList(res.data.data);
        })
        .catch((err) => console.log(err));
    };
    fetchProducHome();
  }, []);

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
        <Flex justify="space-between" className="mt-[10px]">
          <Flex
            vertical
            align="center"
            gap={10}
            onClick={() => router.push('/save-post')}
            className="w-[140px] rounded-md font-medium p-[10px] hover:bg-[#e1e1e1] "
          >
            <BellFilled className="!text-white text-[20px] p-[15px] bg-red-500 rounded-full" />
            <p className="text-center text-[14px]">Liên hệ quảng cáo</p>
          </Flex>
          <Flex
            vertical
            align="center"
            gap={10}
            onClick={() => router.push('/save-post')}
            className="w-[140px] rounded-md font-medium p-[10px] hover:bg-[#e1e1e1] "
          >
            <HeartFilled className="!text-white text-[20px] p-[15px] bg-red-500 rounded-full" />
            <p className="text-center text-[14px]">Tin đã lưu</p>
          </Flex>
          <Flex
            vertical
            align="center"
            gap={10}
            onClick={() => router.push('/save-post')}
            className="w-[140px] rounded-md font-medium p-[10px] hover:bg-[#e1e1e1] "
          >
            <BellFilled className="!text-white text-[20px] p-[15px] bg-red-500 rounded-full" />
            <p className="text-center text-[14px]">Danh mục theo dõi</p>
          </Flex>
          <Flex
            vertical
            align="center"
            gap={10}
            onClick={() => router.push('/save-post')}
            className="w-[140px] rounded-md font-medium p-[10px] hover:bg-[#e1e1e1] "
          >
            <BellFilled className="!text-white text-[20px] p-[15px] bg-red-500 rounded-full" />
            <p className="text-center text-[14px]">
              Tạo cửa hàng / Chuyên trang
            </p>
          </Flex>
          <Flex
            vertical
            align="center"
            gap={10}
            onClick={() => router.push('/save-post')}
            className="w-[140px] rounded-md font-medium p-[10px] hover:bg-[#e1e1e1] "
          >
            <BellFilled className="!text-white text-[20px] p-[15px] bg-red-500 rounded-full" />
            <p className="text-center text-[14px]">Thêm vào chợ tốt Map</p>
          </Flex>
          <Flex
            vertical
            align="center"
            gap={10}
            onClick={() => router.push('/save-post')}
            className="w-[140px] rounded-md font-medium p-[10px] hover:bg-[#e1e1e1] "
          >
            <BellFilled className="!text-white text-[20px] p-[15px] bg-red-500 rounded-full" />
            <p className="text-center text-[14px]">Đăng tin cho tặng</p>
          </Flex>
        </Flex>
      </div>

      <div className="p-[10px] relative rounded-lg bg-white">
        <p className="uppercase font-semibold py-[20px] p-[10px] text-[20px]">
          Khám phá danh mục
        </p>
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
          className="w-full scroll-smooth transition relative overflow-x-auto no-scrollbar px-[24px]"
        >
          <div className="grid h-[300px] grid-flow-col-dense grid-rows-2 flex-wrap gap-x-24 justify-start">
            {categoryList.map((item, index) => (
              <Link key={index} href={item.url || ''}>
                <div className="flex w-[100px] flex-col items-start">
                  <Image
                    preview={false}
                    width={100}
                    height={100}
                    className="rounded-xl object-cover"
                    src={item.img}
                    alt=""
                  />
                  <p className="text-wrap w-full text-center text-[14px] font-medium">
                    {item.label}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white font-semibold uppercase text-[20px] px-[10px] py-[5px] shadow-[0_2px_8px_rgba(0,0,0,.15)]">
        Tin đăng mới
      </div>
      <div className="flex flex-wrap justify-start gap-[9.5px]">
        {productList.map((item, index) => (
          <CardItem
            data={item}
            ribbon={index % 2 == 0 ? 'Việc 24h' : ''}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
