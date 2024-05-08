import React from 'react';

interface IHeader1Props {
  children: React.ReactNode;
}

const Header1: React.FC<IHeader1Props> = ({ children }) => {
  return (
    <>
      <h1 className='ml-3 mt-3 text-4xl text-my-white font-bold'>{children}</h1>
    </>
  );
};

export default Header1;
