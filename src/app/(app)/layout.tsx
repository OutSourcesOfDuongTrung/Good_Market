'use client';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { store } from '../store';
import { SWRConfig } from 'swr';
import Services from '@/components/Services';
import moment from 'moment';
import 'moment/locale/vi';
import { useEffect } from 'react';
import instanceAxios from '@/api/instanceAxios';
import { useAppDispatch } from '../hooks';
import { login } from '../reducers/userReducer';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  moment.locale('vi');
  return (
    <ConfigProvider
      theme={{
        components: {
          // Switch: {
          //   colorPrimary: '#5d5386',
          // },
          Input: {
            paddingBlock: 10,
          },
          Pagination: {
            itemActiveBg: '#f26622',
            // colorLinkActive: '#ffffff',
            // colorBgTextHover: '#ffffff',
          },
        },
        token: {
          colorPrimary: '#5d5386',
          // colorBgTextActive: '#ffffff',
        },
      }}
    >
      <Provider store={store}>
        <SWRConfig
          value={{
            // refreshInterval: 3000,
            //   fetcher: (resource, init) =>
            //     fetch(resource, init).then((res) => res.json()),
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: true,
            revalidateOnMount: false,
          }}
        >
          <Services>{children}</Services>
        </SWRConfig>
      </Provider>
    </ConfigProvider>
  );
}
