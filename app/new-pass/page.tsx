import NewPass from "@/components/NewPass";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Password || Quantum Financial System Crypto App",
  description: "Quantum Financial System Crypto App",
};

const Page: React.FC = () => {
  return (
    <>
      <NewPass />
    </>
  );
};
export default Page;
