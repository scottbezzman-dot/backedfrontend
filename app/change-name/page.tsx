import ChangeName from "@/components/ChangeName";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change Name || Quantum Financial System Crypto App",
  description: "Quantum Financial System Crypto App",
};

const Page: React.FC = () => {
  return (
    <>
      <ChangeName />
    </>
  );
};
export default Page;
