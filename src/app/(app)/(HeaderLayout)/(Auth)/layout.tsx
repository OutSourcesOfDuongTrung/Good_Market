'use client';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { IJobPostCreate } from '@/types/Job';
import { Button, Result } from 'antd';
import { getCookie } from 'cookies-next';
import React, { createContext, useEffect, useState } from 'react';
export const CurrentFormContext = createContext<{
  currentForm?: string;
  setCurrentForm?: React.Dispatch<React.SetStateAction<string>>;
  currentLabel?: string;
  setCurrentLabel?: React.Dispatch<React.SetStateAction<string>>;
  currentCategoryId?: string | number;
  setCurrentCategoryId?: React.Dispatch<React.SetStateAction<string | number>>;
}>({});

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loadingPage, setLoadingPage] = useState(true);
  const [currentForm, setCurrentForm] = useState('');
  const [currentLabel, setCurrentLabel] = useState('');
  const [currentCategoryId, setCurrentCategoryId] = useState<string | number>(
    ''
  );

  // const logged = useAppSelector((state) => state.user.logged);
  const token = getCookie('access');
  useEffect(() => {
    setLoadingPage(false);
  }, []);
  return (
    !loadingPage && (
      <>
        {token ? (
          <CurrentFormContext.Provider
            value={{
              currentForm,
              setCurrentForm,
              currentLabel,
              setCurrentLabel,
              currentCategoryId,
              setCurrentCategoryId,
            }}
          >
            {children}
          </CurrentFormContext.Provider>
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
