"use client";
import "../../../app/globals.css";
import Footer1 from "@/components/footers/Footer1";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";

const allAssets = {
    forex: [
        { name: "EUR/DKK" },
        { name: "USD/ZAR" },
        { name: "USD/SGD" },
        { name: "EUR/CHF" },
        { name: "XAU/USD" },
        { name: "CN50/USD" },
        { name: "TRY/JPY" },
        { name: "USD/NOK" },
    ],
    currency: [],
    crypto: [],
    indices: [],
};

const tabs = [
    { id: "forex", label: "Forex Trade" },
    { id: "currency", label: "Currency Trade" },
    { id: "crypto", label: "Crypto Trade" },
    { id: "indices", label: "Indices Trade" },
];

export default function AssetsPage() {
    const [activeTab, setActiveTab] = useState("forex");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const router = useRouter();

    const currentAssets = allAssets[activeTab];
    const totalPages = Math.ceil(currentAssets.length / itemsPerPage);

    const paginatedAssets = currentAssets.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleTabChange = (tab: any) => {
        setActiveTab(tab);
        setCurrentPage(1);
    };
    return (
        <>
            <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-min-h-screen tw-bg-surface tf-container">
                <div className="tw-relative tw-z-20 tw-w-full tw-max-w-[672px] tw-mx-auto tw-py-6">
                    <div className="tw-bg-white/5 tw-backdrop-blur-xl tw-rounded-3xl tw-border-2 tw-border-solid tw-border-white/10">
                        <img
                            src='https://static.vecteezy.com/system/resources/thumbnails/023/887/195/small_2x/trading-in-laptop-3d-cryptocurrency-investment-icon-png.png'
                            alt='Logs'
                            className='tw-absolute tw-right-2 tw-bottom-20 tw-w-56 tw-h-56 tw-opacity-10 tw-pointer-events-none'
                        />
                        <div className="tw-p-6">
                            <div className="tw-flex tw-justify-between tw-items-center tw-mb-6">
                                <div className="tw-flex tw-items-center tw-gap-3">
                                    <div>
                                        <h2 className="tw-font-semibold tw-text-lg">Assets Overview</h2>
                                    </div>
                                </div>
                                <a href="/assets/logss" className="tw-flex tw-items-center tw-text-white tw-gap-[4px] tw-p-2 tw-rounded-xl tw-bg-white/5 tw-hover:tw-bg-white/10 tw-transition-colors">
                                    <FiSettings className="tw-text-lg" />
                                    Logs
                                </a>
                            </div>
                            <div className="tw-mb-6">
                                <p className="tw-text-gray-400 tw-text-sm tw-mb-2">Total Profit</p>
                                <div className="tw-flex tw-items-center tw-gap-3">
                                    <h1 className="tw-text-2xl tw-font-bold">$0.00</h1>
                                    <span className="tw-text-[#9C6FFF] tw-text-sm tw-font-medium tw-bg-[#9C6FFF1A] tw-px-2 tw-py-1 tw-rounded-lg">
                                        8.9 %
                                    </span>
                                </div>
                            </div>
                            <div className="tw-grid tw-grid-cols-2 tw-gap-[8px]">
                                <a href='#' className="tw-flex tw-flex-col tw-items-center tw-p-4 tw-rounded-xl tw-bg-white/5 tw-hover:tw-bg-white/10 tw-transition-all">
                                    <p className="tw-text-sm tw-text-gray-400">Total Trades</p>
                                    <p className="tw-text-lg tw-font-semibold" style={{ fontSize: "15px" }}>$0.00</p>
                                </a>
                                <a href='#' className="tw-flex tw-flex-col tw-items-center tw-p-4 tw-rounded-xl tw-bg-white/5 tw-hover:tw-bg-white/10 tw-transition-all">
                                    <p className="tw-text-sm tw-text-gray-400">Active Trades</p>
                                    <p className="tw-text-lg tw-font-semibold" style={{ fontSize: "15px" }}>0</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tw-pt-[5px] tw-pb-[20px] tw-relative tw-w-full tw-max-w-[672px] tw-mx-auto">
                    <div className="tw-grid tw-grid-cols-4 tw-gap-1 tw-mb-6 tw-mt-4" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => handleTabChange(tab.id)}
                                className={`tw-p-4 tw-rounded-xl tw-backdrop-blur-xl tw-border-2 tw-border-solid tw-border-white/10 tw-hover:tw-bg-white/10 tw-transition-all ${activeTab === tab.id
                                    ? "tw-bg-white/10"
                                    : "tw-bg-white/5"
                                    }`}
                            >
                                <p className="tw-text-sm tw-text-[#9CA3AF]">{tab.label}</p>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="tw-w-full tw-max-w-[672px] tw-bg-white/5 tw-backdrop-blur-xl tw-rounded-2xl tw-p-6 tw-mb-6 tw-border-2 tw-border-solid tw-border-white/10 tw-mb-[100px]">
                    <h2 className="tw-text-lg tw-font-semibold tw-mb-[16px]">{activeTab} Assets</h2>
                    {currentAssets.length === 0 ? (
                        <div className="tw-flex tw-flex-col tw-gap-4 tw-pt-2">
                            <p className="tw-text-lg tw-mt-4 tw-text-yellow-500">No {activeTab} yet.</p>
                            <hr />
                        </div>
                    ) : (
                        <>
                            <div className="tw-flex tw-flex-col tw-gap-[16px] tw-pt-2">
                                {paginatedAssets.map((asset: any, index: number) => (
                                    <div
                                        key={index}
                                        onClick={() => router.push(`/assets/show/${index + 1}`)}
                                        className="tw-flex tw-justify-between tw-items-center tw-border-b tw-border-white tw-border-opacity-5 tw-pb-4 tw-cursor-pointer"
                                    >
                                        <div className="tw-flex tw-items-center tw-gap-2">
                                            <div style={{ borderRadius: "9999px" }}>
                                                <img
                                                    src='https://cdn-icons-png.freepik.com/512/8991/8991189.png'
                                                    alt="trades"
                                                    style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                                                />
                                            </div>
                                            <div>
                                                <p className="tw-font-semibold">{asset.name}</p>
                                                <span className="tw-text-sm tw-text-gray-400">Trades Live</span>
                                            </div>
                                        </div>
                                        <div className="tw-text-right">
                                            <p className="tw-text-white tw-font-semibold tw-bg-yellow-500 tw-text-xs tw-rounded-full tw-px-2 tw-py-1">
                                                Trade
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                {totalPages > 1 && (
                                    <div className="tw-flex tw-justify-between tw-items-center tw-mt-6 tw-flex-wrap tw-gap-2 tw-text-sm tw-text-gray-400">
                                        <span>
                                            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                                            {Math.min(currentPage * itemsPerPage, currentAssets.length)} of{" "}
                                            {currentAssets.length} results
                                        </span>
                                        <div className="tw-inline-flex tw-rounded-md tw-border-2 tw-border-solid tw-border-white/10 tw-overflow-hidden tw-text-white tw-gap-2 tw-p-2">
                                            <button
                                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                                disabled={currentPage === 1}
                                                className="tw-px-3 tw-py-1 tw-border-r tw-border-white/10 tw-hover:tw-bg-white/10 tw-disabled:tw-opacity-40"
                                            >
                                                &lt;
                                            </button>
                                            {[...Array(totalPages)].map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setCurrentPage(i + 1)}
                                                    className={`tw-px-3 tw-py-1 tw-border-r tw-border-white/10 ${currentPage === i + 1
                                                            ? "tw-bg-white/10 tw-text-yellow-400 tw-hover:tw-bg-white/5"
                                                            : "tw-hover:tw-bg-white/5"
                                                        }`}
                                                >
                                                    {i + 1}
                                                </button>
                                            ))}
                                            <button
                                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                                disabled={currentPage === totalPages}
                                                className="tw-px-3 tw-py-1 tw-hover:tw-bg-white/10 tw-disabled:tw-opacity-40"
                                            >
                                                &gt;
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer1 />
        </>
    );
}