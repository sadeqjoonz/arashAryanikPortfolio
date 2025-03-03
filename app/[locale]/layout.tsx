// import type { ReactElement } from 'react';
import './globals.css';
import type { ReactNode } from 'react';
import { Provider } from './provider';
import { Vazirmatn } from 'next/font/google';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const vazir = Vazirmatn({ subsets: ["latin"], weight: ["400", "700"] });


export default async function RootLayout({ 
    params,
    children,
  }: {
    params: Promise<{ locale: string }>;
    children: ReactNode;
  }) {
    
  const { locale } = await params;


  return (
    <html lang="en" dir={locale === 'en' ? 'ltr' : 'rtl'} >
      <body className={locale === 'fa' ?  vazir.className : ""}>
        <Provider locale={locale}>{children}</Provider>
      </body>
    </html>
  );
}