import Exchange from "@/components/Exchange";
import Footer1 from "@/components/footers/Footer1";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exchange Market || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <Exchange />
      <Footer1 />
    </>
  );
};
export default Page;
