import React from "react";
import Link from "next/link";
import Image from "next/image";
import SellQuantity from "@/components/SellQuantity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Quantity || QFS crypto app",
  description: "QFS crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <SellQuantity />
    </>
  );
};
export default Page;
