import React from 'react';
import GenNav from './GenNav';
import GenBody from './GenBody';
const Genveje = () => {
  
  return (
    <div className='mt-10 h-full w-full flex flex-col md:flex-row'>
    <GenNav></GenNav>
    <GenBody></GenBody>
  </div>
  );
};

export default Genveje;