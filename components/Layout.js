import React, { useEffect } from "react";
import TawkTo from "tawkto-react";

export default function Layout({ children, childWrapperStyles }) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const tawk = new TawkTo("628514dd7b967b1179900ad3", "1g3btj0ld");
      tawk.onStatusChange((status) => {
        console.log("tawk initiated, status: ", status);
      });
    }
  }, []);

  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffd700" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      {children}
    </>
  );
}
