import ExchangeNotEnough from "@/components/ExchangeNotEnough";
import Footer1 from "@/components/footers/Footer1";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exchange Trade Not Enough || Quantum Fianancial System crypto app",
  description: "Quantum Fianancial System crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <div className="app-wallet">
        <ExchangeNotEnough />
        <Footer1 />
      </div>
    </>
  );
};
export default Page;
