import React, { useState, useEffect } from 'react';
import picture1 from '../../../assets/MobilPcPictures/Picture1.png'
import picture2 from '../../../assets/MobilPcPictures/Picture2.png'
import ShareIcon from '../../../assets/MobilPcPictures/Shareicon.png'
import picture5 from '../../../assets/MobilPcPictures/Picture5.png'
import picture9 from '../../../assets/MobilPcPictures/Picture9.png'
import mobil from '../../../assets/MobilPcPictures/mobil.png'
import pc from '../../../assets/MobilPcPictures/pc.png'
import arrow from '../../../assets/WordToPdfPictures/arrow.png'
import { scrollToTop,decideID } from '../../scroll';
import GmailContent from './GmailContent';
import EmailContent from './EmailContent';
import Picture1Email from '../../../assets/MobilPcPictures/Picture1Email.png'
import Picture2Email from '../../../assets/MobilPcPictures/Picture2Email.png'
let offs;
let hasScrolled = false;
function BilledeFraMobilTilPcBody() {
    
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        if (selectedOption) {
            getpageOffset();
        }
    }, [selectedOption]);

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
      

    
      
      function getpageOffset() {
          if (!hasScrolled) {
              offs = window.pageYOffset;
              hasScrolled = true;
              console.log("Initial offs set to: " + offs);
          }
          let off = window.pageYOffset;
          
          if (off <= offs) {
              window.scrollTo({
                  top: off + 600,
                  left: 0,
                  behavior: "smooth",
              });
          }
      }
      
    const handleCheckboxChange = (event) => {
        const { id } = event.target;
        setSelectedOption(id);
    };
      
  return (
      <div className="h-full w-full">
            <div className="flex flex-col items-center justify-center">
                <h1 className='font-bold pt-5 text-3xl'>Velkommen til flyt billeder fra mobil til pc</h1>
                <h1 className='pt-4'> I denne guide bliver der vist, hvordan du kan flytte billeder fra mobil til pc</h1>
                <div className='flex pt-5 flex-row justify-center items-center'>
                    <img src={mobil}  className='w-20'/>
                    <img src={arrow} className='w-20'/>
                    <img src={pc} className='w-20 ml-5' />
                    
                </div>
            </div>
            <div className='pt-16 pl-2 space-y-10 '>
                <h1 className='text-xl underline font-bold'>Disse ting skal gøres på mobilen</h1>
                <h3 className="font-normal text-lg">
                    <span className="font-bold underline text-xl">1.</span> Åben Fotos: Åbn appen, hvor dine billeder er gemt.
                </h3>
                <img src={picture1} className='w-1/6'/>

                <h3 className="font-normal text-lg">
                    <span className="font-bold underline text-xl">2.</span> Vælg: Klik på "vælg" øvert i højre hjørne.
                </h3>
                <img src={picture2} className=' w-1/3'/>


                <h3 className="font-normal text-lg">
                    <span className="font-bold underline text-xl">3.</span> Vælg billeder: Vælg de billeder du ønsker at have over på din pc ved at klikke på dem.
                </h3>

                <div className='flex flex-row'>
                    <h3 className="font-normal text-lg">
                        <span className="font-bold underline text-xl">4.</span> Del Billeder:  Nederts venstre er der en firgur 
                    </h3>
                    <img className='w-5 ml-2' src={ShareIcon} alt="" />
                    <h3 className='font-normal text-lg ml-2'>tryk på denne</h3>
                </div>



                <h3 className="font-normal text-lg">
                    <span className="font-bold underline text-xl">5.</span> Vælg delings måde: prøv at finde "Gmail/Email", hvis de kan findes skal du klikke på dem. Ellers skal  u skal nu stryge din finger fra højre mod venstre indtil du kan se den der hedder "mere" og klikke på denne, derefter vil du
                    have muligheden for at klikke på "Gmail/Email".
                </h3>
                <img src={picture5} className='w-1/3' alt="" />



                <h3 className="font-normal text-lg">
                    <span className="font-bold underline text-xl">6.</span> Vælg gmail: Du skal nu finde den der hedder "Gmail/Mail", og trykke på denne.
                </h3>



                <h3 className="font-normal text-lg">
                    <span className="font-bold underline text-xl">7.</span> Vælg modtager: Du skal nu finde feltet "Til" her skriver du din egen email ind og klikker .
                </h3>

                <h1 className='underline font-bold text-3xl'> OBS Gå over på din computer</h1>

                <h1 className='text-lg font-bold'>Bruger du Gmail eller Email?</h1>
                <div className='flex- flex-row'>
                <div className="flex items-center mb-10">
                <input 
                    id="gmail" 
                    type="checkbox" 
                    
                    checked={selectedOption === 'gmail'}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="mr-20 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gmail</label>
                    
                    <input 
                    id="email" 
                    type="checkbox" 
                    checked={selectedOption === 'email'}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label  className=" ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>

                </div>
                </div>
                
                

                {selectedOption === 'gmail' && (
                   <GmailContent picture={picture9}></GmailContent>
                )}
                {selectedOption === 'email' && (
                   <EmailContent picture2={Picture2Email} picture1={Picture1Email}></EmailContent> 
                )}
              
            </div>
            {showScrollTopButton && (
        <button
          className=' hidden lg:block opacity-75 transparent fixed bottom-6 right-6 bg-blue-500 hover:bg-pink-400 text-white px-4 py-2 rounded-md shadow-md'
         onClick={scrollToTop}>
          Til toppen
        </button>
      )}
      </div>
  )
}

export default BilledeFraMobilTilPcBody