import React from "react";
import picture1 from "../../../assets/MobilPcPictures/Picture1.png";
import picture2 from "../../../assets/MobilPcPictures/Picture2.png";
import ShareIcon from "../../../assets/MobilPcPictures/Shareicon.png";
import picture5 from "../../../assets/MobilPcPictures/Picture5.png";
function TransferViaMail() {
  return (
    <div className="space-y-10">
      <h1 className="text-xl underline font-bold">
        Disse ting skal gøres på mobilen
      </h1>
      <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">1.</span> Åben Fotos: Åbn
        appen, hvor dine billeder er gemt.
      </h3>
      <img src={picture1} className="md:w-1/6" />

      <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">2.</span> Vælg: Klik på
        "vælg" øvert i højre hjørne.
      </h3>
      <img src={picture2} className="md:w-1/3" />

      <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">3.</span> Vælg billeder:
        Vælg de billeder du ønsker at have over på din pc ved at klikke på dem.
      </h3>

      <div className="flex flex-row">
        <h3 className="font-normal text-lg">
          <span className="font-bold underline text-xl">4.</span> Del Billeder:
          Nederts venstre er der en firgur
        </h3>
        <img className=" w-5 ml-2" src={ShareIcon} alt="" />
        <h3 className="font-normal text-lg ml-2">tryk på denne</h3>
      </div>

      <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">5.</span> Vælg delings
        måde: prøv at finde "Gmail/Email", hvis de kan findes skal du klikke på
        dem. Ellers skal u skal nu stryge din finger fra højre mod venstre
        indtil du kan se den der hedder "mere" og klikke på denne, derefter vil
        du have muligheden for at klikke på "Gmail/Email".
      </h3>
      <img src={picture5} className="md:w-1/3" alt="" />

      <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">6.</span> Vælg gmail: Du
        skal nu finde den der hedder "Gmail/Mail", og trykke på denne.
      </h3>

      <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">7.</span> Vælg modtager:
        Du skal nu finde feltet "Til" her skriver du din egen email ind og
        klikker .
      </h3>

      <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">7.</span> Vælg modtager:
        Du skal nu finde feltet "Til" her skriver du din egen email ind og
        klikker .
      </h3>
    </div>
  );
}

export default TransferViaMail;
