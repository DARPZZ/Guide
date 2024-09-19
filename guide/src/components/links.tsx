import React, { useState, useEffect } from "react";
import { HashLink } from 'react-router-hash-link';

import KopiText from './individualguide/kopi';
import Genveje from './individualguide/genveje-compos/genveje';
import WordToPdf from './individualguide/WordToPdf-compos/WordToPdf';
import BilledeFraMobilTilPc from './individualguide/BilledeMobilPc/BilledeFraMobilTilPc';
import CreateFolder from './individualguide/CreateFolder';
import Home from './Home';
import EditPicture from './individualguide/EditPicture';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
ReactGA.initialize("G-K93D6DKE6D");
function Links() {
  const location = useLocation();

  useEffect(() => {
    const pagePath = window.location.pathname + window.location.search + window.location.hash;
    ReactGA.send({ hitType: "pageview", page: pagePath });
  }, [location]);
  return (
    
        <Routes>
          <Route path="/kopitext" element={<KopiText/>} />
          <Route path='/' element={<Home/>}/>
          <Route path='/Genveje' element={<Genveje/>}/>
          <Route path='/WordToPdf' element={<WordToPdf/>}/>
          <Route path='/kopibillede' element={<BilledeFraMobilTilPc/>}/>
          <Route path='/mappe' element={<CreateFolder/>}/>
          <Route path='/edit/picture' element={<EditPicture/>}/>
          
        </Routes>
 
  );
}

export default Links;