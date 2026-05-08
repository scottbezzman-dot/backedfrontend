"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import React from "react";
import Link from "next/link";
import GoBackButton from "@/components/BackButton";

function ChoosePaymentContent() {
  const searchParams = useSearchParams();
  const symbol = searchParams.get("symbol");
  const Name = searchParams.get("name");

  return (
    <div>
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="#" className="left back-btn">
          <GoBackButton />
        </a>
        <h3>Choose payment method</h3>
      </div>

      <div className="pt-45 pb-16 tf-container">
        {symbol ? (
          <div className="mt-20">
            <h5 className="text-center mb-12">Live {Name} Price</h5>
            <div className="d-flex justify-content-center">
              <div
                style={{
                  width: "100%",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                }}
              >
                <iframe
                  src={symbol}
                  width="100%"
                  height="400"
                  style={{
                    border: "none",
                    borderRadius: "8px",
                    display: "block",
                  }}
                  title={`${symbol} Price Chart`}
                />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center">No coin selected</p>
        )}

        {/* Payment Options */}
        <ul className="mt-20">
          <li>
            <Link
              href={`/recharge`}
              className="accent-box item-check-style3 bg-menuDark"
            >
              <label className="content d-flex justify-content-between">
                <div className="flex-grow-1">
                  <span className="text-small">Wallet transactions</span>
                  <h5 className="mt-8 d-flex align-items-center gap-4">
                    <i className="icon-wallet icon" /> Wallet transfer
                  </h5>
                </div>
                {/* <h4>1200.0$</h4> */}
              </label>
            </Link>
          </li>
          <li className="mt-12">
            <Link
              href={`/choose-bank`}
              className="accent-box item-check-style3 bg-menuDark"
            >
              <label className="content">
                <div className="flex-grow-1">
                  <span className="text-small">Card/bank account</span>
                  <h5 className="mt-8 d-flex align-items-center gap-4">
                    <i className="icon-wallet icon" /> Credit/debit card
                  </h5>
                </div>
                {/* <h4>1200.0$</h4> */}
              </label>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function ChoosePayment() {
  return (
    <Suspense fallback={<div>Loading payment page...</div>}>
      <ChoosePaymentContent />
    </Suspense>
  );
}
