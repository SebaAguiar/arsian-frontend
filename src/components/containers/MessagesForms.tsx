'use client';
/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import React, { useState } from 'react';
import ContactForm from '../ContactForm';
import { contactData } from '@/content/contactForm';
import { TLang } from '@/types';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/
interface IMessagesFormsProps {
  lang: TLang;
}

type TMessageforms = 'Email' | 'Calendar' | 'Whatsapp' | 'Telegram';
/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/
const MessagesForms: React.FC<IMessagesFormsProps> = ({ lang }) => {
  const [platform, setPlatform] = useState<TMessageforms>('Email');
  const options = ['Email', 'Calendar', 'Whatsapp', 'Telegram'];
  return (
    <>
      <select
        className='row-start-2 row-end-2 md:row-start-1 md:row-end-1 col-start-1 col-end-2 select select-success w-36 max-w-xs text-my-white border-my-green m-3'
        disabled
      >
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      <div className='row-start-3 md:row-start-2 row-end-7 col-start-1 col-end-7 w-full h-full border border-my-side-gray p-3'>
        <div className='w-full h-full flex justify-center items-center p-3'>
          <ContactForm lang={lang} labels={contactData[lang]} />
        </div>
      </div>
    </>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/
export default MessagesForms;
