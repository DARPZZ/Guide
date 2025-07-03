import React, { useState, useEffect } from "react";
import picture1 from "../../../assets/WordToPdfPictures/picture1.png";
import picture2 from "../../../assets/WordToPdfPictures/picture2.png";
import picture3 from "../../../assets/WordToPdfPictures/image.png";
import picture4 from "../../../assets/WordToPdfPictures/picture4.png";
import picture5 from "../../../assets/WordToPdfPictures/picture5.png";
import picture6 from "../../../assets/WordToPdfPictures/picture6.png";
import picture7 from "../../../assets/WordToPdfPictures/picture7.png";
import wordpicture from "../../../assets/WordToPdfPictures/word.png";
import arrow from "../../../assets/WordToPdfPictures/arrow.png";
import pdf from "../../../assets/WordToPdfPictures/pdf.png";
import ScrollToTopButton from "../../ScrollToTopButton";
import { scrollToTop } from "../../scroll";
import WordPdfComps from "./WordPdfComps";
function WordPdfBody() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowScrollTopButton(scrollTop > 0);
  };
//#region  steps
  const id1 = {
    id: 1,
    picture: picture1,
    text: "Find det Word-dokument, du vil lave om til en PDF-fil, og åben det ved at dobbeltklikke på det.",
  };
   const id2 = {
    id: 2,
    picture: picture2,
    text: "Gå til 'Filer'-menuen: I øverste venstre hjørne af Word-vinduet, klik på 'Filer'. Denne knap kan også se ud som et lille ikon eller have ordet 'File' afhængigt af din version af Word.",
    styleing:"md:w-1/2"
  };
   const id3 = {
    id: 3,
    picture: picture3,
    text: "Vælg 'Gem som': Når du er i 'Filer'-menuen, vælg 'Gem som'",
    
  };
   const id4 = {
    id: 4,
    picture: picture7,
    text: "Vælg Gennemse",
  };
   const id5 = {
    id: 5,
    picture: picture5,
    text: "Vælg PDF-formatet: Når du har valgt hvor du vil gemme filen, vil der være en dropdown-menu lige under feltet hvor du indtaster filnavnet. Denne dropdown-menu hedder typisk Filtype eller Save as type. Klik på denne menu og vælg PDF fra listen over filtyper.",
  };
   const id6 = {
    id: 6,
    picture: picture6,
    text: "Gem filen: Efter du har valgt PDF-formatet, klik på 'Gem' knappen.",
  };
//#endregion


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-left w-full font-serif">
      <div>
        <div className="text-center font-semibold">
          <h1 className="text-3xl pt-5">Velkommen til Word til PDF</h1>
          <h1 className=" pt-4">
            Du vil lærer hvordan man konvertere fra word til pdf
          </h1>
          <div className="flex flex-row space-x-7 justify-center items-center">
            <img src={wordpicture} className="w-20" />
            <img src={arrow} alt="" className="w-20" />
            <img src={pdf} className="w-20" />
          </div>
        </div>

        <div className="w-11/12 pt-16 pl-2 space-y-10 text-xs">
          <WordPdfComps step={id1}></WordPdfComps>
          <WordPdfComps step={id2}></WordPdfComps>
          <WordPdfComps step={id3}></WordPdfComps>
          <WordPdfComps step={id4}></WordPdfComps>
          <WordPdfComps step={id5}></WordPdfComps>
          <WordPdfComps step={id6}></WordPdfComps>

        </div>
      </div>
      {showScrollTopButton && <ScrollToTopButton />}
    </div>
  );
}

export default WordPdfBody;
