import SecurityCenter from "@/components/SecurityCenter";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sequrity User || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <SecurityCenter />
    </>
  );
};
export default Page;
