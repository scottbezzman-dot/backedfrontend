import VarificationChooiceType from "@/components/varification/VarificationChooiceType";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verification Choose Type || Quantum Financial System Crypto App",
  description: "Quantum Financial System Crypto App",
};

const Page: React.FC = () => {
  return (
    <>
      <VarificationChooiceType />
    </>
  );
};
export default Page;
