import { useEffect, useState } from "react";

const useSreenSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const mediaQuerySmall = window.matchMedia("(max-width: 480px)");
    const mediaQueryMedium = window.matchMedia("(max-width: 1024px)");

    const handleViewportChange = () => {
      setIsSmallScreen(mediaQuerySmall.matches);
      setIsMediumScreen(mediaQueryMedium.matches && !mediaQuerySmall.matches);
    };

    mediaQuerySmall.addEventListener("change", handleViewportChange);
    mediaQueryMedium.addEventListener("change", handleViewportChange);

    setIsSmallScreen(mediaQuerySmall.matches);
    setIsMediumScreen(mediaQueryMedium.matches);

    return () => {
      mediaQuerySmall.removeEventListener("change", handleViewportChange);
      mediaQueryMedium.removeEventListener("change", handleViewportChange);
    };
  }, []);


  return {isSmallScreen, isMediumScreen};
};

export default useSreenSize;
