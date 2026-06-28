import PaymentConfirm from "@/components/PaymentConfirm";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Confirm || QFS crypto app",
  description: "QFS crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <PaymentConfirm />
    </>
  );
};
export default Page;
