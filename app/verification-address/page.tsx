import AddressVarification from "@/components/varification/AddressVarification";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verification Address || Quantum Financial System Crypto App",
  description: "Quantum Financial System Crypto App",
};

const Page: React.FC = () => {
  return (
    <>
      <AddressVarification />
    </>
  );
};
export default Page;
