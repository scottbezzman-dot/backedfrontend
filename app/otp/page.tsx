import Otp from "@/components/Otp";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Otp || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <Otp />
    </>
  );
};
export default Page;
