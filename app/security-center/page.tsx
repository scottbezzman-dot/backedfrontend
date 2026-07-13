import SecurityCenter from "@/components/SecurityCenter";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sequrity User || Quantum Financial System Crypto App",
  description: "Quantum Financial System Crypto App",
};

const Page: React.FC = () => {
  return (
    <>
      <SecurityCenter />
    </>
  );
};
export default Page;
