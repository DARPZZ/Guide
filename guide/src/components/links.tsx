import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Route, Routes } from 'react-router-dom';
import KopiText from './individualguide/kopi';
import Home from './Home';
function Links() {
  return (
    
        <Routes>
          <Route path="/kopitext" element={<KopiText/>} />
          <Route path='/' element={<Home/>}/>
        </Routes>
 
  );
}

export default Links;
