/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import Link from 'next/link';
import React from 'react';
import {
  HiOutlineDocumentText,
  HiOutlineEnvelope,
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineViewColumns,
} from 'react-icons/hi2';
import styles from '../styles/navbar.module.css';
import { getPath } from '@/utils/functions';

/************************s****************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/
type NavBarProps = {
  locale: string;
  path: string;
};
/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

const NavBar: React.FC<NavBarProps> = ({ locale, path }) => {
  const options = [
    {
      name: 'Home',
      href: `/${locale}`,
      icon: <HiOutlineHome />,
    },
    {
      name: 'About',
      href: `/${locale}/about`,
      icon: <HiOutlineUser />,
    },
    {
      name: 'Resume',
      href: `/${locale}/resume`,
      icon: <HiOutlineDocumentText />,
    },
    {
      name: 'Contact',
      href: `/${locale}/contact`,
      icon: <HiOutlineEnvelope />,
    },
    // {
    //   name: 'clients',
    //   href: '/auth/signin',
    //   icon: <HiOutlineViewColumns />,
    // },
  ];

  return (
    <div className='h-full w-2/12 border-r bg-black border-side-gray'>
      <ul className='h-60 w-full'>
        {options.map((o, index) => {
          const newPath = getPath(path, locale);
          return (
            <Link
              // onClick={() => changePath(path, o.href)}
              href={o.href}
              key={index}
              className='w-max h-max'
            >
              <li
                id={
                  newPath === `/${o.name.toLocaleLowerCase()}`
                    ? styles.navActive
                    : ''
                }
                className={`w-full h-1/4 flex justify-center items-center text-4xl border-b border-b-side-gray duration-300`}
              >
                {o.icon}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default NavBar;
