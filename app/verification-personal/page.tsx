import VarificationPersonal from "@/components/varification/VarificationPersonal";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verification Personal || Quantum Fianancial System crypto app",
  description: "Quantum Fianancial System crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <VarificationPersonal />
    </>
  );
};
export default Page;
