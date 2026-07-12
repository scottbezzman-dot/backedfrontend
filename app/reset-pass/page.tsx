import ResetPass from "@/components/ResetPass";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Pass || Quantum Financial System Crypto App",
  description: "Quantum Financial System Crypto App",
};

const Page: React.FC = () => {
  return (
    <>
      <ResetPass />
    </>
  );
};
export default Page;
