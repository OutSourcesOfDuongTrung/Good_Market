import { HeartFilled, ShareAltOutlined } from '@ant-design/icons';
import { Image, Space } from 'antd';
import React from 'react';

export default function PreviewProduct() {
  return (
    <div className="w-full">
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
        <p className="font-semibold">Tuyển NV Nam, Nữ PV Nhà hàng tại quận 5</p>
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
  );
}
