import Process from "@/components/coin/Process";
import Footer1 from "@/components/footers/Footer1";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Earn || Quantum Fianancial System crypto app",
  description: "Quantum Fianancial System crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <div className="header-style2 fixed-top d-flex align-items-center justify-content-between bg-surface">
        <h3>Earn</h3>
        <i
          className="icon-funnel text-white"
          data-bs-toggle="modal"
          data-bs-target="#filter"
        />
      </div>
      <Process />
      <Footer1 />
    </>
  );
};
export default Page;
