import React from "react";
import Link from "next/link";
import Recharge from "@/components/Recharge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recharge || Quantum Financial System Crypto App",
  description: "Quantum Financial System Crypto App",
};

const Page: React.FC = () => {
  return (
    <>
      <Recharge />
    </>
  );
};
export default Page;
