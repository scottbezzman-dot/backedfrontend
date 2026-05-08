import Profile from "@/components/Profile";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <Profile />
    </>
  );
};
export default Page;
