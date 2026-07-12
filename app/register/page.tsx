import Register from "@/components/Register";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register || Quantum Financial System Crypto App",
  description: "Quantum Financial System Crypto App",
};

const Page: React.FC = () => {
  return (
    <>
      <Register />
    </>
  );
};
export default Page;
