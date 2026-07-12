import React from "react";
import Image from "next/image";
import Link from "next/link";
import Login from "@/components/Login";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login || Quantum Financial System Crypto App",
  description: "Quantum Fianancial System Crypto App",
};

const Page: React.FC = () => {
  return (
    <>
      {/* /preload */}
      <Login />
    </>
  );
};
export default Page;
