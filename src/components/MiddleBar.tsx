/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import Image from 'next/image';
import React from 'react';
// import SocialMedia from './SocialMedia';
// import DownloadCv from './DownloadCv';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

const MiddleBar = () => {
  return (
    <div className='w-10/12 h-full bg-dark-side-gray flex flex-col items-center justify-around border-l border-l-dark-white'>
      <div className='size-40 md:size-44 flex justify-center items-center  max-h-52 max-w-52'>
        <Image
          src='/yo-pic.png'
          className='border h-48 w-48 border-dark-white rounded-full'
          alt='Seba Image'
        />
      </div>
      <div className='flex flex-col justify-center items-center flex-wrap max-h-40'>
        <h1 className='font-bold text-3xl text-center text-dark-white'>
          Sebastian Aguiar
        </h1>
        <h2 className='font-semibold text-lg text-center text-dark-gray'>
          Backend Developer
        </h2>
        <div className='w-10/12 md:w-full'>{/* <SocialMedia /> */}</div>
      </div>
      <div className='flex w-full justify-center items-center'>
        {/* <DownloadCv /> */}
      </div>
      <div className='w-full h-2'></div>
    </div>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default MiddleBar;
