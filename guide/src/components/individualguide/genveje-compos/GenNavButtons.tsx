import React from 'react'
import { scrollToTop, decideID } from "../../scroll";
interface gen {
    command: string;
    text: string;
   
  }


  const GenNavButtons = ({ command, text }: gen) => {
    return (
        <button
        id="section-2"
        className="md:w-4/5 w-full  bg-blue-500 hover:bg-pink-400 text-white text-center py-2 px-4 rounded-md transition duration-300"
        onClick={() => decideID(command)}
      >
        {text}
      </button>
    );
  };

export default GenNavButtons