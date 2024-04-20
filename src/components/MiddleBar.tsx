/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import Image from 'next/image';
import React from 'react';
import SocialMedia from './SocialMedia';
import DownloadCv from './DownloadCv';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/
interface IMiddleBarProps {
  t: (lang: string) => string;
}
/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

const MiddleBar: React.FC<IMiddleBarProps> = ({ t }) => {
  return (
    <div className='w-10/12 h-full bg-side-gray flex flex-col items-center justify-around border-l border-l-white'>
      <div className='size-40 md:size-44 flex justify-center items-center  max-h-52 max-w-52'>
        <Image
          width={100}
          height={100}
          src='/yo-pic.png'
          className='border size-40 md:size-44 border-white rounded-full'
          alt='Seba Image'
        />
      </div>
      <div className='flex flex-col justify-center items-center flex-wrap max-h-40'>
        <h1 className='font-bold text-3xl text-center text-white'>
          Sebastian Aguiar
        </h1>
        <h2 className='font-semibold text-lg text-center text-gray'>
          Backend Developer
        </h2>
        <div className='w-10/12 md:w-full'>
          <SocialMedia />
        </div>
      </div>
      <div className='flex w-full justify-center items-center'>
        <DownloadCv text={t('downloadButton')} />
      </div>
      <div className='w-full h-2'></div>
    </div>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default MiddleBar;
