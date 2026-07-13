import Otp2 from "@/components/Otp2";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Otp 02 || Quantum Financial System Crypto App",
  description: "Quantum Financial System Crypto App",
};

const Page: React.FC = () => {
  return (
    <>
      <Otp2 />
    </>
  );
};
export default Page;
