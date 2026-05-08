"use client";


import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AxiosError } from "axios";
import apiClient from "@/lib/axios-config";

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

type RatingProps = {
  coins: any[];
};

export default function Rating({ coins }: RatingProps) {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"all" | "favorite" | "top">("all");

  useEffect(() => {
    if (coins.length > 0) {
      setLoading(false);
    }
  }, [coins]);

  const filteredCoins = coins.filter((coin: any) => {
    if (activeTab === "favorite") {
      return coin.type === "favorite";
    }
    if (activeTab === "top") {
      return coin.type === "top";
    }
    return true;
  });

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <div
          style={{
            border: "4px solid #f3f3f3",
            borderTop: "4px solid #3498db",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            animation: "spin 0.8s linear infinite",
          }}
        />
        <style>
          {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
        </style>
      </div>
    );
  }

  return (
    <div className="bg-menuDark tf-container">
      <div className="pt-12 pb-12 mt-4">
        <div className="wrap-filter-swiper">
          <h5>
            <Link href={`/cryptex-rating`} className="cryptex-rating">
              <i className="icon-star" />
              backedbyquantum Rating
            </Link>
          </h5>

          <div className="swiper-wrapper1 menu-tab-v3 mt-12" role="tablist">
            {/* <div className="swiper-slide1 nav-link active">All</div>
            <div className="swiper-slide1 nav-link">Favorites</div>
            <div className="swiper-slide1 nav-link">Top</div> */}
            <div
              className={`nav-link ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All
            </div>
            <div
              className={`nav-link ${activeTab === "favorite" ? "active" : ""}`}
              onClick={() => setActiveTab("favorite")}
            >
              Favorites
            </div>
            <div
              className={`nav-link ${activeTab === "top" ? "active" : ""}`}
              onClick={() => setActiveTab("top")}
            >
              Top
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

            <ul className="mt-16">
              {filteredCoins.map((coin) => {
                const coinName = Object.keys(coin.unique_id)[0];
                const coins = coin.name;
                const coinData = coin.unique_id[coinName];
                const coinlink = coin.link;
                const price = coinData
                  ? `$${coinData.usd.toLocaleString()}`
                  : "N/A";
                const change =
                  coinData && coinData.usd_24h_change
                    ? `${coinData.usd_24h_change.toFixed(2)}%`
                    : "N/A";
                const changeClass =
                  coinData && coinData.usd_24h_change >= 0
                    ? "increase"
                    : "decrease";

                return (
                  <li key={coin.id} className="mt-16 tw-capitalize">
                    <Link
                      href={`/coin/${coins}`}
                      className="coin-item style-2 gap-12 p-2"
                      style={{ marginBottom: "10px", transition: "background-color 0.2s ease", borderRadius: "4px" }}
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
                          <p className="mb-4 text-button text-capitalize">
                            {/* {coinName==="tether" ? "USDT (Tether)" : coinName  } */}
                            {coinName === "tether"
                              ? "USDT (Tether)"
                              : coinName === "ripple"
                                ? "XRP (Ripple)"
                                : coinName
                            }
                          </p>
                          <span className="text-secondary">
                            {coin.market_cap} B
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-12">
                          <span className="text-small">{price}</span>
                          <span className={`coin-btn ${changeClass}`}>
                            {change}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
