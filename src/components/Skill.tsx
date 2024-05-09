'use client';
/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import { ISkill } from '@/types';
import React, { useState } from 'react';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/
interface ISkillProps {
  skills: ISkill[];
  key: number;
}
/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/
const Skill: React.FC<ISkillProps> = ({ skills }) => {
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <>
      {skills.map((s: ISkill, index) => (
        <div
          key={index}
          className='group m-4 flex h-max w-max flex-col items-center justify-center'
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(-1)}
        >
          <i
            className={`${hoverIndex === index ? s.hover : s.image} text-7xl transition-all duration-500 ease-in-out`}
          ></i>
        </div>
      ))}
    </>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/
export default Skill;
