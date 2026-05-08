import React from "react";
import Image from "next/image";
import { coinItems } from "@/data/coinItems";
import GoBackButton from "@/components/BackButton";

interface CoinItem {
  alt: string;
  className: string;
  src: string;
  width: number;
  height: number;
  title: string;
  abbreviation: string;
  price: string;
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Choice Cryptocurrency || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};
const Page: React.FC = () => {
  return (
    <>
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="#" className="left back-btn">
          <GoBackButton />
        </a>
        <h3>Choose cryptocurrency</h3>
      </div>
      <div className="pt-45 pb-16">
        <div className="tf-container">
          <div className="mt-8 search-box box-input-field">
            <i className="icon-search" />
            <input
              type="text"
              placeholder="Search cryptocurrency"
              required
              className="clear-ip"
            />
            <i className="icon-close" />
          </div>
          <h5 className="mt-12">Popular search</h5>
          <ul className="mt-16">
            {coinItems.map((coin: CoinItem, index: number) => (
              <li key={index} className={coin.className}>
                <a href="#" className="coin-item style-2 gap-12">
                  <Image
                    alt={coin.alt}
                    className="img"
                    src={coin.src}
                    width={coin.width}
                    height={coin.height}
                  />
                  <div className="content">
                    <div className="title">
                      <p className="mb-4 text-large">{coin.title}</p>
                      <span className="text-secondary text-small">
                        {coin.abbreviation}
                      </span>
                    </div>
                    <span className="text-small">{coin.price}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Page;
