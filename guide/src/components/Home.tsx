import { HashLink } from "react-router-hash-link";
import React, { useState, useEffect } from "react";
import EasterEgg from "./EasterEggFolder/EasterEgg";
import Confettis from "./EasterEggFolder/Confetti";
import ImageComp from "./EasterEggFolder/ImageComp";
import GmailPicture from "../assets/GmailPicture.png";
function Home() {
  const [inputValue, setInputValue] = useState("");
  const [easterEgg, setEasterEgg] = useState<boolean>(false);
  function getInput() {
    if (inputValue != "") {
      if (inputValue === "Hero") {
        setEasterEgg(true);
      }
    }
  }
  function cancleEasterEgg() {
    setEasterEgg(false);
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="h-full w-full">
      <div className="flex flex-col items-center justify-center">
        <div className="w-1/2 pt-2">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Søg
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              value={inputValue}
              onChange={handleInputChange}
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Søg"
              required
            />
            <button
              type="submit"
              onClick={getInput}
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Søg
            </button>
          </div>
        </div>
      </div>
      <div>
        <div>
          {easterEgg && (
            <div>
              <Confettis></Confettis>
              <EasterEgg cancleEasterEgg={cancleEasterEgg}></EasterEgg>
              <div className="space-x-80 flex flex-row">
                <ImageComp></ImageComp>
                <ImageComp></ImageComp>
                <ImageComp></ImageComp>
              </div>
            </div>
          )}
        </div>
        <nav>
          <div className="animation start-home"></div>
          <ul className="text-2xl font-bold space-y-10 py-10 flex flex-col justify-center items-center">
            <li>
              <HashLink to={"/kopibillede"}>
              <button
                  className="rounded-full w-80 bg-gradient-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Flyt billede fra mobil til pc
                </button>
              </HashLink>
            </li>
            <li>
              <HashLink to={"/Genveje"}>
                <button
                  className="rounded-full w-80 bg-gradient-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Genveje
                </button>
              </HashLink>
            </li>
            <li>
              <HashLink to={"/WordToPdf"}>
                <button
                  className="rounded-full w-80 bg-gradient-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Word til PDF
                </button>
              </HashLink>
            </li>
            <li>
              <HashLink to={"/mappe"}>
                <button
                  className="rounded-full w-80 bg-gradient-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Lav en ny mappe
                </button>
              </HashLink>
            </li>
            <li>
              <HashLink to={"/edit/picture"}>
                <button
                  className="rounded-full w-80 bg-gradient-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Redigere billede
                </button>
              </HashLink>
            </li>
          </ul>
          <div className=" flex flex-col justify-center items-center">
            <h1 className="text-3xl mt-16">
              Kunne du ikke finde, hvad du skulle bruge?
            </h1>
            <h1 className="text-xl">Lav et forslag her </h1>
            <div>
              <div>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rasmustofthermansen@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="md:w-28 md:h-28 w-28 h-28"
                    src={GmailPicture}
                  />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Home;
