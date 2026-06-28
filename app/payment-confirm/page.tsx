import PaymentConfirm from "@/components/PaymentConfirm";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Confirm || Quantum Fianancial System crypto app",
  description: "Quantum Fianancial System crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <PaymentConfirm />
    </>
  );
};
export default Page;
