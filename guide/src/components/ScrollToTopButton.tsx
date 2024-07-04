import React, { useState, useEffect } from "react";
import { scrollToTop } from "./scroll";

function ScrollToTopButton() {

  return (
    <button
      className=" hidden lg:block opacity-75 transparent fixed bottom-6 right-6 bg-blue-500 hover:bg-pink-400 text-white px-4 py-2 rounded-md shadow-md"
      onClick={scrollToTop}
    >
      Til toppen
    </button>
  );
}

export default ScrollToTopButton;
