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
import { useRouter } from 'next/router';
import styles from '../styles/navbar.module.css';

/************************s****************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/
type NavBarProps = {
  locale: string;
};
/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

const options = [
  {
    name: 'Home',
    href: '/',
    icon: <HiOutlineHome />,
  },
  {
    name: 'About',
    href: '/about',
    icon: <HiOutlineUser />,
  },
  {
    name: 'resume',
    href: '/resume',
    icon: <HiOutlineDocumentText />,
  },
  {
    name: 'contact',
    href: '/contact',
    icon: <HiOutlineEnvelope />,
  },
  // {
  //   name: 'clients',
  //   href: '/auth/signin',
  //   icon: <HiOutlineViewColumns />,
  // },
];

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/

const NavBar: React.FC<NavBarProps> = ({ locale }) => {
  const router = useRouter();
  return (
    <div className='h-full w-2/12 border-r bg-dark-black border-dark-side-gray'>
      <ul className='h-60 w-full'>
        {options.map((o, index) => (
          <Link
            // onClick={() => dispatch(toggleSide())}
            key={index}
            href={o.href}
            className='w-max h-max'
          >
            <li
              id={router.pathname === o.href ? styles.navActive : ''}
              className={`w-full h-1/4 flex justify-center items-center text-4xl border-b border-b-dark-side-gray duration-300 ${router.pathname === o.href ? 'text-dark-green' : 'text-dark-white'}`}
            >
              {o.icon}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/

export default NavBar;
