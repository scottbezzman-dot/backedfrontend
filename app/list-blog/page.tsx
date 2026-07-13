import Blogs from "@/components/Blogs";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "List Blog || Quantum Financial System Crypto App",
  description: "Quantum Financial System Crypto App",
};

const Page: React.FC = () => {
  return (
    <>
      <Blogs />
    </>
  );
};
export default Page;
