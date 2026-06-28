import Option from "@/components/Option";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Option || QFS crypto app",
  description: "QFS crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <Option />
    </>
  );
};
export default Page;
