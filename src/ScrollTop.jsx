

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop({appRef}) {
  const { pathname } = useLocation();

  useEffect(() => {
    appRef.current.scrollIntoView();
  }, [pathname]);

  return null;
}