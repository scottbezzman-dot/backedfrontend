"use client";

import Link from "next/link";
import React, { useState } from "react";
import GoBackButton from "./BackButton";

// Typing the moneyTags array as an array of numbers
const moneyTags: number[] = [50, 100, 200, 500, 1000, 2000];

export default function Recharge() {
  // Typing the state `money` as a number
  const [money, setMoney] = useState<number>(50);

  return (
    <>
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a className="left back-btn">
          <GoBackButton />
        </a>
        <h3>Recharge</h3>
      </div>
      <div className="pt-45 pb-90">
        <div className="tf-container">
          <div className="mt-4 accent-box-v2 bg-menuDark">
            <div className="d-flex justify-content-between align-items-center">
              <span>Your Balance:</span>
              <h5>$0.00</h5>
            </div>
            <div className="mt-12 box-input-field">
              <input
                type="text"
                value={money}
                onChange={(e) => {
                  // Typecasting the input value to number
                  setMoney(Number(e.target.value));
                }}
                required
                className="clear-ip value_input ip-style2"
              />
              <i className="icon-close" />
            </div>
          </div>
          <h5 className="mt-20">Amount Money</h5>
          <ul className="grid-3 gap-12 mt-16">
            {moneyTags.map((amount, index) => (
              <li key={index} onClick={() => setMoney(amount)}>
                <a
                  className={`tag-money text-small ${
                    money === amount ? "active" : ""
                  }`}
                >
                  <span>${amount}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="menubar-footer footer-fixed bg-surface">
        <div className="inner-bar">
          <Link href={`/payment-confirm`} className="tf-btn lg primary">
            Confirm
          </Link>
        </div>
      </div>
    </>
  );
}
