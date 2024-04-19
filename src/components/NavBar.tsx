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
import { usePathname } from 'next/navigation';
import styles from '../styles/navbar.module.css';

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
      href: `${locale}/about`,
      icon: <HiOutlineUser />,
    },
    {
      name: 'resume',
      href: `${locale}/resume`,
      icon: <HiOutlineDocumentText />,
    },
    {
      name: 'contact',
      href: `${locale}/contact`,
      icon: <HiOutlineEnvelope />,
    },
    // {
    //   name: 'clients',
    //   href: '/auth/signin',
    //   icon: <HiOutlineViewColumns />,
    // },
  ];
  console.log(locale);
  console.log(path);
  return (
    <div className='h-full w-2/12 border-r bg-black border-side-gray'>
      <ul className='h-60 w-full'>
        {options.map((o, index) => {
          console.log(o.href);
          return (
            <Link
              // onClick={() => dispatch(toggleSide())}
              key={index}
              href={o.href}
              className='w-max h-max'
            >
              <li
                id={path === o.href ? styles.navActive : ''}
                className={`w-full h-1/4 flex justify-center items-center text-4xl border-b border-b-side-gray duration-300 ${path === o.href ? 'text-green' : 'text-white'}`}
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
