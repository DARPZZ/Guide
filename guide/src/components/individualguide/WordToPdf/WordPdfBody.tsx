import React from 'react'

function WordPdfBody() {
  return (
    <div className='flex flex-col items-left w-full'>
      <div className='w-full h-full'>
        <h1 className='text-center font-semibold text-xl font-serif'>Velkommen til Word til PDF</h1>
        <div className='pt-6 pl-2 space-y-10 text-xs'>
          <h3 className="font-normal">
            <span className="font-bold underline text-lg">1.</span> Find det Word-dokument, du vil lave om til en PDF-fil, og åbn det ved at dobbeltklikke på det.
          </h3>
          
          <h3 className="font-normal">
            <span className="font-bold underline text-lg">2.</span> Gå til 'Filer'-menuen: I øverste venstre hjørne af Word-vinduet, klik på 'Filer'. Denne knap kan også se ud som et lille ikon eller have ordet 'File' afhængigt af din version af Word.
          </h3>
          <h3 className="font-normal">
            <span className="font-bold underline text-lg">3.</span> Vælg 'Gem som': Når du er i 'Filer'-menuen, vælg 'Gem som'
          </h3>
          <h3 className="font-normal">
            <span className="font-bold underline text-lg">4.</span> Vælg hvor du vil gemme filen: Vælg den placering på din computer, hvor du vil gemme din nye PDF-fil. Det kan være på skrivebordet, i en bestemt mappe.
          </h3>
          <h3 className="font-normal">
            <span className="font-bold underline text-lg">5.</span> Vælg PDF-formatet: Når du har valgt hvor du vil gemme filen, vil der være en dropdown-menu lige under feltet hvor du indtaster filnavnet. Denne dropdown-menu hedder typisk "Filtype" eller "Save as type". Klik på denne menu og vælg 'PDF' fra listen over filtyper.
          </h3>
          <h3 className="font-normal">
            <span className="font-bold underline text-lg">6.</span> Gem filen: Efter du har valgt PDF-formatet, klik på 'Gem' knappen.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default WordPdfBody