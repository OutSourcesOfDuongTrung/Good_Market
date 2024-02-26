'use client';
import ActiveCreateMarketPage from '@/components/create-market/ActiveCreateMarketPage';
import ChooseCategoryPage from '@/components/create-market/ChooseCategoryPage';
import PaidCreateMarketPage from '@/components/create-market/PaidCreateMarketPage';
import SetCreateMarketPage from '@/components/create-market/SetCreateMarketPage';
import { Flex, Space } from 'antd';
import React, { useState } from 'react';

export default function CreateMarketPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const lableStepList = [
    {
      step: 1,
      lablel: 'Chọn chuyên mục',
      children: <ChooseCategoryPage />,
    },
    {
      step: 2,
      lablel: 'Thiết lập trang',
      children: <SetCreateMarketPage />,
    },
    {
      step: 3,
      lablel: 'Thanh toán',
      children: <PaidCreateMarketPage />,
    },
    {
      step: 4,
      lablel: 'Kích hoạt',
      children: <ActiveCreateMarketPage />,
    },
  ];
  return (
    <div className="w-full">
      <Flex className="mt-[20px]" gap={20} justify="center">
        {lableStepList.map((item, index) => (
          <Space className="flex cursor-pointer" key={index}>
            <div
              className={`w-[30px] h-[30px] flex justify-center items-center ${
                currentStep === index ? `bg-[#fe9900]` : `bg-[#cfcfcf]`
              } rounded-full`}
            >
              <b className={`text-white`}>{item.step}</b>
            </div>
            <p
              className={`font-semibold ${
                currentStep === index ? `text-black` : `text-[#cfcfcf]`
              }`}
            >
              {item.lablel}
            </p>
          </Space>
        ))}
      </Flex>
      <div className="w-4/5 m-auto">{lableStepList[currentStep].children}</div>
    </div>
  );
}
