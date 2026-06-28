import ResetPass from "@/components/ResetPass";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Pass || QFS crypto app",
  description: "QFS crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <ResetPass />
    </>
  );
};
export default Page;
