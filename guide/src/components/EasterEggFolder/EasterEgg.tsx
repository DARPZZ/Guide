import React from 'react'

function EasterEgg({cancleEasterEgg}) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
    <iframe
      width="420"
      height="315"
      src="https://www.youtube.com/embed/bWcASV2sey0?autoplay=1&mute=0"
      allow="autoplay"
      className="pb-5 mt-10"
    ></iframe>
    <button
      className=" md:w-1/4 w-full bg-blue-500 hover:bg-pink-400 text-white text-center py-2 px-4 rounded-md transition duration-300"
      onClick={cancleEasterEgg}
    >
      Stop
    </button>
  </div>
  )
}

export default EasterEgg