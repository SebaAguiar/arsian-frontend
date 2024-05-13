/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import {
  PUBLIC_EMAIL_JS_PUBLIC_KEY,
  PUBLIC_EMAIL_JS_SERVICE_ID,
  PUBLIC_EMAIL_JS_TEMPLATE_ID,
} from '@/constants';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { swalMessages } from '@/content/swal';
import { TLang } from '@/types';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/
interface IContactLabels {
  email: string;
  subject: string;
  name: string;
  message: string;
  submit: string;
}
interface IContactFormProps {
  labels: IContactLabels;
  lang: TLang;
}

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/
const MySwal = withReactContent(Swal);
/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/
const ContactForm: React.FC<IContactFormProps> = ({ lang, labels }) => {
  const form = useRef<HTMLFormElement | null>(null);
  const [disabled, setDisabled] = useState(false);
  const sendForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setDisabled(true);
    try {
      if (form.current !== null) {
        await emailjs.sendForm(
          PUBLIC_EMAIL_JS_SERVICE_ID,
          PUBLIC_EMAIL_JS_TEMPLATE_ID,
          form.current,
          {
            publicKey: PUBLIC_EMAIL_JS_PUBLIC_KEY,
          },
        );
        form.current.reset();
        setDisabled(false);
        return Swal.fire({
          title: swalMessages[lang].success.title,
          text: swalMessages[lang].error.text,
          icon: 'success',
          backdrop: true,
          heightAuto: false,
          willOpen: () => {
            document.body.style.overflow = 'hidden';
          },
          willClose: () => {
            document.body.style.overflow = '';
          },
        }).then((result) => {
          if (result.isConfirmed) {
            setDisabled(false);
          }
        });
      }
    } catch (error) {
      console.log('ERROR at ContactForm.tsx: ', error);
      setDisabled(false);
      Swal.fire({
        title: swalMessages[lang].error.title,
        text: swalMessages[lang].error.text,
        icon: 'error',
      });
    }
  };
  return (
    <>
      <form
        onSubmit={sendForm}
        ref={form}
        className='mx-auto text-my-white w-full min-h-80 h-full '
      >
        <div className='relative z-0 w-full mb-5 group'>
          <input
            type='text'
            name='user_name'
            id='user_name'
            className='block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-my-green focus:outline-none focus:ring-0 focus:border-my-green peer'
            placeholder=' '
            required
          />
          <label
            htmlFor='user_name'
            className='peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-my-green peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            {labels.name}
          </label>
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='email'
              name='user_email'
              id='user_email'
              className='block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-my-green focus:outline-none focus:ring-0 focus:border-my-green peer'
              placeholder=' '
              required
            />
            <label
              htmlFor='user_email'
              className='peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-my-green peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              {labels.email}
            </label>
          </div>
          <div className='relative z-0 w-full mb-5 group'>
            <input
              type='text'
              name='user_subject'
              id='user_subject'
              className='block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-my-green focus:outline-none focus:ring-0 focus:border-my-green peer'
              placeholder=' '
              required
            />
            <label
              htmlFor='user_subject'
              className='peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-my-green peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              {labels.subject}
            </label>
          </div>
        </div>
        <div className='flex max-h-[200px]'>
          <div className='relative z-0 w-full mb-5 group'>
            <textarea
              name='user_message'
              id='user_message'
              className='block py-2.5 px-0 w-full max-h-[190px] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-my-green focus:outline-none focus:ring-0 focus:border-my-green peer'
              placeholder=' '
              required
            />
            <label
              htmlFor='user_message'
              className='peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-my-green peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              {labels.message}
            </label>
          </div>
        </div>
        <button
          className='border-2 border-my-white hover:border-my-green hover:text-lg text-my-white w-40 h-12 rounded-full font-semibold duration-500 relative overflow-hidden'
          type='submit'
          disabled={disabled}
        >
          {labels.submit}
        </button>
      </form>
    </>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/
export default ContactForm;
