"use client";

import { useEffect } from "react";

const AOSWrapper = ({ children, aosConfig = {} }) => {
  useEffect(() => {
    // Initialize AOS if available
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 1500,
          offset: 50,
          once: true,
          ...aosConfig,
        });
      });
    }
  }, [aosConfig]);

  return <>{children}</>;
};

export default AOSWrapper;
