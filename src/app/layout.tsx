import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SimpRaidenEi',
  description: 'Generated SimpRaidenEi',
  icons: {
    icon: 'https://i.pinimg.com/200x150/03/fe/31/03fe31dfb42991dae86f9a326b6eaaec.jpg',
    // shortcut: '/shortcut-icon.png',
    // apple: '/apple-icon.png',
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          {/* <Header /> */}
          <ConfigProvider
            theme={{
              components: {
                // Switch: {
                //   colorPrimary: '#5d5386',
                // },
                Input: {
                  paddingBlock: 10,
                },
              },
              token: {
                colorPrimary: '#5d5386',
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
