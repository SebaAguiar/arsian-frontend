/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import SideBar from '@/components/containers/SideBar';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/
type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/
const inter = Inter({ subsets: ['latin'] });

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/
const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  params: { locale },
}) => {
  return (
    <html lang={locale}>
      <body className='h-screen w-screen'>
        <SideBar locale={locale} />
        {children}
      </body>
    </html>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/
export const metadata: Metadata = {
  title: 'Arsian',
  description: 'Generated by create next app',
};

export default RootLayout;
