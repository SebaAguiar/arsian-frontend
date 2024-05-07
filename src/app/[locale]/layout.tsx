/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import SideBar from '@/components/containers/SideBar';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('Portfolio');
  const middleTexts = {
    work: t('side.work'),
    download: t('side.downloadButton'),
  };
  return (
    <html lang={locale}>
      <body className='h-screen w-screen grid grid-cols-10 grid-rows-5 bg-my-black'>
        <SideBar middleTexts={middleTexts} locale={locale} />
        <article className='col-start-1 col-end-11 row-start-1 row-end-6 w-full overflow-auto overflow-x-hidden lg:col-start-4 lg:col-end-13'>
          {children}
        </article>
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
