import ResetPass from "@/components/ResetPass";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Pass || Quantum Fianancial System crypto app",
  description: "Quantum Fianancial System crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <ResetPass />
    </>
  );
};
export default Page;
