import React from "react";
import NoNameOnFile from "../../assets/NoNameOnFile.png";
function knowProblems() {
  return (
    <div className="h-full text-xl w-full pt-2">
      <div className="flex text-3xl font-bold justify-center ">
        <h1>Her kan du få hjælp til nogle kendte problemer</h1>
      </div>
      <div className="pt-12 px-10">
        <div className="flex flex-row text-3xl">
          <p className="flex justify-center items-center pr-5">
            1. Har filen ikke noget navn, og ser sådan her ud:{" "}
          </p>
          <img src={NoNameOnFile} className="rounded-lg" alt="" />
        </div>
        <div className="pl-12">
          <p>1.1: Find filen i Stifinder</p>
          <p>1.2: Højreklik på filen</p>
          <p>1.3: Vælg "Omdøb"</p>
          <p>1.4: Skriv det nye filnavn</p>
          <p>1.5: Tryk på Enter for at gemme navneændringen</p>
        </div>
      </div>
    </div>
  );
}

export default knowProblems;
