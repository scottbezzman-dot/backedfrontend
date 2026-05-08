"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import { coinItems2 } from "@/data/coinItems";
// Define types for the coin and slide data
interface CoinData {
  id: number;
  href: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  title: string;
  totalValue: string;
  currentValue: string;
  change: string;
  changeClass: string;
  marginTop: boolean;
}

interface SlideData {
  iconClass: string;
  iconBg: string;
  active: boolean;
  linkText: string;
  description: string;
}

const coinData: CoinData[] = [
  {
    id: 1,
    href: "/choose-payment",
    imgSrc: "/images/coin/coin-6.jpg",
    imgWidth: 64,
    imgHeight: 65,
    title: "ETH",
    totalValue: "$360,6M",
    currentValue: "$1.878,80",
    change: "-1,62%",
    changeClass: "decrease",
    marginTop: false,
  },
  {
    id: 2,
    href: "/choose-payment",
    imgSrc: "/images/coin/coin-7.jpg",
    imgWidth: 59,
    imgHeight: 60,
    title: "arb_ETH",
    totalValue: "$132,18M",
    currentValue: "$1.878,80",
    change: "+1,62%",
    changeClass: "increase",
    marginTop: true,
  },
  {
    id: 3,
    href: "/choose-payment",
    imgSrc: "/images/coin/coin-8.jpg",
    imgWidth: 64,
    imgHeight: 65,
    title: "WBTC",
    totalValue: "$50,56M",
    currentValue: "$30.001,96",
    change: "-1,64%",
    changeClass: "decrease",
    marginTop: true,
  },
  {
    id: 4,
    href: "/choose-payment",
    imgSrc: "/images/coin/coin-3.jpg",
    imgWidth: 75,
    imgHeight: 75,
    title: "ARB",
    totalValue: "$31,55M",
    currentValue: "$1,11",
    change: "+3,71%",
    changeClass: "increase",
    marginTop: true,
  },
  {
    id: 5,
    href: "/choose-payment",
    imgSrc: "/images/coin/coin-9.jpg",
    imgWidth: 64,
    imgHeight: 65,
    title: "WETH",
    totalValue: "$24,34M",
    currentValue: "$1.878,56",
    change: "-1,62%",
    changeClass: "decrease",
    marginTop: true,
  },
  {
    id: 6,
    href: "/choose-payment",
    imgSrc: "/images/coin/coin-10.jpg",
    imgWidth: 64,
    imgHeight: 65,
    title: "MATIC",
    totalValue: "$19,36M",
    currentValue: "$0,666",
    change: "-4,42%",
    changeClass: "decrease",
    marginTop: true,
  },
];

const slidesData: SlideData[] = [
  {
    iconClass: "icon-book",
    iconBg: "bg-icon1",
    active: true,
    linkText: "Set up your wallet",
    description:
      "Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
  },
  {
    iconClass: "icon-wallet-money",
    iconBg: "bg-icon2",
    active: false,
    linkText: "Create Your Collection",
    description:
      "Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
  },
];

export default function Process() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeCoinIndex, setCoinActiveIndex] = useState<number>(0);

  return (
    <>
      <div className="pt-55 pb-80">
        <div className="tf-container">
          <div className="mt-4 search-box box-input-field">
            <Link href={`/home-search`} className="icon-search" />
            <input
              type="text"
              placeholder="Cryptocurrency search, protocol"
              required
              className="clear-ip"
            />
            <i className="icon-close" />
          </div>
          <h5 className="mt-20">Create &amp; sell your Wallet</h5>
          <Swiper
            className="swiper tf-swiper swiper-wrapper-r mt-12"
            spaceBetween={12} // data-space-between
            slidesPerView={1.3} // data-preview
            breakpoints={{
              640: {
                // For tablet
                slidesPerView: 2.3, // data-tablet
              },
              1024: {
                // For desktop
                slidesPerView: 3, // data-desktop
              },
            }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div
                  onClick={() => setActiveIndex(index)}
                  className={`accent-box-v5 bg-menuDark ${
                    activeIndex == index ? "active" : ""
                  }`}
                >
                  <span className={`icon-box ${slide.iconBg}`}>
                    <i className={slide.iconClass} />
                  </span>
                  <div className="mt-12">
                    <a href="#" className="text-small">
                      {slide.linkText}
                    </a>
                    <p className="mt-4">{slide.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-20">
            <ul className="menu-tab-v3" role="tablist">
              <li
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#cryptocurrency"
                role="tab"
                aria-controls="cryptocurrency"
                aria-selected="true"
              >
                Stablecoin
              </li>
              <li
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#stablecoin"
                role="tab"
                aria-controls="stablecoin"
                aria-selected="false"
              >
                Single Cryptocurrency
              </li>
              <li
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#vault"
                role="tab"
                aria-controls="vault"
                aria-selected="false"
              >
                Vault
              </li>
            </ul>
            <div className="tab-content mt-16 mb-16">
              <div
                className="tab-pane fade show active"
                id="cryptocurrency"
                role="tabpanel"
              >
                <ul>
                  {coinData.map((coin) => (
                    <li key={coin.id} className={coin.marginTop ? "mt-16" : ""}>
                      <Link
                        href={coin.href}
                        className="coin-item style-2 gap-12"
                      >
                        <Image
                          alt="img"
                          className="img"
                          src={coin.imgSrc}
                          width={coin.imgWidth}
                          height={coin.imgHeight}
                        />
                        <div className="content">
                          <div className="title">
                            <p className="mb-4 text-button text-capitalize">{coin.title==="tether" ? "USDT (Tether)" : coin.title  }</p>
                            <span className="text-secondary">
                              {coin.totalValue}
                            </span>
                          </div>
                          <div className="d-flex align-items-center gap-12">
                            <span className="text-small">
                              {coin.currentValue}
                            </span>
                            <span className={`coin-btn ${coin.changeClass}`}>
                              {coin.change}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tab-pane fade" id="stablecoin" role="tabpanel">
                <ul>
                  {coinData.map((coin) => (
                    <li key={coin.id} className={coin.marginTop ? "mt-16" : ""}>
                      <Link
                        href={coin.href}
                        className="coin-item style-2 gap-12"
                      >
                        <Image
                          alt="img"
                          className="img"
                          src={coin.imgSrc}
                          width={coin.imgWidth}
                          height={coin.imgHeight}
                        />
                        <div className="content">
                          <div className="title">
                            <p className="mb-4 text-button text-capitalize">{coin.title==="tether" ? "USDT (Tether)" : coin.title  }</p>
                            <span className="text-secondary">
                              {coin.totalValue}
                            </span>
                          </div>
                          <div className="d-flex align-items-center gap-12">
                            <span className="text-small">
                              {coin.currentValue}
                            </span>
                            <span className={`coin-btn ${coin.changeClass}`}>
                              {coin.change}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tab-pane fade" id="vault" role="tabpanel">
                <ul>
                  {coinData.map((coin) => (
                    <li key={coin.id} className={coin.marginTop ? "mt-16" : ""}>
                      <Link
                        href={coin.href}
                        className="coin-item style-2 gap-12"
                      >
                        <Image
                          alt="img"
                          className="img"
                          src={coin.imgSrc}
                          width={coin.imgWidth}
                          height={coin.imgHeight}
                        />
                        <div className="content">
                          <div className="title">
                            <p className="mb-4 text-button text-capitalize">{coin.title==="tether" ? "USDT (Tether)" : coin.title  }</p>
                            <span className="text-secondary">
                              {coin.totalValue}
                            </span>
                          </div>
                          <div className="d-flex align-items-center gap-12">
                            <span className="text-small">
                              {coin.currentValue}
                            </span>
                            <span className={`coin-btn ${coin.changeClass}`}>
                              {coin.change}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade action-sheet" id="filter">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span>Filters</span>
              <span className="icon-cancel" data-bs-dismiss="modal"></span>
            </div>
            <ul className="mt-20 pb-16">
              {coinItems2.map((coin, index) => (
                <li
                  onClick={() => setCoinActiveIndex(index)}
                  key={index}
                  className={index != 0 ? `mt-4 ` : ""}
                >
                  <div
                    className={`item-check coin-item style-2 gap-8 ${
                      index == activeCoinIndex ? "active" : ""
                    }`}
                  >
                    <Image
                      alt="img"
                      className="img"
                      src={coin.src}
                      width={coin.width}
                      height={coin.height}
                    />
                    <p className="content text-large">
                      {coin.name}
                      <i className="icon icon-check-circle"></i>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
