import Profile from "@/components/Profile";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile || Quantum Financial System Crypto App",
  description: "Quantum Financial System Crypto App",
};

const Page: React.FC = () => {
  return (
    <>
      <Profile />
    </>
  );
};
export default Page;
