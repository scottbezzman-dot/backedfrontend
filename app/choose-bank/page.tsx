import Footer1 from "@/components/footers/Footer1";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { bankList } from "@/data/banks";
import GoBackButton from "@/components/BackButton";

interface BankItem {
  src: string;
  label: string;
  className: string;
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Choice Bank || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="#" className="left back-btn">
          <GoBackButton />
        </a>
        <h3>Choose bank</h3>
      </div>
      <div className="pt-45 pb-80">
        <div className="tf-container">
          <div className="mt-8 search-box box-input-field">
            <i className="icon-search" />
            <input
              type="text"
              placeholder="Search Bank"
              required
              className="clear-ip"
            />
            <i className="icon-close" />
          </div>
          <h5 className="mt-20">All bank</h5>
          <ul className="mt-16 accent-box-v4 bg-menuDark">
            {bankList.map((item: BankItem, index: number) => (
              <li key={index} className={item.className}>
                <Link
                  href="/recharge"
                  className="card-item style-2 text-button"
                >
                  <Image
                    alt="img"
                    className="img"
                    src={item.src}
                    width={42}
                    height={42}
                  />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default Page;
