'use client';
import instanceAxios from '@/api/instanceAxios';
import CardItem from '@/components/common/CardItem';
import { IProduct } from '@/types/Job';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Badge, Carousel, Image } from 'antd';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

export default function HomePage() {
  const ref = useRef<HTMLDivElement>(null);
  const [productList, setProducList] = useState<IProduct[]>([]);

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
          className="w-full scroll-smooth transition relative overflow-x-auto no-scrollbar"
        >
          <div className="w-[130%] flex flex-col h-[300px] flex-wrap gap-x-2 justify-between">
            {[...Array(15)].map((item, index) => (
              <Link key={index} href={'/work'}>
                <div className="flex w-[100px] flex-col items-start">
                  <Image
                    preview={false}
                    width={100}
                    height={100}
                    className="rounded-xl object-cover"
                    src=""
                    alt=""
                  />
                  <p className="text-wrap text-center text-[12px] font-medium">
                    Nội thất cây cảnh
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
      <div className="flex flex-wrap justify-between gap-2">
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
