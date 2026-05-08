"use client";
import "../../../app/globals.css";
import Footer1 from "@/components/footers/Footer1";
import { FiSettings } from "react-icons/fi";

export default function MiningPage() {
    return (
        <>
            <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-min-h-screen tw-bg-surface tf-container">
                <div className="tw-relative tw-z-20 tw-w-full tw-max-w-[672px] tw-mx-auto tw-py-6">
                    <div className="tw-bg-white/5 tw-backdrop-blur-xl tw-rounded-3xl tw-border-2 tw-border-solid tw-border-white/10">
                        <img
                            src='https://web3connectvaultx.com/assets/images/miners/miner1.png'
                            alt='minors'
                            className='tw-absolute tw-right-2 tw-bottom-20 tw-w-56 tw-h-56 tw-opacity-10 tw-pointer-events-none'
                        />
                        <div className="tw-p-6">
                            <div className="tw-flex tw-justify-between tw-items-center tw-mb-6">
                                <div className="tw-flex tw-items-center tw-gap-3">
                                    <div>
                                        <h2 className="tw-font-semibold tw-text-lg">Mining Overview</h2>
                                    </div>
                                </div>
                                <a href="/minings/mplans" className="tw-flex tw-items-center tw-text-white tw-gap-[4px] tw-p-2 tw-rounded-xl tw-bg-white/5 tw-hover:tw-bg-white/10 tw-transition-colors">
                                    <FiSettings className="tw-text-lg" />
                                    Miners
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
                                    <p className="tw-text-sm tw-text-gray-400">Total Mined</p>
                                    <p className="tw-text-lg tw-font-semibold" style={{ fontSize: "15px" }}>$0.00</p>
                                </a>
                                <a href='#' className="tw-flex tw-flex-col tw-items-center tw-p-4 tw-rounded-xl tw-bg-white/5 tw-hover:tw-bg-white/10 tw-transition-all">
                                    <p className="tw-text-sm tw-text-gray-400">Active Miners</p>
                                    <p className="tw-text-lg tw-font-semibold" style={{ fontSize: "15px" }}>0</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tw-pt-[5px] tw-pb-[80px] tw-relative tw-w-full tw-max-w-[672px] tw-mx-auto">
                    <div className="tw-bg-white/5 tw-backdrop-blur-xl tw-rounded-2xl tw-p-6 tw-mb-6 tw-border-2 tw-border-solid tw-border-white/10" style={{ paddingTop: '2px' }}>
                        <div className="tw-mt-8">
                            <h2 className="tw-text-lg tw-font-semibold tw-mb-4">My Miner Logs</h2>
                            <div className="tw-flex tw-flex-col tw-gap-4 tw-pt-2">
                                <p className="tw-mt-4 tw-text-yellow-500">No Miner yet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer1 />
        </>
    );
}