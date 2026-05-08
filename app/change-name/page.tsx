import ChangeName from "@/components/ChangeName";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change Name || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <ChangeName />
    </>
  );
};
export default Page;
