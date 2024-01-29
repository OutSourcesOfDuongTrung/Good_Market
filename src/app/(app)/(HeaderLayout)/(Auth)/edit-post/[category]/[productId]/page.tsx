'use client';
import instanceAxios from '@/api/instanceAxios';
import { CurrentFormContext } from '@/app/(app)/(HeaderLayout)/(Auth)/layout';
import { useAppSelector } from '@/app/hooks';
import CreatePostAirConditionForm from '@/components/common/Form/CreatePostAirConditionForm';
import CreatePostLaptopForm from '@/components/common/Form/CreatePostLaptopForm';
import getFormByKey from '@/services/getFormByKey';
import getKeybyUrl from '@/services/getKeybyUrl';
import getPrefixUrl from '@/services/getPrefixUrl';
import { IElectroDevice, IProduct, IRefrigeratorPost } from '@/types/Job';
import React, { useContext, useEffect, useState } from 'react';

export default function EditProductPage({
  params,
}: {
  params: { category: string | number; productId: string | number };
}) {
  const [loadingPage, setLoadingPage] = useState(true);
  const currentForm = useContext(CurrentFormContext);
  const currentUser = useAppSelector((state) => state.user.data);
  const [productData, setProductData] = useState<IProduct>();

  useEffect(() => {
    const fetchProductData = async () => {
      await instanceAxios
        .get(
          `/${getPrefixUrl(params.category as string)}/items/${
            params.productId
          }/`
        )
        .then((res) => {
          setProductData(res.data.data);
          currentForm?.setCurrentLabel?.(res.data.data?.Category?.Name || '');
          currentForm?.setCurrentCategoryId?.(
            res.data.data?.Category?.id || ''
          );
          currentForm?.setCurrentLabelAdress?.(
            res.data.data?.Address?.Name || res.data.data?.Location?.Name || ''
          );
        })
        .catch((err) => {})
        .finally(() => setLoadingPage(false));
    };
    fetchProductData();
  }, [currentForm, params.category, params.productId]);
  return (
    !loadingPage && (
      <div className="w-2/3 m-auto my-[20px] p-[20px] rounded-lg bg-white">
        {getFormByKey(
          productData?.Category?.keyForm ||
            getKeybyUrl(productData?.Url || '') ||
            '',
          productData
        )}
        {/* <CreatePostLaptopForm data={productData as unknown as IElectroDevice} /> */}
      </div>
    )
  );
}
