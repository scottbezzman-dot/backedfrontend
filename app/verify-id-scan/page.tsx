import React from "react";
import Link from "next/link";
import GoBackButton from "@/components/BackButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Id Scan || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <>
        <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
          <a href="#" className="left back-btn">
            <GoBackButton />
          </a>
          <h3>Verification</h3>
        </div>
        <div className="pt-45 pb-16">
          <div className="tf-container">
            <h3 className="mt-4 text-center">Please verify your identity</h3>
            <ul className="mt-20">
              <li className="d-flex align-items-center gap-8">
                <i className="icon-round-check sm bg-white flex-shrink-0" />
                <p className="text-small text-white">
                  Take a picture of your document.
                </p>
              </li>
              <li className="mt-12 d-flex align-items-center gap-8">
                <i className="icon-round-check sm bg-white flex-shrink-0" />
                <p className="text-small text-white">Take selfies</p>
              </li>
            </ul>
            <Link href={`/face-id`} className="tf-btn lg primary mt-40">
              Start
            </Link>
            <p className="mt-12 text-center">
              By clicking "Get Started", I consent to Avicoin's income,
              processing and sharing of my personal information, which may
              include biometric data, as set forth in
              <span className="text-white">the Privacy Notice.</span>
            </p>
          </div>
        </div>
      </>
    </>
  );
};
export default Page;
