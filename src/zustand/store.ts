/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import { ISideSlice } from '@/types';
import { create } from 'zustand';
import { SideSlice } from './slices/sideSlice';
/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/
/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/
export const useSavedState = create<ISideSlice>()((...a) => ({
  ...SideSlice(...a),
}));
