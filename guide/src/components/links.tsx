import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Route, Routes } from 'react-router-dom';
import KopiText from './individualguide/kopi';
import Genveje from './individualguide/genveje-compos/genveje';
import WordToPdf from './individualguide/WordToPdf-compos/WordToPdf';
import BilledeFraMobilTilPc from './individualguide/BilledeMobilPc/BilledeFraMobilTilPc';
import Home from './Home';
import Error404 from './Error404';
function Links() {
  return (
    
        <Routes>
          <Route path="/kopitext" element={<KopiText/>} />
          <Route path='/' element={<Home/>}/>
          <Route path='/Genveje' element={<Genveje/>}/>
          <Route path='/WordToPdf' element={<WordToPdf/>}/>
          <Route path='/kopibillede' element={<BilledeFraMobilTilPc/>}/>
          <Route path="*" element={<Error404 />} />
        </Routes>
 
  );
}

export default Links;