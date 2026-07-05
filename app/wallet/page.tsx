"use client";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Wallet from "@/components/Wallet";
import React, { useEffect, useState } from "react";
import apiClient from "@/lib/axios-config";

// 1. Define a strict type for your coin data
interface Coin {
  id: string;
  name: string;
  symbol: string;
  balance: number;
}

const Page: React.FC = () => {
  // 2. Use the strict type and explicitly type the array
  const [coins, setCoins] = useState<Coin[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setIsLoading(true);
        const res = await apiClient.get("/api/wallet/get_wallets");
        
        // 3. Ensure your API response structure matches expectations
        // If your backend nests data (e.g., res.data.wallets), adjust this line
        const data = Array.isArray(res.data) ? res.data : res.data?.data || [];
        setCoins(data);
      } catch (err: any) {
        console.error("Error fetching coins:", err);
        setError(err.message || "Failed to load wallet data.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCoins();
  }, []);

  // 4. Provide visual feedback for loading and error states
  if (isLoading) return <div className="text-center p-10">Loading your wallet...</div>;
  if (error) return <div className="text-center text-red-500 p-10">Error: {error}</div>;

  return (
    <> 
      <Header1 coins={coins} />
      <Wallet />
      <Footer1 />
    </>
  );
};
export default Page;
