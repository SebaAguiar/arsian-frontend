/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import AboutContainer from '@/components/containers/AboutContainer';
import React from 'react';
import { useTranslations } from 'next-intl';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/
const AboutPage = () => {
  const t = useTranslations('Portfolio');
  return (
    <>
      <AboutContainer t={t} />
    </>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/
export default AboutPage;
