"use client";

import { useEffect, useState } from "react";
import apiClient from "@/lib/axios-config";
import { usePathname, useRouter } from "next/navigation";

export default function ConnectWalletModal() {
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const checkConnection = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setShowModal(false);
      return;
    }

    // Do not pop up on boarding, register, log-in, reset password, linkwallet or admin screens
    const ignoredPaths = [
      "/log-in",
      "/register",
      "/reset-pass",
      "/new-pass",
      "/boarding",
      "/boarding2",
      "/start-boarding",
      "/linkwallet",
      "/admin"
    ];
    
    if (ignoredPaths.some(path => pathname.startsWith(path))) {
      setShowModal(false);
      return;
    }

    try {
      const res = await apiClient.get("/api/wallet/check_connection");
      if (res.data.status_code) {
        setShowModal(!res.data.is_connected);
      }
    } catch (err) {
      console.error("Error checking wallet connection:", err);
    }
  };

  useEffect(() => {
    checkConnection();
    // Periodic check to auto-dismiss if wallet is connected in another view
    const interval = setInterval(checkConnection, 5000);
    return () => clearInterval(interval);
  }, [pathname]);

  if (!showModal) return null;

  return (
    <div className="tw-fixed tw-inset-0 tw-z-[9999] tw-bg-black/90 tw-backdrop-blur-md tw-flex tw-justify-center tw-items-center tw-p-4">
      <div className="tw-bg-[#161b22] tw-border tw-border-solid tw-border-gray-800 tw-rounded-2xl tw-w-full tw-max-w-md tw-p-6 tw-shadow-2xl tw-text-white tw-animate-fade-in-up tw-text-center">
        
        {/* Title & Icon */}
        <div className="tw-w-16 tw-h-16 tw-bg-green-500/10 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mx-auto tw-mb-4 tw-border tw-border-solid tw-border-green-500/30">
          <span className="icon-wallet tw-text-3xl tw-text-green-500" />
        </div>
        
        <h3 className="tw-text-2xl tw-font-bold tw-tracking-tight tw-text-white">Wallet Connection Required</h3>
        
        <p className="tw-text-sm tw-text-gray-400 tw-mt-3 tw-mb-6">
          To continue using swapping, trading, or viewing your active wallet balances on Backed Web3 Shield, please connect a recovery wallet.
        </p>

        {/* Action Button */}
        <button
          onClick={() => {
            setShowModal(false);
            router.push("/linkwallet");
          }}
          className="tw-w-full tw-bg-green-600 hover:tw-bg-green-700 tw-text-white tw-py-3 tw-px-4 tw-rounded-xl tw-font-bold tw-transition tw-border-none tw-cursor-pointer tw-text-sm tw-shadow-md tw-shadow-green-950/20"
        >
          Link Wallet Now
        </button>
      </div>
    </div>
  );
}
