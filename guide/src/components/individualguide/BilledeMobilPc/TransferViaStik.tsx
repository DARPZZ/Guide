import React from "react";
import picture1 from '../../../assets/MobilPcPictures/TransferStrikPicture1.png'
import picture2 from '../../../assets/MobilPcPictures/thispc.png'
import picture3 from '../../../assets/MobilPcPictures/Understand.png'
import picture4 from '../../../assets/MobilPcPictures/CopyImg.png'
function TransferViaStik() {
  return (
    <div className="space-y-10">
      <h1 className="text-xl underline font-bold">
        Disse ting skal gøres på mobilen
      </h1>
      <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">1.</span> Tilslut USB: Put usb stikket ind i både telefonen og computeren
      </h3>

      <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">2.</span> pop up: På telefonen vil der komme en besked her skal du trykke "tillad"
      </h3>
      <img src={picture1} className="w-80"/>

      <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">3.</span> Skriv adgangskode : For at bekræfte, at det er dig skal du skrive adgangskoden til din telefon
      </h3>

      <h1 className="underline font-bold text-3xl">
              {" "}
              OBS Gå over på din computer
            </h1>

      <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">4.</span> Åbern stifinder : Du skal åbne stifinder, og vælge Denne Pc og klikke på den
      </h3>
      <img src={picture2} className="w-60" />

      <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">5.</span> Iphone : Du burde kunne se en enhed med navnet 'iPhone' eller noget lignende. Den skal du dobbeltklikke på.
      </h3>

      <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">6.</span> Internal storage : Klik på internal storage. Du burde nu, at kunne se en masse mapper
      </h3>
      <img src={picture3} className="w-60" />

      <h3  className=" font-normal text-lg">
        <span className="font-bold underline text-xl">7.</span> Forstå Mapperne : Det er vigtig at forstå hvad navnet på mappen er, da det forklare meget om, hvad der er i mappen. Lad os tage et eksempel. "202407__"
        <div className=" space-x-1 flex flex-row">
          <h1 className="text-red-600"> 2024</h1>
          <h1 className="text-blue-600">07</h1>
        </div>
        <h3> Altså Iphone deler dine billeder i mapperne, efter hvad måned, de er blevet taget i</h3>
        <h3 className="text-red-600">Den røde farve indikere hvilket årstal billedet er blevet taget</h3>
        <h3 className="text-blue-600">Den blå farve indikere hvilken måned billedet er blevet taget i</h3>
      </h3>

      <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">8.</span> Vælg Mappe: Klik på den mappe hvor dit billede ligger i.
      </h3>

      <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">9.</span> Vælg Billede: højre klik på det billede du ønsker at have over på mobilen. og vælg "Kopier"
      </h3>
      <img src={picture4} className="w-2/3" />

      <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">10.</span> Vælg destination :Find nu den mappe hvor du ønsker at bilelde skal gemmes i.
      </h3>

      <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">11.</span> Indsæt billede : Når du har fundet den mappe hvor billedet skal være kan du trykke <a className="text-purple-900 underline" href="/#/genveje">CTRL V</a>
      </h3>
      <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">12.</span> Færdig : Dit billede kan nu findes i din mappe
      </h3>
    </div>
  );
}

export default TransferViaStik;
