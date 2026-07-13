import VarificationPersonal from "@/components/varification/VarificationPersonal";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verification Personal || Quantum Financial System Crypto App",
  description: "Quantum Financial System Crypto App",
};

const Page: React.FC = () => {
  return (
    <>
      <VarificationPersonal />
    </>
  );
};
export default Page;
