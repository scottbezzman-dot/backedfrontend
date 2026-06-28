"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import Chart1 from "./charts/Chart1";
import Chart2 from "./charts/Chart2";
import Chart3 from "./charts/Chart3";
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

export default function Market() {
  const [mounted, setMounted] = useState(false);
  const [coins, setCoins] = useState<Wallet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const res = await apiClient.get('/api/wallet/get_wallets');
        if (res.data.status_code) {
          setCoins(res.data.data);
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

  if (!mounted) return null;

  return (
    <div className="bg-menuDark tf-container">
      <div className="pt-12 pb-12 mt-4">
        <h5>Market</h5>
        <Swiper
          className="swiper tf-swiper swiper-wrapper-r mt-16"
          spaceBetween={16}
          slidesPerView={3.1}
        >
          <SwiperSlide className="swiper-slide">
            <Link href={`/exchange-market`} className="coin-box d-block">
              <div className="coin-logo">
                <Image
                  alt="img"
                  className="logo"
                  src="/images/coin/market-1.jpg"
                  width={76}
                  height={77}
                />
                <div className="title">
                  <p>Bitcoin</p>
                  <span>BTC</span>
                </div>
              </div>
              <div className="mt-8 mb-8 coin-chart">
                <Chart1 />
              </div>
              <div className="coin-price d-flex justify-content-between">
                <span>
                  {loading
                    ? "$0.00"
                    : `$${
                        coins
                          .find((c) => c.name.trim() === "BTC")
                          ?.unique_id?.bitcoin?.usd?.toLocaleString() || "0.00"
                      }`}
                </span>
                <span
                  className={`d-flex align-items-center gap-2 ${
                    (coins.find((c) => c.name.trim() === "BTC")?.unique_id
                      ?.bitcoin?.usd_24h_change ?? 0) < 0
                      ? "text-danger"
                      : "text-primary"
                  }`}
                >
                  {loading
                    ? "0.00"
                    : `$${(
                        coins.find((c) => c.name.trim() === "BTC")?.unique_id
                          ?.bitcoin?.usd_24h_change ?? 0
                      ).toFixed(2)}`}
                </span>
              </div>
              <div className="blur bg1"></div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Link href={`/exchange-market`} className="coin-box d-block">
              <div className="coin-logo">
                <Image
                  alt="img"
                  className="logo"
                  src="/images/coin/market-3.jpg"
                  width={76}
                  height={77}
                />
                <div className="title">
                  <p>HYPE</p>
                  <span>HYPE</span>
                </div>
              </div>
              <div className="mt-8 mb-8 coin-chart">
                <Chart2 />
              </div>
              <div className="coin-price d-flex justify-content-between">
                <span>
                  {loading
                    ? "$0.00"
                    : `$${
                        coins
                          .find((c) => c.name.trim() === "HYPE")
                          ?.unique_id?.hyperliquid?.usd?.toLocaleString() || "0.00"
                      }`}
                </span>
                <span
                  className={`d-flex align-items-center gap-2 ${
                    (coins.find((c) => c.name.trim() === "HYPE")?.unique_id
                      ?.hyperliquid?.usd_24h_change ?? 0) < 0
                      ? "text-danger"
                      : "text-primary"
                  }`}
                >
                  {loading
                    ? "0.00"
                    : `$${(
                        coins.find((c) => c.name.trim() === "HYPE")?.unique_id
                          ?.hyperliquid?.usd_24h_change ?? 0
                      ).toFixed(2)}`}
                </span>
              </div>
              <div className="blur bg2"></div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Link href={`/exchange-market`} className="coin-box d-block">
              <div className="coin-logo">
                <Image
                  alt="img"
                  className="logo"
                  src="/images/coin/coin-3.jpg"
                  width={75}
                  height={75}
                />
                <div className="title">
                  <p>Ethereum</p>
                  <span>ETH</span>
                </div>
              </div>
              <div className="mt-8 mb-8 coin-chart">
                <Chart3 />
              </div>
              <div className="coin-price d-flex justify-content-between">
                <span>
                  {loading
                    ? "$0.00"
                    : `$${
                        coins
                          .find((c) => c.name.trim() === "ETH")
                          ?.unique_id?.ethereum?.usd?.toLocaleString() || "0.00"
                      }`}
                </span>
                <span
                  className={`d-flex align-items-center gap-2 ${
                    (coins.find((c) => c.name.trim() === "ETH")?.unique_id
                      ?.ethereum?.usd_24h_change ?? 0) < 0
                      ? "text-danger"
                      : "text-primary"
                  }`}
                >
                  {loading
                    ? "0.00"
                    : `$${(
                        coins.find((c) => c.name.trim() === "ETH")?.unique_id
                          ?.ethereum?.usd_24h_change ?? 0
                      ).toFixed(2)}`}
                </span>
              </div>
              <div className="blur bg3"></div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
