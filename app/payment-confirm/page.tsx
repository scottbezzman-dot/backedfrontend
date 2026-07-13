import PaymentConfirm from "@/components/PaymentConfirm";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Confirm || Quantum Financial System Crypto App",
  description: "Quantum Financial System Crypto App",
};

const Page: React.FC = () => {
  return (
    <>
      <PaymentConfirm />
    </>
  );
};
export default Page;
