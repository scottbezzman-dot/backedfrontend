import ResetPass from "@/components/ResetPass";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Pass || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <ResetPass />
    </>
  );
};
export default Page;
