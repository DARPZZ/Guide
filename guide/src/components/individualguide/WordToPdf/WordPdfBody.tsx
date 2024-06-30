import React from 'react'
import picture1 from '../../../assets/WordToPdfPictures/picture1.png'
import picture2 from '../../../assets/WordToPdfPictures/picture2.png'
import picture3 from '../../../assets/WordToPdfPictures/picture3.png'
import picture4 from '../../../assets/WordToPdfPictures/picture4.png'
import picture5 from '../../../assets/WordToPdfPictures/picture5.png'
import picture6 from '../../../assets/WordToPdfPictures/picture6.png'
function WordPdfBody() {
  return (
    <div className='flex flex-col items-left w-full'>
      <div className='w-full h-full'>
        <h1 className='text-center font-semibold text-3xl font-Inter'>Velkommen til Word til PDF</h1>
        <div className='pt-6 pl-2 space-y-10 text-xs'>
          <h3 className="font-normal text-lg">
            <span className="font-bold underline text-xl">1.</span> Find det Word-dokument, du vil lave om til en PDF-fil, og åben det ved at dobbeltklikke på det.
          </h3>
          <img src={picture1} alt="Fail" className='w-1/2'/>

          <h3 className="font-normal text-lg">
            <span className="font-bold underline text-xl">2.</span> Gå til 'Filer'-menuen: I øverste venstre hjørne af Word-vinduet, klik på 'Filer'. Denne knap kan også se ud som et lille ikon eller have ordet 'File' afhængigt af din version af Word.
          </h3>
          <img src={picture2} alt="Fail" className='w-1/3'/>

          <h3 className="font-normal text-lg">
            <span className="font-bold underline text-xl">3.</span> Vælg 'Gem som': Når du er i 'Filer'-menuen, vælg 'Gem som'
          </h3>
          <img src={picture3} alt="Fail" className='h-64'/>

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
          <img src={picture6} alt="Fail" className='h-64 w-1/2'/>

        </div>
      </div>
    </div>
  );
}

export default WordPdfBody