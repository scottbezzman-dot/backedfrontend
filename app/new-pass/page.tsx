import NewPass from "@/components/NewPass";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Password || Quantum Fianancial System crypto app",
  description: "Quantum Fianancial System crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <NewPass />
    </>
  );
};
export default Page;
