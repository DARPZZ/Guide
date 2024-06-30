import React from 'react'
import SingleShortcut from './SingleShortcut'
//#region shortcuts

const CTRLZ={
  command:"CTRL Z",
  description: "CTRL + Z fortryder den sidste handling, du har lavet på computeren.",
  id : "CTRLX"
}
const CTRLY={
  command:"CTRL Y",
  description: "CTRL + Y er en tastaturgenvej, der bruges til at gentage den sidste handling, som du har fortrudt ved hjælp af CTRL + Z.",
  id : "CTRLY"
}

const CTRLC={
  command:"CTRL C",
  description: "CTRL + C bruges til at kopiere markeret tekst eller andre ting.",
  id : "CTRLC"
}
const CTRLV={
  command:"CTRL V",
  description: "CTRL + V bruges til at indsætte det kopierede indhold på det sted, hvor markøren befinder sig.",
  id : "CTRLV"
}

const CTRLP={
  command:"CTRL P",
  description: "CTRL + P åbner printervinduet, så du kan udskrive det aktuelle dokument eller side.",
  id : "CTRLP"
}
const CTRLX={
  command:"CTRL X",
  description:"CTRL + X bruges til at klippe markeret tekst eller objekter, så de kan indsættes et andet sted ved hjælp af CTRL + V. ",
  id : "CTRLX"
}
const CTRLS={
  command:"CTRL S",
  description:"CTRL + S gemmer dit arbejde.",
  id : "CTRLS"
}

const CTRLA={
  command:"CTRL A",
  description: "Markerer alt indholdet på en side eller i et dokument.",
  id : "CTRLA"
}

const CTRLF={
  command:"CTRL F",
  description: "Åbner søgefeltet for at finde tekst eller elementer i dokumentet.",
  id : "CTRLF"
}

const CTRLH={
  command:"CTRL H",
  description: "Åbner søgefeltet for at erstatte tekst eller elementer i dokumentet.",
  id : "CTRLH"
}


//#endregion

function GenBody() {
  return (
    <div className='flex flex-col items-center w-full pr-5 md:w-2/3'>
    <div className='w-full h-full'>
      <SingleShortcut project={CTRLZ}></SingleShortcut>
      <SingleShortcut project={CTRLY}></SingleShortcut>
      <SingleShortcut project={CTRLC}></SingleShortcut>
      <SingleShortcut project={CTRLV}></SingleShortcut>
      <SingleShortcut project={CTRLP}></SingleShortcut>
      <SingleShortcut project={CTRLX}></SingleShortcut>
      <SingleShortcut project={CTRLS}></SingleShortcut>
      <SingleShortcut project={CTRLA}></SingleShortcut>
      <SingleShortcut project={CTRLF}></SingleShortcut>
      <SingleShortcut project={CTRLH}></SingleShortcut>

    </div>
  </div>
  
    
  )
}

export default GenBody