'use client';
import { useStore } from '@/zustand/store';
/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import React from 'react';
import { LuAlignJustify, LuArrowLeft } from 'react-icons/lu';
/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/
interface IBurgerMenuProps {
  styles?: string;
}
/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/
const BurgerMenu: React.FC<IBurgerMenuProps> = ({ styles }) => {
  const isSideActive = useStore((state) => state.isSideActive);
  const toggleSide = useStore((state) => state.toggleSide);
  return (
    <>
      <div
        className={
          styles
            ? styles
            : `size-11 flex items-center justify-center absolute z-40 right-3 top-3 text-xl text-my-white transition-all duration-75 ease-in-out ${isSideActive ? 'hidden' : ''} md:size-14 md:text-3xl lg:hidden active:text-my-green`
        }
      >
        <button onClick={() => toggleSide()}>
          {isSideActive ? <LuArrowLeft /> : <LuAlignJustify />}
        </button>
      </div>
    </>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/
export default BurgerMenu;
