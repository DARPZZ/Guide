import React, { useState, useEffect } from "react";
import CreateFolderPng from "../../assets/CreateFolder.png";
import ChFolder from "../../assets/CreateFolderPictures/chooseFolder.png";
import ScrollToTopButton from "../ScrollToTopButton";
function CreateFolder() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowScrollTopButton(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="h-full w-full">
      <div className="flex flex-col  items-center">
        <h1 className="text-3xl font-bold">Velkommen til Mappe</h1>
        <h1 className="text-xl">
          {" "}
          I denne guide vil du lærer, hvordan man opretter en ny mappe
        </h1>
        <img src={CreateFolderPng} className="w-20" />
      </div>
      <div className="pl-5 pt-5">
        <h3 className="pt-2 pb-10 font-normal text-lg">
          <span className="font-bold underline text-xl">1.</span> Gå til den
          placering, hvor du vil oprette mappen. I dette eksempel opretter vi en
          mappe i "Vidioer" Den kan oprettes alle steder
        </h3>
        <img src={ChFolder} className="w-3/6" />
        <h3 className="pt-2 pb-10 font-normal text-lg">
          <span className="font-bold underline text-xl">2.</span> Højreklik på
          et tomt område.
        </h3>
        <h3 className="pt-2 pb-10 font-normal text-lg">
          <span className="font-bold underline text-xl">3.</span> Vælg "Ny" fra
          menuen.
        </h3>
        <h3 className="pt-2 pb-10 font-normal text-lg">
          <span className="font-bold underline text-xl">4.</span> Klik på
          "Mappe".
        </h3>
        <h3 className="pt-2 pb-10 font-normal text-lg">
          <span className="font-bold underline text-xl">5.</span> Skriv et navn
          til mappen og tryk Enter.
        </h3>
      </div>
      {showScrollTopButton && <ScrollToTopButton />}
    </div>
  );
}

export default CreateFolder;
