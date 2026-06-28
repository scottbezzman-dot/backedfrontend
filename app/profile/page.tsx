import Profile from "@/components/Profile";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile || QFS crypto app",
  description: "QFS crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <Profile />
    </>
  );
};
export default Page;
