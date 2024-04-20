/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import React, { useState } from 'react';
import NavBar from '../NavBar';
import MiddleBar from '../MiddleBar';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/
type SideBarProps = {
  locale: string;
};
/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/
const SideBar: React.FC<SideBarProps> = ({ locale }) => {
  const t = useTranslations('SideBar');
  return (
    <div className='h-full w-full lg:w-1/3 flex flex-row'>
      <NavBar locale={locale} />
      <MiddleBar t={t} />
    </div>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default SideBar;
