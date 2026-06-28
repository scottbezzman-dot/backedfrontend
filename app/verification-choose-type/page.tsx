import VarificationChooiceType from "@/components/varification/VarificationChooiceType";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verification Choose Type || QFS crypto app",
  description: "QFS crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <VarificationChooiceType />
    </>
  );
};
export default Page;
