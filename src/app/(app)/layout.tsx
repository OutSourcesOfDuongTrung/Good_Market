'use client';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { store } from '../store';
import { SWRConfig } from 'swr';
import Services from '@/components/Services';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <Provider store={store}>
          <Services>{children}</Services>
        </Provider>
      </SWRConfig>
    </ConfigProvider>
  );
}
