import GoBackButton from "@/components/BackButton";
import Link from "next/link";
import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Freeze || Backedby Quantum crypto app",
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
          <h3>Option</h3>
        </div>
        <div className="pt-45 pb-16">
          <div className="tf-container">
            <ul className="mt-4">
              <li>
                <Link
                  href={`/tell-us-more`}
                  className="d-flex align-items-center"
                >
                  <div className="inner">
                    <h5>Account freeze</h5>
                    <p className="mt-4 text-large text-secondary">
                      Your account will be temporarily deactivated. To
                      reactivate, start by signing in again.
                    </p>
                  </div>
                  <i className="icon-arr-right fs-12 text-secondary" />
                </Link>
              </li>
              <li className="mt-16">
                <a
                  href="#notiAccount"
                  className="d-flex align-items-center"
                  data-bs-toggle="modal"
                >
                  <div className="inner">
                    <h5>Close account</h5>
                    <p className="mt-4 text-large text-secondary">
                      Once you close your account, it will be permanently closed
                      and cannot be restored.
                    </p>
                  </div>
                  <i className="icon-arr-right fs-12 text-secondary" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    </>
  );
};
export default Page;
