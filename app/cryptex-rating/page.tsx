import CryptexRating from "@/components/CryptexRating";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cryptex Rating || Quantum Financial System Crypto App",
  description: "Quantum Financial System Crypto App",
};

const Page: React.FC = () => {
  return (
    <>
      <CryptexRating />
    </>
  );
};
export default Page;
