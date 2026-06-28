"use client";

import { useState } from "react";
import GoBackButton from "./BackButton";

const languages: string[] = [
  "English",
  "Vietnamese",
  "Bahasa Indonesia",
  "China",
  "Japanese",
  "Brasil",
  "Francais",
  "Deutsch",
  "Italiano",
  "Polski",
  "Cestina",
  "Romania",
  "Portugal",
  "Espana",
  "India",
];
const currencies: string[] = [
  "USD",
  "CNY",
  "RUB",
  "JPY",
  "EUR",
  "THB",
  "VND",
  "IDR",
  "PHP",
  "INR",
  "ARS",
  "SAR",
  "TRY",
  "AED",
  "IQD",
];
const colors: string[] = [
  "Green increase, red decrease",
  "Red increase, green decrease",
];
const times: string[] = ["00:00 HKT", "00:00 UTC", "24 Hours"];
const marketOptions: string[] = ["Mass", "Amount of money"];

export default function Option() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    languages[0]
  );
  const [selectedcurrency, setSelectedcurrency] = useState<string>(
    currencies[0]
  );
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const [selectedTime, setSelectedTime] = useState<string>(times[0]);
  const [selectedMarket, setSelectedMarket] = useState<string>(
    marketOptions[0]
  );
  return (
    <>
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="#" className="left back-btn">
          <GoBackButton />
        </a>
        <h3>Option</h3>
      </div>
      <div className="pt-45 pb-16">
        <div className="tf-container">
          <ul className="mt-4 pb-16 line-bt">
            <li data-bs-toggle="modal" data-bs-target="#language">
              <a
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <p className="text-button fw-6">Language</p>
                <div className="text-secondary text-small d-flex gap-8 align-items-center">
                  <span className="text-val-language">{selectedLanguage}</span>
                  <i className="icon-arr-right fs-12 text-secondary" />
                </div>
              </a>
            </li>
            <li data-bs-toggle="modal" data-bs-target="#currency">
              <a
                href="#"
                className="mt-16 d-flex justify-content-between align-items-center"
              >
                <p className="text-button fw-6">Currency</p>
                <div className="text-secondary text-small d-flex gap-8 align-items-center">
                  <span className="text-val-currency">{selectedcurrency} </span>
                  <i className="icon-arr-right fs-12 text-secondary" />
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mt-16 d-flex justify-content-between align-items-center"
              >
                <p className="text-button fw-6">Stablecoin option</p>
                <div className="text-secondary text-small d-flex gap-8 align-items-center">
                  <span> USDT </span>
                  <i className="icon-arr-right fs-12 text-secondary" />
                </div>
              </a>
            </li>
          </ul>
          <ul className="pt-16 pb-16 line-bt">
            <li>
              <a
                href="#"
                className="d-flex justify-content-between align-items-center"
              >
                <p className="text-button fw-6">Display</p>
                <div className="text-secondary text-small d-flex gap-8 align-items-center">
                  <span>Dark</span>
                  <i className="icon-arr-right fs-12 text-secondary" />
                </div>
              </a>
            </li>
            <li data-bs-toggle="modal" data-bs-target="#color">
              <a
                href="#"
                className="mt-16 d-flex justify-content-between align-items-center"
              >
                <p className="text-button fw-6">Chart color</p>
                <div className="text-secondary text-small d-flex gap-8 align-items-center">
                  <span className="text-val-color">{selectedColor}</span>
                  <i className="icon-arr-right fs-12 text-secondary" />
                </div>
              </a>
            </li>
            <li data-bs-toggle="modal" data-bs-target="#changeTime">
              <a
                href="#"
                className="mt-16 d-flex justify-content-between align-items-center"
              >
                <p className="text-button fw-6">Change time</p>
                <div className="text-secondary text-small d-flex gap-8 align-items-center">
                  <span className="text-val-time">{selectedTime} </span>
                  <i className="icon-arr-right fs-12 text-secondary" />
                </div>
              </a>
            </li>
            <li data-bs-toggle="modal" data-bs-target="#market">
              <a
                href="#"
                className="mt-16 d-flex justify-content-between align-items-center"
              >
                <p className="text-button fw-6">Market indicator</p>
                <div className="text-secondary text-small d-flex gap-8 align-items-center">
                  <span className="text-val-market">{selectedMarket}</span>
                  <i className="icon-arr-right fs-12 text-secondary" />
                </div>
              </a>
            </li>
            <li>
              <div className="mt-16 d-flex justify-content-between align-items-center">
                <p className="text-button fw-6">Haptic feedback</p>
                <input
                  className="tf-switch-check"
                  type="checkbox"
                  defaultValue="checkbox"
                  name="check"
                />
              </div>
            </li>
          </ul>
          <a
            href="#"
            className="pt-16 pb-16 d-flex justify-content-between align-items-center"
          >
            <p className="text-button fw-6">Message settings</p>
            <span className="icon-arr-right fs-12 text-secondary" />
          </a>
        </div>
      </div>
      {/* modal language */}
      <div className="modal fade modalRight" id="language">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
              <span className="left" data-bs-dismiss="modal" aria-hidden="true">
                <i className="icon-left-btn" />
              </span>
              <h3>Language</h3>
            </div>
            <div className="overflow-auto pt-45 pb-16">
              <div className="tf-container">
                <ul className="mt-4 m--16">
                  {languages.map((language, index) => (
                    <li
                      onClick={() => setSelectedLanguage(language)}
                      key={index}
                      className={`mt-4 ${index === 0 ? "" : "line-bt"}`}
                    >
                      <div
                        className={`d-flex justify-content-between gap-8 text-large item-check-style2 language-val ${
                          selectedLanguage == language ? "active" : ""
                        } `}
                      >
                        {language} <i className="icon icon-check-circle" />
                      </div>
                    </li>
                  ))}
                </ul>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal currency */}
      <div className="modal fade modalRight" id="currency">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
              <span className="left" data-bs-dismiss="modal" aria-hidden="true">
                <i className="icon-left-btn" />
              </span>
              <h3>Display currency</h3>
            </div>
            <div className="overflow-auto pt-45 pb-16">
              <div className="tf-container">
                <ul className="mt-4 m--16">
                  {currencies.map((currency, index) => (
                    <li
                      onClick={() => setSelectedcurrency(currency)}
                      key={index}
                      className={`mt-4 ${index === 0 ? "" : "line-bt"}`}
                    >
                      <div
                        className={`d-flex justify-content-between gap-8 text-large item-check-style2 currency-val  ${
                          selectedcurrency == currency ? "active" : ""
                        } `}
                      >
                        {currency} <i className="icon icon-check-circle" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal color */}
      <div className="modal fade action-sheet" id="color">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span>Chart color</span>
              <span className="icon-cancel" data-bs-dismiss="modal" />
            </div>
            <ul className="mt-20 pb-16">
              {colors.map((item, index) => (
                <li
                  key={index}
                  data-bs-dismiss="modal"
                  onClick={() => setSelectedColor(item)}
                >
                  <div
                    className={`d-flex justify-content-between ${
                      index !== 0 ? "mt-4" : ""
                    } gap-8 text-large item-check ${
                      selectedColor === item ? "active" : ""
                    } color-val`}
                  >
                    {item} <i className="icon icon-check-circle" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* modal time  */}
      <div className="modal fade action-sheet" id="changeTime">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span>Time</span>
              <span className="icon-cancel" data-bs-dismiss="modal" />
            </div>
            <ul className="mt-20 pb-16">
              {times.map((time, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedTime(time)}
                  className={`line-bt ${index === 1 ? "active" : ""}`}
                  data-bs-dismiss="modal"
                >
                  <div
                    className={`d-flex justify-content-between gap-8 text-large item-check time-val ${
                      selectedTime == time ? "active" : ""
                    } `}
                  >
                    {time} <i className="icon icon-check-circle" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* modal market */}
      <div className="modal fade action-sheet" id="market">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span>market</span>
              <span className="icon-cancel" data-bs-dismiss="modal" />
            </div>
            <ul className="mt-20 pb-16">
              {marketOptions.map((option, index) => (
                <li
                  onClick={() => setSelectedMarket(option)}
                  key={index}
                  className={`line-bt ${index === 0 ? "active" : ""}`}
                  data-bs-dismiss="modal"
                >
                  <div
                    className={`d-flex justify-content-between gap-8 text-large item-check market-val ${
                      selectedMarket == option ? "active" : ""
                    } `}
                  >
                    {option} <i className="icon icon-check-circle" />
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
