import React, { useState, useEffect } from "react";

import picture9 from "../../../assets/MobilPcPictures/Picture9.png";
import mobil from "../../../assets/MobilPcPictures/mobil.png";
import pc from "../../../assets/MobilPcPictures/pc.png";
import arrow from "../../../assets/WordToPdfPictures/arrow.png";
import { scrollToTop, decideID } from "../../scroll";
import GmailContent from "./GmailContent";
import EmailContent from "./EmailContent";
import TransferViaMail from "./TransferViaMail";
import TransferViaStik from "./TransferViaStik";
import Picture1Email from "../../../assets/MobilPcPictures/Picture1Email.png";
import Picture2Email from "../../../assets/MobilPcPictures/Picture2Email.png";
let offs;
let hasScrolled = false;
function BilledeFraMobilTilPcBody() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionStart, setSelectedOptionStart] = useState(null);

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
  const handleStartCheckboxChange = (event) => {
    const { id } = event.target;
    setSelectedOptionStart(id);
    setSelectedOption(null)
    console.log(id);
  };
  
  return (
    <div className="h-full w-11/12">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold pt-5 text-3xl">
          Velkommen til flyt billeder fra mobil til pc
        </h1>
        <h1 className="pt-4">
          {" "}
          I denne guide bliver der vist, hvordan du kan flytte billeder fra
          mobil til pc
        </h1>
        <div className="flex pt-5 flex-row justify-center items-center">
          <img src={mobil} className="w-20" />
          <img src={arrow} className="w-20" />
          <img src={pc} className="w-20 ml-5" />
        </div>
      </div>
      <div className="pt-16 pl-2 space-y-10 ">
        <h1 className="font-bold text-xl">
          Hvordan ønsker du at overføre dine billeder?
        </h1>
        <input
          id="Mail"
          type="checkbox"
          checked={selectedOptionStart === "Mail"}
          onChange={handleStartCheckboxChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="mr-20 ms-2 text-lg font-bold">
          Send over mail
        </label>

        <input
          id="stik"
          type="checkbox"
          checked={selectedOptionStart === "stik"}
          onChange={handleStartCheckboxChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className=" ms-2 text-lg font-bold">
          Over USB
        </label>

        {selectedOptionStart === "Mail" &&
         <TransferViaMail />
        }

        {selectedOptionStart === "stik" &&
         <TransferViaStik />
         }

        {(selectedOptionStart === "Mail") && (
          <div>
            <h1 className="underline font-bold text-3xl">
              {" "}
              OBS Gå over på din computer
            </h1>

            <h1 className="text-lg font-bold mt-5">Bruger du Gmail eller Email?</h1>
            <div className="flex- flex-row">
              <div className="flex items-center mt-2  mb-10">
                <input
                  id="gmail"
                  type="checkbox"
                  checked={selectedOption === "gmail"}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="mr-20 ms-2 text-lg font-bold">
                  Gmail
                </label>

                <input
                  id="email"
                  type="checkbox"
                  checked={selectedOption === "email"}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className=" ms-2 text-lg font-bold">
                  Email
                </label>
              </div>
            </div>
          </div>
        )}

        {(selectedOption === "gmail" && selectedOptionStart !="stik") && (
          <GmailContent picture={picture9}></GmailContent>
        )}
        {(selectedOption === "email" && selectedOptionStart !="stik") && (
          <EmailContent
            picture2={Picture2Email}
            picture1={Picture1Email}
          ></EmailContent>
        )}
      </div>
      {showScrollTopButton && (
        <button
          className=" hidden lg:block opacity-75 transparent fixed bottom-6 right-6 bg-blue-500 hover:bg-pink-400 text-white px-4 py-2 rounded-md shadow-md"
          onClick={scrollToTop}
        >
          Til toppen
        </button>
      )}
    </div>
  );
}

export default BilledeFraMobilTilPcBody;
