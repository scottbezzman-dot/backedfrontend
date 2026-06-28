import UserInfo from "@/components/UserInfo";
import React from "react";

import type { Metadata } from "next";
import Footer1 from "@/components/footers/Footer1";

export const metadata: Metadata = {
  title: "User Info || QFS crypto app",
  description: "QFS crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <UserInfo />
      <Footer1 />
    </>
  );
};
export default Page;
