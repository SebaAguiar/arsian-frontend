'use client';
/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import Link from 'next/link';
import React from 'react';
import { LuHome, LuUser, LuFileText, LuMail } from 'react-icons/lu';
import styles from '../styles/navbar.module.css';

/************************s****************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/
type NavBarProps = {
  locale: string;
  path: string;
  toggleSide: () => void;
};
/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

const NavBar: React.FC<NavBarProps> = ({ locale, toggleSide, path }) => {
  const pages = [
    {
      name: {
        es: 'Inicio',
        en: 'Home',
      },
      path: `/${locale}/`,
      icon: <LuHome />,
    },
    {
      name: {
        es: 'Sobre Mi',
        en: 'About Me',
      },
      path: `/${locale}/about`,
      icon: <LuUser />,
    },
    {
      name: {
        es: 'Currículum',
        en: 'Resume',
      },
      path: `/${locale}/resume`,
      icon: <LuFileText />,
    },
    {
      name: {
        es: 'Contacto',
        en: 'Contact',
      },
      path: `/${locale}/contact`,
      icon: <LuMail />,
    },
  ];

  return (
    <>
      <nav className='h-full w-2/12 text-white border-r border-side-gray bg-my-black'>
        <div className='h-60 w-full'>
          {pages.map((page, index) => (
            <>
              <a
                key={index}
                id={path === page.path ? styles.navActive : ''}
                className={`flex h-1/4 w-full items-center justify-center border-b border-b-my-side-gray text-4xl duration-300`}
                href={page.path}
                onClick={toggleSide}
              >
                {page.icon}
              </a>
            </>
          ))}
        </div>
      </nav>
    </>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default NavBar;
