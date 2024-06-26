'use client';
/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import React from 'react';
import { useLocale } from 'next-intl';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/
interface IDownloadCvProps {
  text: string;
}
/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/
const DownloadCv: React.FC<IDownloadCvProps> = ({ text }) => {
  const locale = useLocale();
  return (
    <>
      <button className='border-2 border-my-white hover:border-my-green hover:text-lg text-my-white w-7/12 h-12 rounded-full font-semibold duration-500 relative overflow-hidden'>
        <a
          className={`flex items-center justify-center transition-all duration-500`}
          href={`/${locale.toUpperCase()}-David-Sebastian-Aguiar--Backend-Developer.pdf`}
          target='_blank'
          rel='noopener noreferrer'
          // download='Sebastian-Aguiar-Backend-Developer.pdf'
        >
          {text}
        </a>
      </button>
    </>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default DownloadCv;
