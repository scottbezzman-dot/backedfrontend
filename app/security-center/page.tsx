import SecurityCenter from "@/components/SecurityCenter";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sequrity User || Quantum Fianancial System crypto app",
  description: "Quantum Fianancial System crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <SecurityCenter />
    </>
  );
};
export default Page;
