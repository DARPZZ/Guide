import React, { useState, useEffect } from "react";
import { scrollToTop, decideID } from "../../scroll";
import GenNavButtons from "./GenNavButtons";
import ScrollToTopButton from "../../ScrollToTopButton";
function GenNav() {
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
    <div className="flex flex-col justify-center  p-3 w-full md:w-1/3 h-full">
      <ul className="block space-y-5 items-center">
        <li>
          <GenNavButtons command={"CTRLZ"} text={"CTRL Y"}></GenNavButtons>
        </li>
        <li>
          <GenNavButtons command={"CTRLY"} text={"CTRL Z"}></GenNavButtons>
        </li>
        <li>
          <GenNavButtons command={"CTRLC"} text={"CTRL C"}></GenNavButtons>
        </li>
        <li>
          <GenNavButtons command={"CTRLV"} text={"CTRL V"}></GenNavButtons>
        </li>
        <li>
          <GenNavButtons command={"CTRLP"} text={"CTRL P"}></GenNavButtons>
        </li>
        <li>
          <GenNavButtons command={"CTRLX"} text={"CTRL X"}></GenNavButtons>
        </li>
        <li>
          <GenNavButtons command={"CTRLS"} text={"CTRL S"}></GenNavButtons>
        </li>
        <li>
          <GenNavButtons command={"CTRLA"} text={"CTRL A"}></GenNavButtons>
        </li>
        <li>
          <GenNavButtons command={"CTRLF"} text={"CTRL A"}></GenNavButtons>
        </li>
        <li>
          <GenNavButtons command={"CTRLH"} text={"CTRL H"}></GenNavButtons>
        </li>
      </ul>

      {showScrollTopButton && (
       <ScrollToTopButton/>
      )}
    </div>
  );
}

export default GenNav;
