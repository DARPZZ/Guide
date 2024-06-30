import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Route, Routes } from 'react-router-dom';
import KopiText from './individualguide/kopi';
import Genveje from './individualguide/genveje-compos/genveje';
import WordToPdf from './individualguide/WordToPdf/WordToPdf';
import Home from './Home';
function Links() {
  return (
    
        <Routes>
          <Route path="/kopitext" element={<KopiText/>} />
          <Route path='/' element={<Home/>}/>
          <Route path='/Genveje' element={<Genveje/>}/>
          <Route path='/WordToPdf' element={<WordToPdf/>}/>
        </Routes>
 
  );
}

export default Links;
