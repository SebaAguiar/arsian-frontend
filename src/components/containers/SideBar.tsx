'use client';
/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import React from 'react';
import NavBar from '../NavBar';
import MiddleBar from '../MiddleBar';
import { useStore } from '@/zustand/store';
import { usePathname } from 'next/navigation';
import { IMiddleTexts } from '@/types';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/
type SideBarProps = {
  locale: string;
  middleTexts: IMiddleTexts;
};
/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/
const SideBar: React.FC<SideBarProps> = ({ locale, middleTexts }) => {
  const path = usePathname();
  const isSideActive = useStore((state) => state.isSideActive);
  const toggleSide = useStore((state) => state.toggleSide);
  console.log(isSideActive);
  return (
    <aside
      className={`fixed top-0 z-40 w-full h-full flex flex-row flex-nowrap border-r border-dark-white md:w-2/4 lg:w-full lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-6 transition-transform lg:static lg:translate-x-0 duration-500 ease-in-out`}
    >
      <NavBar path={path} toggleSide={toggleSide} locale={locale} />
      <MiddleBar texts={middleTexts} />
    </aside>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default SideBar;
