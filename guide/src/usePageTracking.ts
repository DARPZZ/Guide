import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const sendPageViewToGTM = () => {
      const newUrl = window.location.pathname + window.location.search + window.location.hash;
      
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'pageview',
          page: newUrl,
        });
      }
    };
    sendPageViewToGTM();

    window.addEventListener('hashchange', sendPageViewToGTM);

    return () => {
      window.removeEventListener('hashchange', sendPageViewToGTM);
    };
  }, [location]);
};

export default usePageTracking;
