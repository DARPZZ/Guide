import React, { useEffect, useState } from 'react';
import Download4 from '../../assets/download (4).jpg'
const ImageComp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={Download4}
      alt="Description"
      className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    />
  );
};

export default ImageComp;
