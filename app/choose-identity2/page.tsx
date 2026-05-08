import React from "react";
import Link from "next/link";
import GoBackButton from "@/components/BackButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chooice Identity 02 || Backedby Quantum crypto app",
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
            <h4 className="mt-4">Choose your identity verifications</h4>
            <ul className="mt-20">
              <li className="tf-list-item-v2 mt-20 bg-menuDark">
                <Link
                  href={`/identity-verification`}
                  className="text-button text-white"
                >
                  Take a photo of your citizenship
                </Link>
                <input
                  type="radio"
                  className="tf-radio flex-shrink-0"
                  name="radio"
                  id="radio1"
                />
              </li>
              <li className="tf-list-item-v2 mt-20 bg-menuDark">
                <Link
                  href={`/verification-personal`}
                  className="text-button text-white"
                >
                  Enter your citizenship information
                </Link>
                <input
                  type="radio"
                  className="tf-radio flex-shrink-0"
                  name="radio"
                  id="radio2"
                  defaultChecked
                />
              </li>
            </ul>
          </div>
        </div>
      </>
    </>
  );
};
export default Page;
