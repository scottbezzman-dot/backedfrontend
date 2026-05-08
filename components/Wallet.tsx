"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { coinsData, members, people, transactions } from "@/data/wallet";
import { notifications } from "@/data/notifications";
import { AiOutlineSwap } from "react-icons/ai";
import { MdBackup } from "react-icons/md";
import apiClient from "@/lib/axios-config";

const accountOptions: string[] = ["Account 1", "Account 2"];

type Transaction = {
  src: string;
  alt: string;
  title: string;
  time: string;
  change: string;
  amount: string | null; // Allow null as a valid type
};

interface Person {
  alt: string;
  src: string;
  name: string;
}

interface Coin {
  imgAlt: string;
  imgSrc: string;
  title: string;
  time: string;
  priceChange?: string;
  price?: string;
}

type Member = {
  imgSrc: string;
  name: string;
  // Include other properties like src, altts if they are required
  // If `src` and `altts` are optional, you can make them optional
  src?: string;
  altts?: string;
};

export default function Wallet() {
  const [accountOption, setAccountOption] = useState<string>(accountOptions[0]);
  const [coins, setCoins] = useState<any>();

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const res = await apiClient.get('/api/wallet/get_coin_price');
        if (res.data.status_code) {
          setCoins(res.data);
        }
      } catch (err) {
        console.error("Error in API call:", err);
  // alert(err.response?.data?.msg || "Something went wrong");
      }
    };
    fetchWallets();
  }, []);
  
  return (
    <>
      <div className="pt-68 pb-80">
        <div className="bg-menuDark tf-container">
          <div className="pt-12 pb-12 mt-4">
            <h5>
              <span className="text-primary">My Wallet</span>
              {/* <a
                href="#"
                className="choose-account"
                data-bs-toggle="modal"
                data-bs-target="#accountWallet"
              >
                <span className="dom-text">{accountOption} </span> &nbsp;
                <i className="icon-select-down" />
              </a> */}
            </h5>
            <h1 className="mt-16">
              <a href="#">${(coins ? coins?.total_value : 0)?.toFixed(2)}</a>
            </h1>
            <ul className="mt-16 grid-4 m--16">
              <li>
                <Link
                  href={`/buy`}
                  className="tf-list-item d-flex flex-column gap-8 align-items-center"
                >
                  <span className="box-round bg-surface d-flex justify-content-center align-items-center">
                    <i className="icon icon-wallet" />
                  </span>
                  Buy
                </Link>
              </li>
              <li>
                <Link
                  href={`/swap`}
                  className="tf-list-item d-flex flex-column gap-8 align-items-center"
                >
                  <span className="box-round bg-surface d-flex justify-content-center align-items-center">
                    <AiOutlineSwap style={{ width: '32px', height: '32px' }} className="text-white" />
                  </span>
                  Swap
                </Link>
              </li>
              <li>
                <Link
                  href={`/exchange-market`}
                  className="tf-list-item d-flex flex-column gap-8 align-items-center"
                >
                  <span className="box-round bg-surface d-flex justify-content-center align-items-center">
                    <i className="icon icon-way" />
                  </span>
                  Send
                </Link>
              </li>
              <li>
                <Link
                  href={`/linkwallet`}
                  className="tf-list-item d-flex flex-column gap-8 align-items-center"
                >
                  <span className="box-round bg-surface d-flex justify-content-center align-items-center">
                    <MdBackup style={{ width: '32px', height: '32px' }} className="text-white" />
                  </span>
                  Backup
                </Link>
              </li>
              {/* <li>
                <Link
                  href={`/deposit`}
                  className="tf-list-item d-flex flex-column gap-8 align-items-center"
                >
                  <span className="box-round bg-surface d-flex justify-content-center align-items-center">
                    <i className="icon icon-way2" />
                  </span>
                  Receive
                </Link>
              </li> */}
              {/* <li data-bs-toggle="modal" data-bs-target="#walletHistory">
                <a
                  href="#"
                  className="tf-list-item d-flex flex-column gap-8 align-items-center"
                >
                  <span className="box-round bg-surface d-flex justify-content-center align-items-center">
                    <i className="icon icon-history" />
                  </span>
                  History
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        {/* <div className="bg-menuDark tf-container">
          <div className="pt-12 pb-12 mt-4">
            <div className="d-flex justify-content-between align-items-center">
              <h5>Latest recipient</h5>
              <a
                href="#recipient"
                data-bs-toggle="modal"
                className="text-secondary"
              >
                View All
              </a>
            </div>
            <ul className="mt-16 grid-5 gap-12">
              {people.map((person: Person, index: number) => (
                <li key={index}>
                  <Link
                    href={`/choose-payment`}
                    className="tf-list-item d-flex flex-column gap-4 align-items-center"
                  >
                    <Image
                      alt={person.alt}
                      className="box-round"
                      src={person.src}
                      width={90}
                      height={90}
                    />
                    <p className="text-center">{person.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
        <div className="bg-menuDark tf-container">
          <div className="tf-tab pt-12 mt-4">
            <div className="tab-slide">
              <ul className="bg-menuDark nav nav-item wallet-tabs" role="tablist" style={{ width: '100%', display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                <li className="item-slide-effect" />
                <li className="nav-item active" role="presentation">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#history"
                  >
                    History
                  </button>
                </li>
                {/* <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#market"
                  >
                    Market
                  </button>
                </li> */}
              </ul>
            </div>
            <div className="tab-content pt-16 pb-16">
              <div
                className="tab-pane fade active show"
                id="history"
                role="tabpanel"
              >
                {transactions.length > 0 ? (
                  <ul>
                    {transactions.map(
                      (transaction: Transaction, index: number) => (
                        <li key={index} className={index !== 0 ? "mt-8" : ""}>
                          <Link
                            href={`/choose-payment`}
                            className="coin-item style-1 gap-12 bg-surface"
                          >
                            <Image
                              alt={transaction.alt}
                              className="img"
                              src={transaction.src}
                              width={80}
                              height={80}
                            />
                            <div className="content">
                              <div className="title">
                                <p className="mb-4 text-large">
                                  {transaction.title}
                                </p>
                                <span className="text-secondary">
                                  {transaction.time}
                                </span>
                              </div>
                              {transaction.amount ? (
                                <div className="box-price">
                                  <p className="text-small mb-4">
                                    <span className="text-primary">
                                      {transaction.change}
                                    </span>
                                  </p>
                                  <p className="text-end">
                                    <span className="text-red">
                                      {transaction.amount}
                                    </span>
                                  </p>
                                </div>
                              ) : (
                                <p className="text-small">
                                  <span className="text-red">
                                    {transaction.change}
                                  </span>
                                </p>
                              )}
                            </div>
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  <p className="text-center text-secondary mt-6">History Not Found</p>
                )}
              </div>
              {/* <div className="tab-pane fade" id="market" role="tabpanel">
                <ul>
                  {transactions.map((transaction, index) => (
                    <li key={index} className={index !== 0 ? "mt-8" : ""}>
                      <Link
                        href={`/choose-payment`}
                        className="coin-item style-1 gap-12 bg-surface"
                      >
                        <Image
                          alt={transaction.alt}
                          className="img"
                          src={transaction.src}
                          width={80}
                          height={80}
                        />
                        <div className="content">
                          <div className="title">
                            <p className="mb-4 text-large">
                              {transaction.title}
                            </p>
                            <span className="text-secondary">
                              {transaction.time}
                            </span>
                          </div>
                          {transaction.amount ? (
                            <div className="box-price">
                              <p className="text-small mb-4">
                                <span className="text-primary">
                                  {transaction.change}
                                </span>
                              </p>
                              <p className="text-end">
                                <span className="text-red">
                                  {transaction.amount}
                                </span>
                              </p>
                            </div>
                          ) : (
                            <p className="text-small">
                              <span className="text-red">
                                {transaction.change}
                              </span>
                            </p>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* account */}
      <div className="modal fade action-sheet" id="accountWallet">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span>Wallet</span>
              <span className="icon-cancel" data-bs-dismiss="modal" />
            </div>
            <ul className="mt-20 pb-16">
              <li
                data-bs-dismiss="modal"
                onClick={() => setAccountOption("Account 1")}
              >
                <div
                  className={`d-flex justify-content-between gap-8 text-large item-check ${accountOption == accountOptions[0] ? "active" : ""
                    }  dom-value`}
                >
                  Account 1 <i className="icon icon-check-circle" />
                </div>
              </li>
              <li
                onClick={() => setAccountOption("Account 2")}
                className="mt-4"
                data-bs-dismiss="modal"
              >
                <div
                  className={`d-flex justify-content-between gap-8 text-large item-check ${accountOption == accountOptions[1] ? "active" : ""
                    }  dom-value`}
                >
                  Account 2 <i className="icon icon-check-circle" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* history */}
      <div className="modal fade modalRight" id="walletHistory">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
              <span className="left" data-bs-dismiss="modal" aria-hidden="true">
                <i className="icon-left-btn" />
              </span>
              <h3>History</h3>
              <span className="right text-white btn-filter-history">
                <i className="icon-funnel" />
              </span>
            </div>
            <div className="overflow-auto pt-45 pb-16">
              <div className="tf-container">
                <ul className="mt-4">
                  {coinsData.map((coin: Coin, index: number) => (
                    <li key={index} className={index > 0 ? "mt-8" : ""}>
                      <a
                        href="#"
                        className="coin-item style-1 gap-12 bg-menuDark"
                      >
                        <Image
                          alt={coin.imgAlt}
                          className="img"
                          src={coin.imgSrc}
                          width={80}
                          height={80}
                        />
                        <div className="content">
                          <div className="title">
                            <p className="mb-4 text-large">{coin.title}</p>
                            <span className="text-secondary">{coin.time}</span>
                          </div>
                          {coin.priceChange && (
                            <div className="box-price">
                              <p className="text-small mb-4">
                                <span className="text-primary">
                                  {coin.priceChange}
                                </span>
                              </p>
                              {coin.price && (
                                <p className="text-end">
                                  <span className="text-red">{coin.price}</span>
                                </p>
                              )}
                            </div>
                          )}
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
      {/* filter history */}

      {/* recipient */}
      <div className="modal fade modalRight" id="recipient">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
              <span className="left" data-bs-dismiss="modal" aria-hidden="true">
                <i className="icon-left-btn" />
              </span>
              <h3>Latest recipient</h3>
            </div>
            <div className="overflow-auto pt-45 pb-16">
              <div className="tf-container">
                <ul className="mt-12 grid-4 rg-16 cg-25">
                  {members.map((member: Member, index: number) => (
                    <li key={index}>
                      <Link
                        href={`/choose-payment`}
                        className="tf-list-item d-flex flex-column gap-4 align-items-center"
                      >
                        <Image
                          alt="img"
                          className="box-round"
                          src={member.imgSrc}
                          width={90}
                          height={90}
                        />
                        <p className="text-center">{member.name}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* notification */}
      <div className="modal fade modalRight" id="notification">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
              <span className="left" data-bs-dismiss="modal" aria-hidden="true">
                <i className="icon-left-btn" />
              </span>
              <h3>Notification</h3>
            </div>
            <div className="overflow-auto pt-45 pb-16">
              <div className="tf-container">
                <ul className="mt-12">
                  {notifications.map((notification, index) => (
                    <li className={notification.additionalClasses} key={index}>
                      <a href="#" className="noti-item bg-menuDark">
                        <div
                          className={`pb-8 ${notification.link ? "line-bt" : ""
                            }`}
                        >
                          <p
                            className={`text-button fw-6 ${notification.isSecondary ? "text-secondary" : ""
                              }`}
                          >
                            {notification.content}
                          </p>
                          {/* {notification.hasIcon && (
                            <i className="dot-lg bg-primary" />
                          )} */}
                        </div>
                        {notification.link && (
                          <Link
                            className="d-block mt-8"
                            style={{ color: 'blue', textDecoration: 'underline' }}
                            href={notification.link}
                          >
                            Click to Check
                          </Link>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
