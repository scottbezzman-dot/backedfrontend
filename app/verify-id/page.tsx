import React from "react";
import Link from "next/link";
import GoBackButton from "@/components/BackButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Id || Backedby Quantum crypto app",
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
            <ul className="mt-4">
              <li>
                <h3>Verify your ID and selfie.</h3>
                <p className="text-small">
                  To verify your identity and prevent fraud, you need to
                  complete the following steps
                </p>
              </li>
              <li className="mt-20">
                <h3>Upload your ID</h3>
                <p className="text-small">
                  Please make sure the issue and expiration dates on your ID,
                  your name and date of birth are clear.
                </p>
              </li>
              <li className="mt-20">
                <h3>Take a selfie</h3>
                <p className="text-small">
                  Please make sure the photo is taken in a well-lit space and
                  shows your full face.
                </p>
              </li>
            </ul>
            <Link
              href={`/verify-id-scan`}
              className="tf-btn lg secondary mt-40"
            >
              Next
            </Link>
          </div>
        </div>
      </>
    </>
  );
};
export default Page;
