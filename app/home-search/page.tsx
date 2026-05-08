import { coins } from "@/data/coinItems";
import React from "react";

interface Coin {
  id: number; // Changed from string to number
  symbol: string;
  starClass: string;
  fireIcon?: boolean;
  rate: string;
  change: string;
  changeClass: string;
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Search || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};
const Page: React.FC = () => {
  return (
    <>
      <div className="header-style2 fixed-top bg-surface d-flex justify-content-between align-items-center gap-12">
        <div className="mt-4 search-box box-input-field flex-grow-1">
          <i className="icon-search" />
          <input
            type="text"
            placeholder="Looking for crypto"
            required
            className="clear-ip"
          />
          <i className="icon-close" />
        </div>
        <a href="#" className="left back-btn">
          Cancel
        </a>
      </div>
      <div className="pt-68 pb-16">
        <div className="tf-container">
          <h5 className="mt-12">Popular search</h5>
          <ul className="mt-16">
            {coins.map((coin: Coin, index: number) => (
              <li key={coin.id} className={index === 0 ? "" : "mt-16"}>
                <a href="#" className="coin-item justify-content-between">
                  <div className="d-flex gap-8 align-items-center">
                    <span className={`icon-star fs-20 ${coin.starClass}`} />
                    <p>
                      <span className="mb-4 text-button fw-6 ">
                        {coin.symbol}
                      </span>
                      <span className="text-secondary">/ USDT</span>
                    </p>
                    {coin.fireIcon && (
                      <span className="icon-fire fs-16 text-red" />
                    )}
                  </div>
                  <div className="text-end">
                    <p className="text-button fw-6">{coin.rate}</p>
                    <p className={`mt-4 ${coin.changeClass}`}>{coin.change}</p>
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
