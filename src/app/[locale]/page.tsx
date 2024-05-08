/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import React from 'react';
import { useTranslations } from 'next-intl';
import LandingContainer from '@/components/containers/LandingContainer';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/
const LandingPage = () => {
  const t = useTranslations('Portfolio');
  return (
    <>
      <LandingContainer t={t} />
    </>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default LandingPage;
