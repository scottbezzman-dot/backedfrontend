import ExchangeApprove from "@/components/ExchangeApprove";
import Footer1 from "@/components/footers/Footer1";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exchange Trade Approve || Quantum Financial System Crypto App",
  description: "Quantum Financial System Crypto App",
};

const Page: React.FC = () => {
  return (
    <>
      <div className="app-wallet">
        <ExchangeApprove />
        <Footer1 />
      </div>
    </>
  );
};
export default Page;
