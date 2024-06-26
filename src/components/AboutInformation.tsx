/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import React from 'react';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/
interface IAboutInformationProps {
  data: {
    label: string;
    content: string;
  }[];
}
/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/
const AboutInformation: React.FC<IAboutInformationProps> = ({ data }) => {
  return (
    <>
      <ul>
        {data.map((render) => (
          <>
            <li className='md:mb-3'>
              <strong>{render.label}: </strong>
              {render.content}
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default AboutInformation;
