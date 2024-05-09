/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import React from 'react';
import Header1 from '../Header1';
import MessagesContainer from './MessagesContainer';
import ContactInformation from '../ContactInformation';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/
interface IContactContainerProps {
  t: (lang: string) => string;
}
/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/
const ContactContainer: React.FC<IContactContainerProps> = ({ t }) => {
  return (
    <>
      <main className='h-full w-full overflow-hidden'>
        <Header1>{t('contact.title')}</Header1>
        <div className='w-full flex flex-col items-center justify-center md:flex-row lg:m-2 lg:px-2'>
          <ContactInformation />
          <MessagesContainer t={t} />
        </div>
      </main>
    </>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/
export default ContactContainer;
