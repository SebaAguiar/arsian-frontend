/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import React from 'react';
import { LuMonitor } from 'react-icons/lu';
/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/
interface IWhatIDoProps {
  data: {
    title: string;
    description: string;
    component: string;
  }[];
}

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/
const WhatIDo: React.FC<IWhatIDoProps> = ({ data }) => {
  return data.map((render, index) => (
    <div
      key={index}
      className='m-2 min-h-52 max-w-[300px] rounded-xl border border-my-side-gray p-4 md:max-w-[350px] lg:m-4 lg:mx-5 lg:max-w-[400px]'
    >
      <div className='mb-2 flex content-center text-4xl'>
        <LuMonitor />
        <h3 className='ml-3 self-center text-xl font-semibold md:place-self-center'>
          {render.title}
        </h3>
      </div>
      <p className='text-sm'>{render.description}</p>
    </div>
  ));
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default WhatIDo;
