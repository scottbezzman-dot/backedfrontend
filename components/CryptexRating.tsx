"use client";

import { coinData, coins2 } from "@/data/coinItems";
import { useState } from "react";
import GoBackButton from "./BackButton";
import FilterModal from "./FilterModal";

// Type definitions for the options
interface Option {
  label: string;
  isActive: boolean;
  hasLine: boolean;
}

const timeOptions: Option[] = [
  { label: "Today", isActive: true, hasLine: true },
  { label: "5 Minutes", isActive: false, hasLine: true },
  { label: "1 Hour", isActive: false, hasLine: true },
  { label: "This week", isActive: false, hasLine: false },
];

const currencyOptions: Option[] = [
  { label: "24H", isActive: true, hasLine: true },
  { label: "5 Minutes", isActive: false, hasLine: true },
  { label: "1 Hour", isActive: false, hasLine: true },
  { label: "This week", isActive: false, hasLine: true },
  { label: "This month", isActive: false, hasLine: false },
];

const domValues: Option[] = [
  { label: "USDT", isActive: true, hasLine: true },
  { label: "USDC", isActive: false, hasLine: true },
  { label: "Cryptocurrency", isActive: false, hasLine: true },
  { label: "USD", isActive: false, hasLine: false },
];

export default function CryptexRating() {
  const [activeTimeOption, setActiveTimeOption] = useState<Option>(
    timeOptions[0]
  );
  const [activeCurrencyOption, setActiveCurrencyOption] = useState<Option>(
    currencyOptions[0]
  );
  const [domValue, setDomValue] = useState<Option>(domValues[0]);
  return (
    <>
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="#" className="left back-btn">
          <GoBackButton />
        </a>
        <h3>Cryptex rating</h3>
      </div>
      <div className="pt-45 pb-16">
        <div className="tf-container">
          <div className="mt-8">
            <div
              className="swiper swiper-wrapper-r market-swiper line-bt"
              data-space-between={20}
              data-preview="auto"
            >
              <div
                className="swiper-wrapper menu-tab-v3"
                style={{ maxWidth: "100vw", overflow: "scroll" }}
                role="tablist"
              >
                <div
                  className="swiper-slide ms-2 mr-2 nav-link active"
                  data-bs-toggle="tab"
                  data-bs-target="#popular"
                  role="tab"
                  aria-controls="popular"
                  aria-selected="true"
                >
                  Popular
                </div>
                <div
                  className="swiper-slide ms-2 mr-2 nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tokenIncrease"
                  role="tab"
                  aria-controls="tokenIncrease"
                  aria-selected="false"
                >
                  Token Increase
                </div>
                <div
                  className="swiper-slide ms-2 mr-2 nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#cryptocurrency"
                  role="tab"
                  aria-controls="cryptocurrency "
                  aria-selected="false"
                >
                  Discount Cryptocurrency
                </div>
                <div
                  className="swiper-slide ms-2 mr-2 nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#newToken"
                  role="tab"
                  aria-controls="newToken"
                  aria-selected="false"
                >
                  New token
                </div>
                <div
                  className="swiper-slide ms-2 mr-2 nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#capitalization"
                  role="tab"
                  aria-controls="capitalization"
                  aria-selected="false"
                >
                  Market capitalization
                </div>
                <div
                  className="swiper-slide ms-2 mr-2 nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#mass"
                  role="tab"
                  aria-controls="mass"
                  aria-selected="false"
                >
                  Mass
                </div>
              </div>
            </div>
            <div className="tab-content mt-8 mb-16">
              <div
                className="tab-pane fade show active"
                id="popular"
                role="tabpanel"
              >
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex gap-12">
                    <div className="d-flex align-items-center gap-4">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#filterCryptocurrency"
                        className="dom-text"
                      >
                        {domValue.label}
                      </a>
                      <i className="icon-select-down" />
                    </div>
                  </div>
                  <a
                    href="#"
                    className="icon-funnel fs-20 text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#filter"
                  />
                </div>
                <div className="d-flex justify-content-between text-xsmall mt-16">
                  <span>Name</span>
                  <p className="d-flex gap-20">
                    <span>Last price</span>
                    <span>change</span>
                  </p>
                </div>
                <ul className="mt-12">
                  {coinData.map((coin, index) => (
                    <li key={index} className={index > 0 ? "mt-16" : ""}>
                      <a href="#" className="coin-item style-2 gap-12">
                        <h4
                          className={
                            coin.rank <= 3 ? "text-primary" : "text-secondary"
                          }
                        >
                          {coin.rank}
                        </h4>
                        <div className="content">
                          <p>
                            <span className="mb-4 text-button fw-6">
                              {coin.symbol}
                            </span>
                            <span className="text-secondary">{coin.pair}</span>
                          </p>
                          <div className="d-flex align-items-center gap-12">
                            <div className="box-price">
                              <p className="text-small">{coin.price}</p>
                              <p className="mt-4 text-secondary">
                                {coin.usdPrice}
                              </p>
                            </div>
                            <span className={`coin-btn ${coin.changeClass}`}>
                              {coin.change}
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tab-pane fade" id="tokenIncrease" role="tabpanel">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex gap-12">
                    <div className="d-flex align-items-center gap-4">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#filterCryptocurrency"
                        className="dom-text"
                      >
                        USDT
                      </a>
                      <i className="icon-select-down" />
                    </div>
                    <div className="d-flex align-items-center gap-4">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#filterTime"
                        className="text-val-time"
                      >
                        {activeTimeOption.label}
                      </a>
                      <i className="icon-select-down" />
                    </div>
                  </div>
                  <a
                    href="#"
                    className="icon-funnel fs-20 text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#filter"
                  />
                </div>
                <div className="d-flex justify-content-between text-xsmall mt-16">
                  <span>Name</span>
                  <p className="d-flex gap-20">
                    <span>Last price</span>
                    <span>change</span>
                  </p>
                </div>
                <ul className="mt-12">
                  {coins2.map((coin, index) => (
                    <li key={coin.id} className={index === 0 ? "" : "mt-16"}>
                      <a href="#" className="coin-item style-2 gap-12">
                        <h4 className={coin.textClass}>{coin.id}</h4>
                        <div className="content">
                          <p>
                            <span className="mb-4 text-button fw-6">
                              {coin.name}
                            </span>
                            <span className="text-secondary">{coin.pair}</span>
                          </p>
                          <div className="d-flex align-items-center gap-12">
                            <div className="box-price">
                              <p className="text-small">{coin.price}</p>
                              <p className="mt-4 text-secondary">
                                {coin.usdPrice}
                              </p>
                            </div>
                            <span className="coin-btn increase">
                              {coin.change}
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="cryptocurrency"
                role="tabpanel"
              >
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex gap-12">
                    <div className="d-flex align-items-center gap-4">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#filterCryptocurrency"
                        className="dom-text"
                      >
                        USDT
                      </a>
                      <i className="icon-select-down" />
                    </div>
                  </div>
                  <a
                    href="#"
                    className="icon-funnel fs-20 text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#filter"
                  />
                </div>
                <div className="d-flex justify-content-between text-xsmall mt-16">
                  <span>Name</span>
                  <p className="d-flex gap-20">
                    <span>Last price</span>
                    <span>change</span>
                  </p>
                </div>
                <ul className="mt-12">
                  {coinData.map((coin, index) => (
                    <li key={index} className={index > 0 ? "mt-16" : ""}>
                      <a href="#" className="coin-item style-2 gap-12">
                        <h4
                          className={
                            coin.rank <= 3 ? "text-primary" : "text-secondary"
                          }
                        >
                          {coin.rank}
                        </h4>
                        <div className="content">
                          <p>
                            <span className="mb-4 text-button fw-6">
                              {coin.symbol}
                            </span>
                            <span className="text-secondary">{coin.pair}</span>
                          </p>
                          <div className="d-flex align-items-center gap-12">
                            <div className="box-price">
                              <p className="text-small">{coin.price}</p>
                              <p className="mt-4 text-secondary">
                                {coin.usdPrice}
                              </p>
                            </div>
                            <span className={`coin-btn ${coin.changeClass}`}>
                              {coin.change}
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tab-pane fade" id="newToken" role="tabpanel">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-4">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#filterCryptocurrency"
                      className="dom-text"
                    >
                      USDT
                    </a>
                    <i className="icon-select-down" />
                  </div>
                  <a
                    href="#"
                    className="icon-funnel fs-20 text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#filter"
                  />
                </div>
                <div className="d-flex justify-content-between text-xsmall mt-16">
                  <span>Name</span>
                  <p className="d-flex gap-20">
                    <span>Last price</span>
                    <span>change</span>
                  </p>
                </div>
                <ul className="mt-12">
                  {coins2.map((coin, index) => (
                    <li key={coin.id} className={index === 0 ? "" : "mt-16"}>
                      <a href="#" className="coin-item style-2 gap-12">
                        <h4 className={coin.textClass}>{coin.id}</h4>
                        <div className="content">
                          <p>
                            <span className="mb-4 text-button fw-6">
                              {coin.name}
                            </span>
                            <span className="text-secondary">{coin.pair}</span>
                          </p>
                          <div className="d-flex align-items-center gap-12">
                            <div className="box-price">
                              <p className="text-small">{coin.price}</p>
                              <p className="mt-4 text-secondary">
                                {coin.usdPrice}
                              </p>
                            </div>
                            <span className="coin-btn increase">
                              {coin.change}
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="capitalization"
                role="tabpanel"
              >
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex gap-12">
                    <div className="d-flex align-items-center gap-4">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#filterCryptocurrency"
                        className="dom-text"
                      >
                        USDT
                      </a>
                      <i className="icon-select-down" />
                    </div>
                  </div>
                  <a
                    href="#"
                    className="icon-funnel fs-20 text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#filter"
                  />
                </div>
                <div className="d-flex justify-content-between text-xsmall mt-16">
                  <span>Name</span>
                  <p className="d-flex gap-20">
                    <span>Last price</span>
                    <span>change</span>
                  </p>
                </div>
                <ul className="mt-12">
                  {coinData.map((coin, index) => (
                    <li key={index} className={index > 0 ? "mt-16" : ""}>
                      <a href="#" className="coin-item style-2 gap-12">
                        <h4
                          className={
                            coin.rank <= 3 ? "text-primary" : "text-secondary"
                          }
                        >
                          {coin.rank}
                        </h4>
                        <div className="content">
                          <p>
                            <span className="mb-4 text-button fw-6">
                              {coin.symbol}
                            </span>
                            <span className="text-secondary">{coin.pair}</span>
                          </p>
                          <div className="d-flex align-items-center gap-12">
                            <div className="box-price">
                              <p className="text-small">{coin.price}</p>
                              <p className="mt-4 text-secondary">
                                {coin.usdPrice}
                              </p>
                            </div>
                            <span className={`coin-btn ${coin.changeClass}`}>
                              {coin.change}
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tab-pane fade" id="mass" role="tabpanel">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex gap-12">
                    <div className="d-flex align-items-center gap-4">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#filterCryptocurrency"
                        className="dom-text"
                      >
                        USDT
                      </a>
                      <i className="icon-select-down" />
                    </div>
                    <div className="d-flex align-items-center gap-4">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#filterTime2"
                        className="text-val-currency"
                      >
                        {activeCurrencyOption.label}
                      </a>
                      <i className="icon-select-down" />
                    </div>
                  </div>
                  <a
                    href="#"
                    className="icon-funnel fs-20 text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#filter"
                  />
                </div>
                <div className="d-flex justify-content-between text-xsmall mt-16">
                  <p className="flex-1">Name</p>
                  <p className="d-flex justify-content-between flex-st2">
                    <span>24h</span>
                    <span>Change/Last price</span>
                  </p>
                </div>
                <ul className="mt-12">
                  {coinData.map((coin, index) => (
                    <li key={index} className={index > 0 ? "mt-16" : ""}>
                      <a href="#" className="coin-item style-2 gap-12">
                        <h4
                          className={
                            coin.rank <= 3 ? "text-primary" : "text-secondary"
                          }
                        >
                          {coin.rank}
                        </h4>
                        <div className="content">
                          <p>
                            <span className="mb-4 text-button fw-6">
                              {coin.symbol}
                            </span>
                            <span className="text-secondary">{coin.pair}</span>
                          </p>
                          <div className="d-flex align-items-center gap-12">
                            <div className="box-price">
                              <p className="text-small">{coin.price}</p>
                              <p className="mt-4 text-secondary">
                                {coin.usdPrice}
                              </p>
                            </div>
                            <span className={`coin-btn ${coin.changeClass}`}>
                              {coin.change}
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* filter popular */}
      <FilterModal />
      <>
        {/* filter cryptocurrency */}
        <div className="modal fade action-sheet" id="filterCryptocurrency">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <span>Cryptocurrency</span>
                <span className="icon-cancel" data-bs-dismiss="modal" />
              </div>
              <ul className="mt-20 pb-16">
                {domValues.map((item, index) => (
                  <li
                    key={index}
                    className={item.hasLine ? "line-bt" : ""}
                    data-bs-dismiss="modal"
                    onClick={() => setDomValue(item)}
                  >
                    <div
                      className={`d-flex justify-content-between gap-8 text-large item-check dom-value ${
                        domValue == item ? "active" : ""
                      }`}
                    >
                      {item.label} <i className="icon icon-check-circle" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* filter time */}
        <div className="modal fade action-sheet" id="filterTime">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <span>Cryptocurrency</span>
                <span className="icon-cancel" data-bs-dismiss="modal" />
              </div>
              <ul className="mt-20 pb-16">
                {timeOptions.map((option, index) => (
                  <li
                    key={index}
                    className={option.hasLine ? "line-bt" : ""}
                    data-bs-dismiss="modal"
                    onClick={() => setActiveTimeOption(option)}
                  >
                    <div
                      className={`d-flex justify-content-between gap-8 text-large item-check time-val ${
                        activeTimeOption == option ? "active" : ""
                      }`}
                    >
                      {option.label} <i className="icon icon-check-circle" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* filter time 2*/}
        <div className="modal fade action-sheet" id="filterTime2">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <span>Cryptocurrency</span>
                <span className="icon-cancel" data-bs-dismiss="modal" />
              </div>
              <ul className="mt-20 pb-16">
                {currencyOptions.map((option, index) => (
                  <li
                    key={index}
                    className={option.hasLine ? "line-bt" : ""}
                    data-bs-dismiss="modal"
                    onClick={() => setActiveCurrencyOption(option)}
                  >
                    <div
                      className={`d-flex justify-content-between gap-8 text-large item-check currency-val ${
                        activeCurrencyOption == option ? "active" : ""
                      }`}
                    >
                      {option.label} <i className="icon icon-check-circle" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
