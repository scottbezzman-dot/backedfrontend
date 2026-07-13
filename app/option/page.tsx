import Option from "@/components/Option";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Option || Quantum Financial System Crypto App",
  description: "Quantum Financial System crypto App",
};

const Page: React.FC = () => {
  return (
    <>
      <Option />
    </>
  );
};
export default Page;
