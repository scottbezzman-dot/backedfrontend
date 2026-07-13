import ChangePass from "@/components/ChangePass";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change Password || Quantum Financial System Crypto App",
  description: "Quantum Financial System Crypto App",
};

const Page: React.FC = () => {
  return (
    <>
      <ChangePass />
    </>
  );
};
export default Page;
