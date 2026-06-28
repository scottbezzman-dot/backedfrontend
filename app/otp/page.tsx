import Otp from "@/components/Otp";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Otp || Quantum Fianancial System crypto app",
  description: "Quantum Fianancial System crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <Otp />
    </>
  );
};
export default Page;
