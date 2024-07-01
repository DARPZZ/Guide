import React from 'react'

function EmailContent({picture1, picture2}) {
  return (
    <div className='  space-y-10'>
    <h3 className=" spfont-normal text-lg">
        <span className="font-bold underline text-xl">8.</span> Åbn din e-mail: Log ind på din e-mailkonto fra din PC.
    </h3>
    <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">9.</span> Åbn e-mailen med billederne: Find e-mailen, du sendte til dig selv.
    </h3>
    <h3 id='ralle' className="font-normal text-lg">
        <span className="font-bold underline text-xl">10.</span> Download billederne: Tryk på pil ikonet.
    </h3>
    <img src={picture1} className='w-1/3' />

    <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">11.</span> Gem billederne:Vælg "gemsom".
    </h3>
    <img src={picture2} className='w-1/5' />
   

    <h3 className="pt-2 pb-10 font-normal text-lg">
        <span className="font-bold underline text-xl">12.</span> Du skal vælge, hvor du vil gemme dine billeder.
    </h3>
    </div>
  )
}

export default EmailContent