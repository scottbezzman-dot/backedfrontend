import VarificationPersonal from "@/components/varification/VarificationPersonal";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verification Personal || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <VarificationPersonal />
    </>
  );
};
export default Page;
