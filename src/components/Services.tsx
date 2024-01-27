import instanceAxios from '@/api/instanceAxios';
import { useAppDispatch } from '@/app/hooks';
import { login } from '@/app/reducers/userReducer';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Services({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const route = useRouter();
  const [loadingPage, setLoadingPage] = useState(true);
  useEffect(() => {
    const fetchUserInfomation = async () => {
      await instanceAxios
        .get('api/user-information/')
        .then((res) => {
          dispatch(login(res.data.data));
          // setCookie('access', res.data.data.access);
          // setCookie('refresh', res.data.data.refresh);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchUserInfomation();
    setLoadingPage(false);
  }, [dispatch, route]);

  return !loadingPage && children;
}
