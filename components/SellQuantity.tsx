"use client";

import Image from "next/image";
import Link from "next/link";
import GoBackButton from "./BackButton";

export default function SellQuantity() {
  return (
    <>
      <div className="header fixed-top bg-surface d-flex justify-content-between align-items-center">
        <a href="#" className="left back-btn">
          <GoBackButton />
        </a>
        <Link href={`/home`} className="right">
          <i className="icon-home2 fs-20" />
        </Link>
      </div>
      <div className="pt-45 pb-16">
        <div className="tf-container">
          <div className="mt-4 coin-item style-2 gap-8">
            <Image
              alt="img"
              className="img"
              src="/images/coin/coin-1.jpg"
              width={80}
              height={80}
            />
            <h5>Sell BTC</h5>
          </div>
          <div className="mt-16 d-flex justify-content-between">
            <span>I want to pay</span>
            <span className="text-primary d-flex align-items-center gap-4">
              By quantity <i className="icon-leftRight" />
            </span>
          </div>
          <div className="mt-8 group-ip-select">
            <input type="text" placeholder="Please enter quantity" />
            <div className="select-wrapper">
              <select className="tf-select">
                <option value="">VND</option>
                <option value="">BTC</option>
              </select>
            </div>
          </div>
          <ul className="mt-8 d-flex gap-8">
            <li>
              <a href="#" className="tag-sm dark">
                25%
              </a>
            </li>
            <li>
              <a href="#" className="tag-sm dark">
                50%
              </a>
            </li>
            <li>
              <a href="#" className="tag-sm dark">
                75%
              </a>
            </li>
            <li>
              <a href="#" className="tag-sm dark">
                100%
              </a>
            </li>
          </ul>
          <p className="mt-8">188.308-300.000,000 USD</p>
          <Link href={`/choose-payment`} className="tf-btn lg primary mt-40">
            Sell
          </Link>
        </div>
      </div>
    </>
  );
}
