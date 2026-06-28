import CryptexRating from "@/components/CryptexRating";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cryptex Rating || Quantum Fianancial System crypto app",
  description: "Quantum Fianancial System crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <CryptexRating />
    </>
  );
};
export default Page;
