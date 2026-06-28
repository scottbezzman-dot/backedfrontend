import NewPass from "@/components/NewPass";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Password || QFS crypto app",
  description: "QFS crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <NewPass />
    </>
  );
};
export default Page;
