'use client';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Button, Result } from 'antd';
import { getCookie } from 'cookies-next';
import React, { createContext, useEffect, useState } from 'react';
export const PreviewDataContext = createContext<{
  previewData?: IJobPostCreate;
  setPreviewData?: React.Dispatch<React.SetStateAction<IJobPostCreate>>;
}>({});
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loadingPage, setLoadingPage] = useState(true);
  const [previewData, setPreviewData] = useState<IJobPostCreate>({});

  // const logged = useAppSelector((state) => state.user.logged);
  const token = getCookie('access');
  useEffect(() => {
    setLoadingPage(false);
  }, []);
  return (
    !loadingPage && (
      <>
        {token ? (
          <PreviewDataContext.Provider value={{ previewData, setPreviewData }}>
            {children}
          </PreviewDataContext.Provider>
        ) : (
          <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button type="primary">Back Home</Button>}
          />
        )}
      </>
    )
  );
}
