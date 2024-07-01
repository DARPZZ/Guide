import React, { useState, useEffect } from 'react';
import picture1 from '../../../assets/WordToPdfPictures/picture1.png'
import picture2 from '../../../assets/WordToPdfPictures/picture2.png'
import picture3 from '../../../assets/WordToPdfPictures/picture3.png'
import picture4 from '../../../assets/WordToPdfPictures/picture4.png'
import picture5 from '../../../assets/WordToPdfPictures/picture5.png'
import picture6 from '../../../assets/WordToPdfPictures/picture6.png'
import wordpicture from '../../../assets/WordToPdfPictures/word.png'
import arrow from '../../../assets/WordToPdfPictures/arrow.png'
import pdf from '../../../assets/WordToPdfPictures/pdf.png'
import { scrollToTop } from '../../scroll';
function WordPdfBody() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowScrollTopButton(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 


  return (
    <div className='flex flex-col items-left w-full font-serif'>
      <div className='w-11/12 h-full'>
        <div className='text-center font-semibold'>
        <h1 className='text-3xl pt-5'>Velkommen til Word til PDF</h1>
        <h1 className=' pt-4'>Du vil lærer hvordan man konvertere fra word til pdf</h1>
        <div className='flex flex-row space-x-7 justify-center items-center'>
          <img src={wordpicture} className='w-20' />
          <img src={arrow} alt="" className='w-20' />
          <img src={pdf}  className='w-20' />
        </div>
        </div>
        <div className='pt-16 pl-2 space-y-10 text-xs'>
          <h3 className="font-normal text-lg">
            <span className="font-bold underline text-xl">1.</span> Find det Word-dokument, du vil lave om til en PDF-fil, og åben det ved at dobbeltklikke på det.
          </h3>
          <img src={picture1} alt="Fail" className='w-1/2'/>

          <h3 className="font-normal text-lg">
            <span className="font-bold underline text-xl">2.</span> Gå til 'Filer'-menuen: I øverste venstre hjørne af Word-vinduet, klik på 'Filer'. Denne knap kan også se ud som et lille ikon eller have ordet 'File' afhængigt af din version af Word.
          </h3>
          <img src={picture2} alt="Fail" className='w-1/2'/>

          <h3 className="font-normal text-lg">
            <span className="font-bold underline text-xl">3.</span> Vælg 'Gem som': Når du er i 'Filer'-menuen, vælg 'Gem som'
          </h3>
          <img src={picture3} alt="Fail" className='h-96'/>

          <h3 className="font-normal text-lg">
            <span className="font-bold underline text-xl">4.</span> Vælg hvor du vil gemme filen: Vælg den placering på din computer, hvor du vil gemme din nye PDF-fil. Det kan være på skrivebordet, i en bestemt mappe.
          </h3>
          <img src={picture4} alt="Fail" className='h-64'/>

          <h3 className="font-normal text-lg">
            <span className="font-bold underline text-xl">5.</span> Vælg PDF-formatet: Når du har valgt hvor du vil gemme filen, vil der være en dropdown-menu lige under feltet hvor du indtaster filnavnet. Denne dropdown-menu hedder typisk "Filtype" eller "Save as type". Klik på denne menu og vælg 'PDF' fra listen over filtyper.
          </h3>
          <img src={picture5} alt="Fail" className='h-64'/>

          <h3 className="font-normal text-lg">
            <span className="font-bold underline text-xl">6.</span> Gem filen: Efter du har valgt PDF-formatet, klik på 'Gem' knappen.
          </h3>
          <img src={picture6} alt="Fail" className='w-1/2'/>

        </div>
      </div>
      {showScrollTopButton && (
        <button
          className=' hidden lg:block opacity-75 transparent fixed bottom-6 right-6 bg-blue-500 hover:bg-pink-400 text-white px-4 py-2 rounded-md shadow-md'
         onClick={scrollToTop}>
          Til toppen
        </button>
      )}
    </div>
  );
}

export default WordPdfBody