'use client';
/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import React from 'react';
import NavBar from '../NavBar';
import MiddleBar from '../MiddleBar';
import { useStore } from '@/zustand/store';
import { IMiddleTexts } from '@/types';
import BurgerMenu from '../BurgerMenu';

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
const SideBar: React.FC<SideBarProps> = ({ middleTexts }) => {
  const isSideActive = useStore((state) => state.isSideActive);
  const toggleSide = useStore((state) => state.toggleSide);
  return (
    <aside
      className={`absolute top-0 z-30 w-full h-full flex flex-row flex-nowrap border-r border-dark-white ${isSideActive ? 'translate-x-0' : '-translate-x-full'} md:w-2/4 lg:w-full lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-6 transition-transform lg:static lg:translate-x-0 duration-500 ease-in-out`}
    >
      <BurgerMenu
        styles={`size-11 flex items-center justify-center absolute z-40 right-3 top-3 text-xl text-my-white transition-all duration-75 ease-in-out ${isSideActive ? '' : 'hidden'} md:size-14 md:text-3xl lg:hidden active:text-my-green`}
      />
      <NavBar toggleSide={toggleSide} />
      <MiddleBar texts={middleTexts} />
    </aside>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default SideBar;
