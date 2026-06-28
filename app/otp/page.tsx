import Otp from "@/components/Otp";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Otp || QFS crypto app",
  description: "QFS crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <Otp />
    </>
  );
};
export default Page;
