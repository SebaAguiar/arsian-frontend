/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import React from 'react';
import Header2 from '../Header2';
import { dateFormater } from '@/utils/functions';
import { aboutMeData } from '@/content/aboutMe';
import WhatIDo from '../WhatIDo';
import AboutInformation from '../AboutInformation';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/
interface IAboutContainerProps {
  t: (lang: string) => string;
}

type TLang = 'es' | 'en';
/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/
const AboutContainer: React.FC<IAboutContainerProps> = ({ t }) => {
  const lang: TLang = t('lang') as TLang;
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const dataToRender = [
    {
      label: t('about.labels.birthday'),
      content: dateFormater('August 15, 1997', lang, options),
    },
    { label: t('about.labels.location'), content: aboutMeData[lang].residence },
    { label: t('about.labels.email'), content: aboutMeData[lang].email },
    { label: t('about.labels.phone'), content: aboutMeData[lang].phone },
  ];
  return (
    <>
      <main className='h-full w-full'>
        <h1 className='ml-3 mt-3 text-4xl font-bold'>{t('about.title')}</h1>
        <div className='flex w-full flex-col justify-center md:flex-row'>
          <div className='p-2 md:m-4 md:ml-8 flex w-full items-center justify-center md:w-8/12'>
            <p>{t('about.data')}</p>
          </div>
          <div className='m-4 self-center text-nowrap md:m-6 lg:w-4/12'>
            <AboutInformation data={dataToRender} />
          </div>
        </div>
        <div>
          <Header2>{t('about.what-i-do.title')}</Header2>
          <div className='flex w-full flex-row flex-wrap items-center justify-center md:justify-around'>
            <WhatIDo data={aboutMeData[lang].whatIDo} />
          </div>
        </div>
      </main>
    </>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/
export default AboutContainer;
