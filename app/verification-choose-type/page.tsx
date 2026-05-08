import VarificationChooiceType from "@/components/varification/VarificationChooiceType";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verification Choose Type || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <VarificationChooiceType />
    </>
  );
};
export default Page;
