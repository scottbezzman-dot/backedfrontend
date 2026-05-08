import Blogs from "@/components/Blogs";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "List Blog || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <Blogs />
    </>
  );
};
export default Page;
