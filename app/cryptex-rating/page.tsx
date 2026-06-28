import CryptexRating from "@/components/CryptexRating";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cryptex Rating || QFS crypto app",
  description: "QFS crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <CryptexRating />
    </>
  );
};
export default Page;
