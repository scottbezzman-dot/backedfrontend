import VarificationChooiceType from "@/components/varification/VarificationChooiceType";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verification Choose Type || Quantum Fianancial System crypto app",
  description: "Quantum Fianancial System crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <VarificationChooiceType />
    </>
  );
};
export default Page;
