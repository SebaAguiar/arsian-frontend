'use client';
/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import React, { useEffect, useMemo, useState } from 'react';
import { LuArrowUp, LuArrowDown } from 'react-icons/lu';
import { usePathname, useRouter } from 'next/navigation';
/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/
interface IChangePagesProps {
  locale: string;
}
/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/
const ChangePages: React.FC<IChangePagesProps> = ({ locale }) => {
  const pages = useMemo(
    () => [
      `/${locale}`,
      `/${locale}/about`,
      `/${locale}/resume`,
      `/${locale}/contact`,
    ],
    [locale],
  );

  const router = useRouter();
  const pathname = usePathname();
  const [currentIndex, setCurrentIndex] = useState(pages.indexOf(pathname));

  useEffect(() => {
    setCurrentIndex(pages.indexOf(pathname));
  }, [pathname, pages]);

  const handleClicks = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const value = e.currentTarget.getAttribute('value');

    if (value === 'up' && currentIndex > 0) {
      router.push(pages[currentIndex - 1]);
    } else if (value === 'down' && currentIndex < pages.length - 1) {
      router.push(pages[currentIndex + 1]);
    }
  };

  return (
    <>
      <div className='absolute z-20 right-5 bottom-5 flex flex-col text-2xl text-my-white lg:hidden'>
        <button
          value='up'
          className='p-2 active:text-my-green'
          onClick={handleClicks}
        >
          <LuArrowUp />
        </button>
        <button
          value='down'
          className='p-2 active:text-my-green'
          onClick={handleClicks}
        >
          <LuArrowDown />
        </button>
      </div>
    </>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/
export default ChangePages;
