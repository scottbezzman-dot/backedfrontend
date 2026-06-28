"use client";
import { useEffect, useState } from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { AxiosError } from "axios";
import apiClient from "@/lib/axios-config";
import "../../app/globals.css";
import Footer1 from "@/components/footers/Footer1";
import { toast } from "react-toastify";

export default function SwapForm() {
  const [coins, setCoins] = useState<{ label: string; value: string }[]>([]);
  const [fromCoin, setFromCoin] = useState("");
  const [toCoin, setToCoin] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [swapResult, setSwapResult] = useState<any>(null);

  // Fetch coin list from database API
  useEffect(() => {
    const fetchCoins = async () => {
    try {
      const { data } = await apiClient.get('/api/wallet/get_wallets');

      if (data?.status_code) {
        const list: { label: string; value: string }[] = [];
        data.data.forEach((wallet: any) => {
          Object.keys(wallet.unique_id).forEach((coinName) => {
            // coinName here is the CoinGecko ID (unique_id key)
            list.push({ label: coinName, value: coinName });
          });
        });
        setCoins(list);
        if (list.length > 1) {
          setFromCoin(list[0].value);
          setToCoin(list[1].value);
        }
      }
    } catch (err) {
      const error = err as AxiosError<{ msg: string }>;
  // alert(error.response?.data?.msg || "Something went wrong");
    }
  };
  fetchCoins();
}, []);

  // Handle swap
  const handleSwap = async () => {
  if (!fromCoin || !toCoin || !amount) return; 
  // alert("Please fill all fields");
    toast.success('Please fill all fields')
    setLoading(true);
    setSwapResult(null);
    try {
  const { data } = await apiClient.post('/api/wallet/swap', {
        fromCoin,
        toCoin,
        amount,
      });
      if (data?.status_code) {
        setSwapResult(data.swap);
      } else {
  // alert(data?.msg || "Swap failed");
      }
    } catch (err) {
      const error = err as AxiosError<{ msg: string }>;
  // alert(error.response?.data?.msg || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="tw-flex tw-justify-center tw-items-center tw-min-h-screen tf-container">
      <div className="tw-bg-[#111] tw-p-6 tw-rounded-2xl tw-w-[512px] tw-border-2 tw-border-solid tw-border-gray-700">

        {/* Swap From */}
        <label className="tw-text-sm tw-text-gray-400">Swap from</label>
        <div className="tw-flex tw-items-center tw-justify-between tw-border-2 tw-border-solid tw-border-gray-600 tw-rounded-lg tw-px-3 tw-py-2 tw-mt-1">
          <select
            className="tw-bg-transparent tw-outline-none tw-w-full tw-capitalize"
            value={fromCoin}
            onChange={(e) => setFromCoin(e.target.value)}
          >
            {coins.map((coin) => (
              <option key={coin.value} value={coin.value} className="tw-text-black">
                {coin.label}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="0.000000"
            className="tw-bg-transparent tw-text-right tw-text-gray-400 tw-outline-none tw-w-28"
            value={amount || ""}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
          />
        </div>

        {/* Swap Icon */}
        <div className="tw-flex tw-justify-center tw-my-4">
          <button className="tw-p-3 tw-rounded-full tw-bg-purple-600 tw-hover:tw-bg-purple-500">
            <AiOutlineSwap className="tw-text-white tw-text-xl" />
          </button>
        </div>

        {/* Swap To */}
        <label className="tw-text-sm tw-text-gray-400">Swap to</label>
        <div className="tw-flex tw-flex-col tw-border-2 tw-border-solid tw-border-gray-600 tw-rounded-lg tw-px-3 tw-py-2 tw-mt-1">
          <select
            className="tw-bg-transparent tw-outline-none"
            value={toCoin}
            onChange={(e) => setToCoin(e.target.value)}
          >
            {coins.map((coin) => (
              <option key={coin.value} value={coin.value} className="tw-text-black">
                {coin.label}
              </option>
            ))}
          </select>
          <div className="tw-flex tw-justify-between tw-text-sm tw-text-gray-400 tw-mt-1">
            <span>
              Current Price:{" "}
              {swapResult ? `$${swapResult.to.price_usd}` : "Loading.."}
            </span>
            <span>
              You will receive:{" "}
              <span className="tw-text-purple-400">
                {swapResult ? swapResult.to.amount.toFixed(6) : "0.00"}
              </span>
            </span>
          </div>
        </div>

        {/* Swap Button */}
        <button
          className="tw-w-full tw-bg-purple-500 tw-hover:tw-bg-purple-400 tw-text-white tw-py-3 tw-mt-6 tw-rounded-lg tw-font-medium"
          onClick={handleSwap}
          disabled={loading}
        >
          {loading ? "Swapping..." : "Swap Now →"}
        </button>
      </div>
    </div>
    <Footer1 />
    </>
  );
}
