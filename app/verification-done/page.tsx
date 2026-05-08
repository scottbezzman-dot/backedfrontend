import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verification Done || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <>
        <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
          <Link href={`/profile`} className="left">
            <i className="icon-left-btn" />
          </Link>
          <h3>Verification</h3>
        </div>
        <div className="pt-45 pb-16">
          <div className="tf-container">
            <a
              href="#"
              className="accent-box bg-menuDark mt-4 d-flex align-items-center justify-content-between"
            >
              <h4>Basic verification (level 1)</h4>
              <i className="icon-round-check md bg-primary flex-shrink-0 text-white" />
            </a>
            <a
              href="#"
              className="accent-box bg-menuDark mt-16 d-flex align-items-center justify-content-between gap-20"
            >
              <h4>Advanced verification (level 2)</h4>
              <i className="icon-round-check md bg-primary flex-shrink-0 text-white" />
            </a>
            <Link href={`/profile`} className="mt-40 tf-btn lg primary">
              Done
            </Link>
          </div>
        </div>
      </>
    </>
  );
};
export default Page;
