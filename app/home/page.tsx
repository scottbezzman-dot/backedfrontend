"use client"
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Market from "@/components/home/Market";
import MyWallet from "@/components/home/MyWallet";
import Rating from "@/components/home/Rating";
import React, { useEffect, useState } from "react";
import apiClient from "@/lib/axios-config";

const Page: React.FC = () => {
  const [coins, setCoins] = useState<any[]>([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await apiClient.get("/api/wallet/get_wallets");
        setCoins(res.data.data);
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };
    fetchCoins();
  }, []);

  return (
    <>
      <Header1 coins={coins} />
      <div className="pt-68 pb-80">
        <Market />
        <MyWallet />
        <Rating coins={coins} />
      </div>{" "}
      <Footer1 />
    </>
  );
};
export default Page;
