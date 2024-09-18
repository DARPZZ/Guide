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
      <Route path="/Guide/kopitext" element={<KopiText />} />
      <Route path="/Guide" element={<Home />} />
      <Route path="/Guide/Genveje" element={<Genveje />} />
      <Route path="/Guide/WordToPdf" element={<WordToPdf />} />
      <Route path="/Guide/kopibillede" element={<BilledeFraMobilTilPc />} />
      <Route path="/Guide/mappe" element={<CreateFolder />} />
      <Route path="/Guide/edit/picture" element={<EditPicture />} />
      <Route path="/Guide/kopiere/mappe" element={<KopiereMappe />} />
    </Routes>
  );
}

export default Links;
