import Exchange from "@/components/Exchange";
import Footer1 from "@/components/footers/Footer1";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exchange Market || QFS crypto app",
  description: "QFS crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <Exchange />
      <Footer1 />
    </>
  );
};
export default Page;
