import ChangePass from "@/components/ChangePass";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change Password || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <ChangePass />
    </>
  );
};
export default Page;
