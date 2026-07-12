import UserInfo from "@/components/UserInfo";
import React from "react";

import type { Metadata } from "next";
import Footer1 from "@/components/footers/Footer1";

export const metadata: Metadata = {
  title: "User Info || Quantum Financial System Crypto App",
  description: "Quantum Fianancial System Crypto App",
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
