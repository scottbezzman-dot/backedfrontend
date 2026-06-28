import Option from "@/components/Option";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Option || Quantum Fianancial System crypto app",
  description: "Quantum Fianancial System crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <Option />
    </>
  );
};
export default Page;
