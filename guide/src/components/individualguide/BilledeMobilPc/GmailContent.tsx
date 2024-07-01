import React from 'react'

function GmailContent({picture}) {
  return (
    <div className='  space-y-10'>
    <h3 className=" spfont-normal text-lg">
        <span className="font-bold underline text-xl">8.</span> Åbn din e-mail: Log ind på din e-mailkonto fra din PC.
    </h3>
    <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">9.</span> Åbn e-mailen med billederne: Find e-mailen, du sendte til dig selv.
    </h3>
    <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">10.</span> Download billederne: Klik på billedet/billederne for at downloade billederne til din PC.
    </h3>
    <img src={picture} className='w-1/2 border-4 border-black'/>
    <h3 className="pt-2 pb-10 font-normal text-lg">
        <span className="font-bold underline text-xl">11.</span> Du kan nu finde dine billeder på din pc under mappen "Overførsler".
    </h3>
    </div>
  )
}

export default GmailContent