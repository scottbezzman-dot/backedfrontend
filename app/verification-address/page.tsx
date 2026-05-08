import AddressVarification from "@/components/varification/AddressVarification";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verification Address || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <AddressVarification />
    </>
  );
};
export default Page;
