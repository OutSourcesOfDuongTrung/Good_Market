import labelManager from '@/services/labelManager';
import React, { useState } from 'react';

export default function SEOoptimization() {
  const [currentTab, setCurrentTab] = useState(0);
  const tabList = [
    {
      tabName: 'Trang chủ',
      children: <p>asdda</p>,
    },
    {
      tabName: 'Danh mục tin đăng',
      children: <p>asdda</p>,
    },
    {
      tabName: 'Chi tiết tin đăng',
      children: <p>asdda</p>,
    },
    {
      tabName: 'Blog',
      children: <p>asdda</p>,
    },
    {
      tabName: 'Chi tiết bài viết',
      children: <p>asdda</p>,
    },
    {
      tabName: 'Danh mục cửa hàng',
      children: <p>asdda</p>,
    },
  ];
  return (
    <div className="w-full">
      <div>{labelManager('Tối ưu hóa SEO')}</div>
      <div className="w-full flex">
        <div className="w-1/5 flex flex-col">
          {tabList.map((item, index) => (
            <div key={index}>{item.tabName}</div>
          ))}
        </div>
        <div className="w-4/5"></div>
      </div>
    </div>
  );
}
