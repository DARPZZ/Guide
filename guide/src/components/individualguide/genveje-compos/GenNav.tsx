import React, { useState, useEffect } from 'react';
import {scrollToTop, decideID} from '../../scroll'
function GenNav() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);


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

  return (
    <div className="flex flex-col justify-center pt-6 p-3 w-full md:w-1/3 h-full">
      <ul className="block space-y-5">
        <li>
          <button
            className="w-4/5  bg-blue-500 hover:bg-pink-400 text-white text-center py-2 px-4 rounded-md transition duration-300"
            onClick={() => decideID("CTRLZ")}
          >
            CTRL Z
          </button>
        </li>
        <li>
          <button
              className="w-4/5  bg-blue-500 hover:bg-pink-400 text-white text-center py-2 px-4 rounded-md transition duration-300"
            onClick={() => decideID("CTRLY")}
          >
            CTRL Y
          </button>
        </li>
        <li>
          <button
              className="w-4/5  bg-blue-500 hover:bg-pink-400 text-white text-center py-2 px-4 rounded-md transition duration-300"
            onClick={() => decideID("CTRLC")}
          >
            CTRL C
          </button>
        </li>
        <li>
          <button
              className="w-4/5  bg-blue-500 hover:bg-pink-400 text-white text-center py-2 px-4 rounded-md transition duration-300"
            onClick={() => decideID("CTRLV")}
          >
            CTRL V
          </button>
        </li>
        <li>
          <button
              className="w-4/5  bg-blue-500 hover:bg-pink-400 text-white text-center py-2 px-4 rounded-md transition duration-300"
            onClick={() => decideID("CTRLP")}
          >
            CTRL P
          </button>
        </li>
        <li>
          <button
              className="w-4/5  bg-blue-500 hover:bg-pink-400 text-white text-center py-2 px-4 rounded-md transition duration-300"
            onClick={() => decideID("CTRLX")}
          >
            CTRL X
          </button>
        </li>
        <li>
          <button
              className="w-4/5  bg-blue-500 hover:bg-pink-400 text-white text-center py-2 px-4 rounded-md transition duration-300"
            onClick={() => decideID("CTRLS")}
          >
            CTRL S
          </button>
        </li>
        <li>
          <button
             className="w-4/5  bg-blue-500 hover:bg-pink-400 text-white text-center py-2 px-4 rounded-md transition duration-300"
            onClick={() => decideID("CTRLA")}
          >
            CTRL A
          </button>
        </li>
        <li>
          <button
              className="w-4/5  bg-blue-500 hover:bg-pink-400 text-white text-center py-2 px-4 rounded-md transition duration-300"
            onClick={() => decideID("CTRLF")}
          >
            CTRL F
          </button>
        </li>
        <li>
          <button
              className="w-4/5  bg-blue-500 hover:bg-pink-400 text-white text-center py-2 px-4 rounded-md transition duration-300"
            onClick={() => decideID("CTRLH")}
          >
            CTRL H
          </button>
        </li>
      </ul>

      {showScrollTopButton && (
        <button
          className='opacity-75 transparent fixed bottom-6 right-6 bg-blue-500 hover:bg-pink-400 text-white px-4 py-2 rounded-md shadow-md'
          onClick={scrollToTop}>
          Til toppen
        </button>
      )}
    </div>
  );
}

export default GenNav;
