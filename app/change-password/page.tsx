import ChangePass from "@/components/ChangePass";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change Password || Quantum Fianancial System crypto app",
  description: "Quantum Fianancial System crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <ChangePass />
    </>
  );
};
export default Page;
