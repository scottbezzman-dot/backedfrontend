import Register from "@/components/Register";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register || Quantum Fianancial System crypto app",
  description: "Quantum Fianancial System crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <Register />
    </>
  );
};
export default Page;
