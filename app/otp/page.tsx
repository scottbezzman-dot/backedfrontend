import Otp from "@/components/Otp";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Otp || Quantum Financial System Crypto App",
  description: "Quantum Financial System Crypto App",
};

const Page: React.FC = () => {
  return (
    <>
      <Otp />
    </>
  );
};
export default Page;
