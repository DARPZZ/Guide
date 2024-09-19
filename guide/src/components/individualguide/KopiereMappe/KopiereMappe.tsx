import React, { useState, useEffect } from "react";

import TomtSpace from "../../../assets/KopiereMappe/TomtSpace.png";

function KopiereMappe() {
  const [showRenameSteps, setShowRenameSteps] = useState(false);

  const handleRenameClick = () => {
    
    setShowRenameSteps(true);
   
  };
  useEffect(() => {
    if (showRenameSteps) {
      getPageLocation();
    }
  }, [showRenameSteps]);
  function getPageLocation()
  {
    let pageYOffset = window.pageYOffset;
    window.scrollTo({
        top: pageYOffset  + 300,
        left: 0,
        behavior: "smooth",
      });

  }
  

  return (
    <div className="h-full w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold pt-5 text-3xl">Velkommen til kopiere mappe</h1>
        <h1 className="pt-4">
          I denne guide bliver der vist, hvordan du kan kopiere mapper
        </h1>
      </div>
      <div className="pl-5 mt-10 font-bold space-y-10">
        <div>
          <h1>
            1. Naviger til mappen: Åbn Stifinder og find den mappe, du vil
            kopiere.
          </h1>
        </div>
        <div>
          <h1>
            2. Tryk en gang på den mappe du vil kopiere (Mappen skal have en mørk
            blå farve)
          </h1>
        </div>
        <div>
          <h1>3. Tryk CTRL + C. (Du skal ikke trykke på plus knappen)</h1>
        </div>
        <div>
          <h1>4. Klik på et tomt sted</h1>
          <img
            className="md:w-1/2"
            src={TomtSpace}
            alt="Kunne ikke loade billede"
          />
        </div>
        <div>
          <h1>5. Tryk på CTRL + V</h1>
        </div>
        <div>
          <button
            id="rename"
            onClick={handleRenameClick}
            type="button"
            className="
              text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl 
              focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 
              font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-10"
          >
            Klik her hvis du ønsker at give mappen et andet navn
          </button>
        </div>
        {showRenameSteps && (
          <div className="space-y-10">
            <div >
              <h1>6. Højre klik på mappen du ønsker at ændre navnet på</h1>
            </div>
            <div>
              <h1>7. Tryk på omdøb</h1>
            </div>
            <div>
              <h1>8. Skriv det nye navn ind og tryk enter</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default KopiereMappe;
