import React, { useState, useEffect } from "react";
import ScrollToTopButton from "../ScrollToTopButton";
import EditPictures from "../../assets/EditPictures/choose.png";
import EdditButtonPic from "../../assets/EditPictures/EdditbuttonPic.png";
import DoneEdditPic from "../../assets/EditPictures/DoneEddit.png";
function EditPicture() {
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
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold pt-5 text-3xl">
          Velkommen til redigere billeder
        </h1>
        <h1 className="pt-4">
          {" "}
          I denne guide bliver der vist, hvordan du kan redigere billeder 
        </h1>
      </div>
      <div className=" w-11/12 pt-16 pl-2 space-y-10 text-xs">
        <h3 className="font-normal text-lg">
          <span className="font-bold underline text-xl">1.</span> Find Bilelde:
          Find det billede du ønsker at redigere. Du skal derefter åbne billedet
        </h3>
        <img src={EditPictures} alt="Fail" className="md:w-1/3" />
        <h3 className="font-normal text-lg">
          <span className="font-bold underline text-xl">2.</span> Edit knappen:
          Efter du har trykket på edit knappen kan du nu redigere
        </h3>
        <img src={EdditButtonPic} className="md:w-1/2" />

        <h3 className="font-normal text-lg">
          <span className="font-bold underline text-xl">3.</span> Færdig
          redigering: Når du er færdig med at redigere dit billede skal du tykke
          på denne kanp
        </h3>
        <img src={DoneEdditPic} className="md:w-1/2" />

        <h3 className="font-normal text-lg">
          <div className="space-y-5">
            <span className="font-bold underline text-xl">3.</span> Flere valg:
            Du vil nu få muligheden for at gemme på forskellige måder
            <h3>
              Gem som kopi : Du gemmer en kopi af dit billede. Så det oprindelige billede har du stadig, og laver en ny (som er det redigere billede). Det vil sige, at du har 2 billeder 
            </h3>
            <h3>Gem : Dette overskriver det oprindelige billede med dit nye redigered billede. Her har du kun 1 billede, som er det nye </h3>
          </div>
        </h3>
      </div>
      {showScrollTopButton && <ScrollToTopButton />}
    </div>
  );
}

export default EditPicture;
