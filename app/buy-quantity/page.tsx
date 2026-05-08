import React from "react";
import Link from "next/link";
import Image from "next/image";
import GoBackButton from "@/components/BackButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Quantity || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <>
        <div className="header fixed-top bg-surface d-flex justify-content-between align-items-center">
          <button type="button" className="btn btn-primary btn-lg"></button>
          <button type="button" className="btn btn-secondary btn-lg"></button>
          <button type="button" className="btn btn-secondary btn-lg"></button>
        </div>
        <div className="header2 fixed-top bg-surface d-flex justify-content-between align-items-center">
          <button type="button" className="btn btn-primary btn-lg"></button>
          <button type="button" className="btn btn-secondary btn-lg"></button>
          <button type="button" className="btn btn-secondary btn-lg"></button>
        </div>
        <div className="header3 fixed-top bg-surface d-flex justify-content-between align-items-center">
          <button type="button" className="btn btn-primary btn-lg"></button>
        </div>
      </>
    </>
  );
};
export default Page;
