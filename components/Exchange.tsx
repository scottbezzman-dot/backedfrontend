"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AxiosError } from "axios";
import apiClient from "@/lib/axios-config";
import { coins4 } from "@/data/coinItems";

interface Wallet {
  id: number;
  name: string;
  is_active: number;
  unique_id: {
    [coinName: string]: {
      usd: number;
      usd_24h_change: number;
    } | null;
  };
  icon: string;
  link: string;
  market_cap: string;
}

export default function Rating() {
  const [coins, setCoins] = useState<Wallet[]>([]);
  const [filteredCoins, setFilteredCoins] = useState<Wallet[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCoin, setSelectedCoin] = useState<typeof coins4[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const res = await apiClient.get('/api/wallet/get_wallets');
        if (res.data.status_code) {
          setCoins(res.data.data);
          setFilteredCoins(res.data.data);
        }
      } catch (err) {
        const error = err as AxiosError<{ msg: string }>;
  // alert(error.response?.data?.msg || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchWallets();
  }, []);

  // Filter coins based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredCoins(coins);
    } else {
      const filtered = coins.filter((coin) => {
        const coinName = Object.keys(coin.unique_id)[0];
        return (
          coinName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          coin.market_cap.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setFilteredCoins(filtered);
    }
  }, [searchTerm, coins]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <>
      <div className="header-style2 fixed-top d-flex align-items-center justify-content-between bg-surface">
        <h3 className="d-flex gap-12">
          <a href="#">Market</a>
          <Link href={`/exchange-trade`} className="text-secondary">
            Trade
          </Link>
        </h3>
        <i
          className="icon-funnel text-white"
          data-bs-toggle="modal"
          data-bs-target="#filter"
        />
      </div>

      <div className="pt-55 pb-80">
        <div className="tf-container">
          <div className="mt-4 search-box box-input-field">
            <Link href={`/home-search`} className="icon-search" />
            <input
              type="text"
              placeholder="Swap over 210.00 tokens on more than 10 chains"
              required
              className="clear-ip"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <i 
                className="icon-close" 
                onClick={handleClearSearch}
                style={{ cursor: 'pointer' }}
                title="Clear search"
              />
            )}
          </div>

          <div className="mt-20">
            <div className="line-bt">
              <div
                className="swiper swiper-wrapper-r market-swiper"
                data-space-between={20}
                style={{ maxWidth: "100vw", overflowX: "auto" }}
                data-preview="auto"
              >
                <div className="swiper-wrapper menu-tab-v3" role="tablist">
                  <div
                    className="swiper-slide ms-2 mr-2 nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#all"
                    role="tab"
                    aria-controls="all"
                    aria-selected="true"
                  >
                    All
                  </div>
                  {/* <div
                    className="swiper-slide ms-2 mr-2 nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#favorites"
                    role="tab"
                    aria-controls="favorites"
                    aria-selected="true"
                  >
                    <i className="icon-star" />
                    Favorites
                  </div>
                  <div
                    className="swiper-slide ms-2 mr-2 nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#attractive"
                    role="tab"
                    aria-controls="attractive"
                    aria-selected="false"
                  >
                    Attractive
                  </div>
                  <div
                    className="swiper-slide ms-2 mr-2 nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#meme"
                    role="tab"
                    aria-controls="meme"
                    aria-selected="false"
                  >
                    Meme
                  </div>
                  <div
                    className="swiper-slide ms-2 mr-2 nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#staking"
                    role="tab"
                    aria-controls="staking"
                    aria-selected="false"
                  >
                    Staking
                  </div> */}
                </div>
              </div>
            </div>

            <div className="tab-content mt-8">
              <div className="tab-pane fade show active" id="favorites">
                <div className="d-flex justify-content-between">
                  Name
                  <p className="d-flex gap-8">
                    <span>Last price</span>
                    <span>Change</span>
                  </p>
                </div>

                {filteredCoins.length === 0 ? (
                  <div className="text-center p-4 text-secondary">
                    {searchTerm ? `No coins found matching "${searchTerm}"` : "No coins available"}
                  </div>
                ) : (
                  <ul className="mt-16">
                    {filteredCoins.map((coin) => {
                      const coinName = Object.keys(coin.unique_id)[0];
                      const coinData = coin.unique_id[coinName];
                      const coins = coin.name;
                      const coinlink = coin.link;
                      const price = coinData ? `$${coinData.usd.toLocaleString()}` : "N/A";
                      const change =
                        coinData && coinData.usd_24h_change != null
                          ? `${coinData.usd_24h_change.toFixed(2)}%`
                          : "N/A";
                      const changeClass =
                        coinData && coinData.usd_24h_change >= 0
                          ? "increase"
                          : "decrease";

                      return (
                        <li key={coin.id} className="mt-[64px]">
                          <Link
                            // href={`/choose-payment?symbol=${encodeURIComponent(
                            //   coinlink
                            // )}&name=${encodeURIComponent(coinName)}`}
                            href={`coin/${coins}`}
                            className="coin-item style-2 gap-12 p-2"
                            style={{marginBottom:"10px", transition: "background-color 0.2s ease", borderRadius:"4px"}}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#393737")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
                          >
                            <Image
                              alt="coin"
                              className="img"
                              src={coin.icon}
                              width={64}
                              height={64}
                            />
                            <div className="content">
                              <div className="title">
                                <p className="mb-4 text-button text-capitalize">{coinName==="tether" ? "USDT (Tether)" : coinName  }</p>
                                <span className="text-secondary">{coin.market_cap} B</span>
                              </div>
                              <div className="d-flex align-items-center gap-12">
                                <span className="text-small">{price}</span>
                                <span className={`coin-btn ${changeClass}`}>{change}</span>
                              </div>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
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
              <span className="icon-cancel" data-bs-dismiss="modal" />
            </div>
            <ul className="mt-20 pb-16">
              {coins4.map((coin, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedCoin(coin)}
                  className={index === 0 ? "mt-4" : ""}
                >
                  <div
                    className={`item-check coin-item style-2 gap-8  ${
                      selectedCoin === coin ? "active" : ""
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
                      {coin.alt}
                      <i className="icon icon-check-circle" />
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
