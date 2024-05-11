/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import Link from 'next/link';
import React from 'react';
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
} from 'react-icons/fa';
import styles from '../styles/socialMedia.module.css';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/
const socialOptions = [
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/david-sebastian-aguiar/',
    icon: <FaLinkedinIn />,
  },
  {
    name: 'github',
    href: 'https://github.com/SebaAguiar',
    icon: <FaGithub />,
  },
  {
    name: 'telegram',
    href: 'https://t.me/SebaAguiar',
    icon: <FaTelegramPlane />,
  },
  {
    name: 'whatsapp',
    href: `https://api.whatsapp.com/send?phone=+543442536874&text=Hola,%20me%20gustaría%20contactarte`,
    icon: <FaWhatsapp />,
  },
  {
    name: 'instagram',
    href: 'https://www.instagram.com/sebaaguiar._/',
    icon: <FaInstagram />,
  },
];

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/
const SocialMedia = () => {
  return (
    <div className='flex flex-row justify-around mt-4'>
      {socialOptions.map((opt, index) => (
        <Link
          className='text-2xl md:text-3xl text-my-white hover:text-my-green duration-500'
          key={index}
          href={opt.href}
        >
          {opt.icon}
        </Link>
      ))}
    </div>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default SocialMedia;
