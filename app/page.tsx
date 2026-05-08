import React from "react";

import type { Metadata } from "next";
import WelcomePage from "./start-boarding/page";
import MainPage from "@/components/mainPage/MainPage";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Welcome || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

export default function page() {
  return (
    <>
      {/* <PreviewPage /> */}
      {/* <WelcomePage /> */}
      <MainPage />
      <Script id="tawk-to" strategy="afterInteractive">
        {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/68a47eda3af4381923c0391d/1j318v1mm';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
        `}
      </Script>

    </>
  );
}
