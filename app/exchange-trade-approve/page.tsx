import ExchangeApprove from "@/components/ExchangeApprove";
import Footer1 from "@/components/footers/Footer1";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exchange Trade Approve || QFS crypto app",
  description: "QFS crypto app",
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
