import getImageLink from '@/services/getImageLink';
import { IProduct } from '@/types/Job';
import { Avatar, Badge, Image, Space } from 'antd';
import Ribbon from 'antd/es/badge/Ribbon';
import moment from 'moment';
import Link from 'next/link';
import React from 'react';

interface Props {
  ribbon?: string;
  imageHeight?: number;
  imageWidth?: number;
  data?: IProduct;
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
        src={getImageLink(props.data || {})}
      />
      <div
        className={`w-[200px] ${
          props.imageWidth && `!w-[${props.imageWidth}px]`
        }`}
      >
        <p className="line-clamp-2 h-[50px] font-medium text-[15px]">
          {props.data?.Title || ''}
        </p>
        <p className="truncate text-[#808080] h-[30px] py-[5px] text-[14px]">
          Ngày làm: {moment(props.data?.Creation_time).format('DD/MM/YYYY')}
        </p>
        <p className="text-[#d0021b] h-[30px] my-[5px] !text[15px] !font-sans font-bold">
          ${props.data?.Price || 0}/ngày
        </p>
        <Space className="w-full h-[40px]">
          <Avatar src="" />
          <p className="w-[150px] block text-[12px] text-[#c7c7c7] truncate">
            {moment(props.data?.Creation_time).fromNow()} •{' '}
            {props.data?.User?.last_name}
          </p>
        </Space>
      </div>
    </div>
  );

  return (
    <Link href={`/product/${props.data?.Url}/${props.data?.id}`}>
      <Ribbon
        className="invisible"
        color="red"
        placement="start"
        text="Hippies"
      >
        {children}
      </Ribbon>
    </Link>
  );
}
