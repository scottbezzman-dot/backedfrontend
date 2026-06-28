import AddressVarification from "@/components/varification/AddressVarification";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verification Address || Quantum Fianancial System crypto app",
  description: "Quantum Fianancial System crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <AddressVarification />
    </>
  );
};
export default Page;
