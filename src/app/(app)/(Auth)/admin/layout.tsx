'use client';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Button, Result } from 'antd';
import React, { useEffect, useState } from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loadingPage, setLoadingPage] = useState(true);
  const logged = useAppSelector((state) => state.user.logged);
  useEffect(() => {
    setLoadingPage(false);
  }, []);
  return (
    !loadingPage && (
      <>
        {logged ? (
          children
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
