import CryptexRating from "@/components/CryptexRating";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cryptex Rating || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <CryptexRating />
    </>
  );
};
export default Page;
