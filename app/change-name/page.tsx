import ChangeName from "@/components/ChangeName";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change Name || QFS crypto app",
  description: "QFS crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <ChangeName />
    </>
  );
};
export default Page;
