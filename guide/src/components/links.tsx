import React from 'react';
import { Route, Routes } from 'react-router-dom';
import KopiText from './individualguide/kopi';
import Genveje from './individualguide/genveje-compos/genveje';
import WordToPdf from './individualguide/WordToPdf-compos/WordToPdf';
import BilledeFraMobilTilPc from './individualguide/BilledeMobilPc/BilledeFraMobilTilPc';
import CreateFolder from './individualguide/CreateFolder';
import Home from './Home';
import Error404 from './Error404';
import EditPicture from './individualguide/EditPicture';
import KopiereMappe from './individualguide/KopiereMappe/KopiereMappe';

function Links() {
  return (
    <Routes>
      <Route path="/kopitext" element={<KopiText />} />
      <Route path="/Guide" element={<Home />} />
      <Route path="/Genveje" element={<Genveje />} />
      <Route path="/WordToPdf" element={<WordToPdf />} />
      <Route path="/kopibillede" element={<BilledeFraMobilTilPc />} />
      <Route path="/mappe" element={<CreateFolder />} />
      <Route path="/edit/picture" element={<EditPicture />} />
      <Route path="/kopiere/mappe" element={<KopiereMappe />} />
    </Routes>
  );
}

export default Links;
