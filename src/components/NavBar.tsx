'use client';
/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import { Link, usePathname } from '../navigation';
import React from 'react';
import { LuHome, LuUser, LuFileText, LuMail } from 'react-icons/lu';
import styles from '../styles/navbar.module.css';
import { pathnames } from '@/config';
import { useLocale } from 'next-intl';
import { getPath } from '@/utils/functions';
import { usePathname as nextUsePathname } from 'next/navigation';
import '/node_modules/flag-icons/css/flag-icons.min.css';

/************************s****************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/
type NavBarProps = {
  toggleSide: () => void;
};
/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

const NavBar: React.FC<NavBarProps> = ({ toggleSide }) => {
  const path = nextUsePathname();
  const path2 = usePathname();
  const locale = useLocale() as string;
  const shortPath = getPath(path, locale);
  const pages = [
    {
      name: {
        es: 'Inicio',
        en: 'Home',
      },
      path: `/`,
      icon: <LuHome />,
    },
    {
      name: {
        es: 'Sobre Mi',
        en: 'About Me',
      },
      path: `/about`,
      icon: <LuUser />,
    },
    {
      name: {
        es: 'Currículum',
        en: 'Resume',
      },
      path: `/resume`,
      icon: <LuFileText />,
    },
    {
      name: {
        es: 'Contacto',
        en: 'Contact',
      },
      path: `/contact`,
      icon: <LuMail />,
    },
  ];
  return (
    <>
      <nav className='h-full w-2/12 text-white border-r border-side-gray bg-my-black'>
        <div className='h-60 w-full'>
          <Link
            className='flex h-1/5 w-full items-center justify-center border-b border-b-my-side-gray text-4xl duration-300'
            href={shortPath as keyof typeof pathnames}
            locale={locale === 'es' ? 'en' : 'es'}
            title={locale === 'es' ? 'Idioma' : 'Laguage'}
            onClick={toggleSide}
          >
            {locale === 'es' ? (
              <span className='fi fi-ar'></span>
            ) : (
              <span className='fi fi-us'></span>
            )}
          </Link>

          {pages.map((page, index) => (
            <>
              <Link
                key={index}
                id={path2 === page.path ? styles.navActive : ''}
                className={`flex h-1/5 w-full items-center justify-center border-b border-b-my-side-gray text-4xl duration-300`}
                href={page.path as keyof typeof pathnames}
                onClick={toggleSide}
                title={page.name[locale as keyof typeof page.name]}
              >
                {page.icon}
              </Link>
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
