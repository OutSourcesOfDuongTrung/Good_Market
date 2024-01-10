'use client';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';
import Services from '@/components/Services';
import Header from '@/components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
