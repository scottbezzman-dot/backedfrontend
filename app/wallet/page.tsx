
"use client"
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Wallet from "@/components/Wallet";
import React, { useEffect, useState } from "react";
import apiClient from "@/lib/axios-config";

const Page: React.FC = () => {
  const [coins, setCoins] = useState<any[]>([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await apiClient.get("/api/wallet/get_wallets");
        setCoins(res.data);
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };
    fetchCoins();
  }, []);

  return (
    <>
      <Header1 coins={coins} />
      <Wallet />
      <Footer1 />
    </>
  );
};
export default Page;
