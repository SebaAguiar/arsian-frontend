/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import { ICertificate } from '@/types';
import Image from 'next/image';
import React from 'react';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/

type CertProps = {
  certificates: ICertificate[];
};

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

const CertificateCard: React.FC<CertProps> = ({ certificates }) => {
  return (
    <div className='w-full flex flex-row justify-around flex-wrap'>
      {certificates.map((cert: ICertificate, index) => (
        <>
          <div
            key={index}
            className='bg-my-dark card card-side m-3 h-44 w-72 border border-my-side-gray hover:border-my-green shadow-xl lg:h-52 lg:w-96 transition-all duration-500 ease-in-out'
          >
            <a className='flex flex-row' href={cert.image}>
              <figure className='h-full w-1/3'>
                <Image
                  width={100}
                  height={100}
                  className='h-full w-full rounded-s-xl'
                  src={cert.image}
                  alt={cert.name}
                />
              </figure>
              <div className='card-body flex h-full w-2/3 items-center justify-center'>
                <h2 className='card-title text-center text-lg lg:text-xl'>
                  {cert.name}
                </h2>
                <p className='text-sm lg:text-lg'>{cert.company}</p>
              </div>
            </a>
          </div>
        </>
      ))}
    </div>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default CertificateCard;
