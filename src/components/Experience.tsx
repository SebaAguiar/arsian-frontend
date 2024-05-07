/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/

import { capitalizeFirstLetter, dateFormater } from '@/utils/functions';
import { IExperience } from '@/types';
import React from 'react';
import styles from '../styles/experience.module.css';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/
type ExperienceProps = {
  experience: IExperience[];
  title: string;
  lang: string;
};

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

const options = {
  year: 'numeric',
  month: 'short',
};

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

const Experience: React.FC<ExperienceProps> = ({ experience, title, lang }) => {
  return (
    <section className='mr-2'>
      <h2 className='font-semibold text-2xl text-green mt-1 ml-8'>{title}</h2>
      <ol className='relative border-s border-green ml-3 mt-6 lg:ml-6'>
        {experience?.map((exp: IExperience, index) => (
          <li key={index} className='mb-10 ms-4 ml-3 lg:ml-6'>
            <div
              id={styles.timelineDot}
              className='absolute w-3 h-3 bg-green rounded-full mt-1.5 -start-1.5 border border-green'
            ></div>
            <p className='text-white text-xs'>
              {capitalizeFirstLetter(
                dateFormater(exp?.from ?? '', lang, options),
              )}{' '}
              -{' '}
              {capitalizeFirstLetter(
                dateFormater(exp?.to ?? '', lang, options),
              )}
            </p>
            <h3 className='font-bold text-xl text-white'>{exp.title}</h3>
            <h4 className='font-light text-xs text-white w-max'>
              <a href={exp.companyUrl}>{exp.company}</a>
            </h4>
            <p className='text-white mt-2'>{exp.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default Experience;
