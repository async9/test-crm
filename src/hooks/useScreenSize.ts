import { useEffect, useState } from 'react';

import {
  screenWidthL,
  screenWidthM,
  screenWidthS,
  screenWidthXS,
} from '@/constants';

function useScreenSize() {
  const [isMobileXs, setIsMobileXs] = useState(
    window.innerWidth < screenWidthXS
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < screenWidthS);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= screenWidthM);
  const [isDesktopLg, setIsDesktopLg] = useState(
    window.innerWidth >= screenWidthL
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileXs(window.innerWidth < screenWidthXS);
      setIsMobile(window.innerWidth < screenWidthS);
      setIsDesktop(window.innerWidth >= screenWidthM);
      setIsDesktopLg(window.innerWidth >= screenWidthL);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobileXs, isMobile, isDesktop, isDesktopLg };
}

export default useScreenSize;
