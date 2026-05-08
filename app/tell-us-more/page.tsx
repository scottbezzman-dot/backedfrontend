import React from "react";
import Link from "next/link";
import GoBackButton from "@/components/BackButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tell Us More || Backedby Quantum crypto app",
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
          <h3>Tell us more</h3>
        </div>
        <div className="pt-45 pb-16">
          <div className="tf-container">
            <h4 className="mt-4">Why do you want to freeze your account?</h4>
            <ul className="mt-20">
              <li className="tf-list-item-v2 mt-20 bg-menuDark">
                <label
                  className="text-large text-white flex-grow-1"
                  htmlFor="radio1"
                >
                  This account is not safe so i want to freeze it temporarily
                </label>
                <input
                  type="radio"
                  className="tf-radio flex-shrink-0"
                  name="radio"
                  id="radio1"
                  defaultChecked
                />
              </li>
              <li className="tf-list-item-v2 mt-20 bg-menuDark">
                <label
                  className="text-large text-white flex-grow-1"
                  htmlFor="radio2"
                >
                  I don't want to use this account anymore
                </label>
                <input
                  type="radio"
                  className="tf-radio flex-shrink-0"
                  name="radio"
                  id="radio2"
                />
              </li>
              <li className="tf-list-item-v2 mt-20 bg-menuDark">
                <label
                  className="text-large text-white flex-grow-1"
                  htmlFor="radio3"
                >
                  I want to use another platform
                </label>
                <input
                  type="radio"
                  className="tf-radio flex-shrink-0"
                  name="radio"
                  id="radio3"
                />
              </li>
              <li className="tf-list-item-v2 mt-20 bg-menuDark">
                <label
                  className="text-large text-white flex-grow-1"
                  htmlFor="radio4"
                >
                  Other
                </label>
                <input
                  type="radio"
                  className="tf-radio flex-shrink-0"
                  name="radio"
                  id="radio4"
                />
              </li>
            </ul>
            <Link href={`/log-in`} className="mt-40 tf-btn lg primary">
              Confirm
            </Link>
          </div>
        </div>
      </>
    </>
  );
};
export default Page;
