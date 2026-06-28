import React from "react";
import Link from "next/link";
import Recharge from "@/components/Recharge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recharge || QFS crypto app",
  description: "QFS crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <Recharge />
    </>
  );
};
export default Page;
