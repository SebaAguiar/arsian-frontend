/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import React from 'react';
import { TLang } from '@/types';
import MessagesForms from './MessagesForms';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/
interface IMessagesContainerProps {
  // eslint-disable-next-line no-unused-vars
  t: (lang: string) => string;
}
/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/
const MessagesContainer: React.FC<IMessagesContainerProps> = ({ t }) => {
  const lang: TLang = t('lang') as TLang;
  return (
    <>
      <div className='w-full grid grid-cols-6 grid-rows-7 md:grid-rows-6 p-2 justify-center items-center mt-4 mb-2 md:w-2/3 lg:w-2/3 lg:px-5'>
        <h2 className='col-start-2 md:col-start-3 col-end-6 row-start-1 row-end-1 text-2xl font-semibold text-my-green'>
          {t('contact.subtitle')}
        </h2>
        <MessagesForms lang={lang} />
      </div>
    </>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/
export default MessagesContainer;
