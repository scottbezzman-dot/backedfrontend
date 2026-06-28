"use client";
import { FiArrowLeft } from "react-icons/fi";
import "../../../app/globals.css";
import Footer1 from "@/components/footers/Footer1";
import { BiHome } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function MpansPage() {
    const router = useRouter();
    const handlePurchase = () => {
        router.push(`/deposit`);
    };
    return (
        <>
            <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-min-h-screen tw-bg-surface tf-container">
                <div className="tw-relative tw-z-20 tw-w-full tw-max-w-[672pxpx] tw-mx-auto tw-py-6">
                    <div className='tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-30 bg-surface tw-border-b tw-border-white/5 tf-container tw-max-w-[672px] tw-mx-auto'>
                        <div className='tw-py-6 tw-flex tw-items-center tw-justify-between'>
                            <a href='/minings/index' className='tw-flex tw-items-center tw-gap-2 tw-text-white/70 tw-hover:tw-text-white tw-transition-colors'>
                                <FiArrowLeft size={20} />
                                <span className='tw-text-sm tw-font-medium'>Back</span>
                            </a>
                            <h1 className='tw-font-semibold tw-text-[20px]'>
                                Minors
                            </h1>
                            <a href='/home' className='tw-flex tw-items-center tw-gap-2 tw-text-white/70 tw-hover:tw-text-white tw-transition-colors'>
                                <span className='tw-text-sm tw-font-medium'>Home</span>
                                <BiHome size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="tw-pt-[80px] tw-pb-[80px] tw-relative tw-max-w-[672px] tw-mx-auto">
                        <div className="tw-space-y-6">
                            <div className="tw-bg-white/5 tw-backdrop-blur-xl tw-border-2 tw-border-solid tw-border-white/10 tw-p-4 tw-rounded-2xl tw-shadow-md tw-relative tw-overflow-hidden">
                                <img
                                    src="https://web3connectvaultx.com/assets/images/miners/miner1.png"
                                    alt=""
                                    className="tw-absolute tw-right-2 tw-bottom-2 tw-w-16 tw-h-16 tw-opacity-70 tw-pointer-events-none"
                                />
                                <h3 className="tw-text-lg tw-font-bold">New Miner</h3>
                                <p className="tw-text-sm tw-text-white/80 tw-mt-1">ROI: <strong>90%</strong></p>
                                <p className="tw-text-sm tw-text-white/80">Return: <strong>Hourly</strong></p>
                                <p className="tw-text-sm tw-text-white/80">Duration: <strong>12 Days</strong></p>
                                <p className="tw-text-sm tw-text-white/80 tw-mb-1">Min Purchase: <strong>$10,000.00</strong></p>
                                <button onClick={handlePurchase} className="tw-w-full tw-mt-2 tw-bg-blue-600 tw-hover:tw-bg-blue-700 tw-text-white tw-py-2 tw-rounded-xl tw-text-sm tw-font-medium tw-transition">
                                    Purchase Miner
                                </button>
                            </div>
                            <div className="tw-bg-white/5 tw-backdrop-blur-xl tw-border-2 tw-border-solid tw-border-white/10 tw-p-4 tw-rounded-2xl tw-shadow-md tw-relative tw-overflow-hidden">
                                <img
                                    src="https://web3connectvaultx.com/assets/images/miners/miner2.png"
                                    alt=""
                                    className="tw-absolute tw-right-2 tw-bottom-2 tw-w-16 tw-h-16 tw-opacity-70 tw-pointer-events-none"
                                />
                                <h3 className="tw-text-lg tw-font-bold">Miner #12</h3>
                                <p className="tw-text-sm tw-text-white/80 tw-mt-1">ROI: <strong>20%</strong></p>
                                <p className="tw-text-sm tw-text-white/80">Return: <strong>Hourly</strong></p>
                                <p className="tw-text-sm tw-text-white/80">Duration: <strong>34 Days</strong></p>
                                <p className="tw-text-sm tw-text-white/80 tw-mb-1">Min Purchase: <strong>$1,000.00</strong></p>
                                <button onClick={handlePurchase} className="tw-w-full tw-mt-2 tw-bg-blue-600 tw-hover:tw-bg-blue-700 tw-text-white tw-py-2 tw-rounded-xl tw-text-sm tw-font-medium tw-transition">
                                    Purchase Miner
                                </button>
                            </div>
                            <div className="tw-bg-white/5 tw-backdrop-blur-xl tw-border-2 tw-border-solid tw-border-white/10 tw-p-4 tw-rounded-2xl tw-shadow-md tw-relative tw-overflow-hidden">
                                <img
                                    src="https://web3connectvaultx.com/assets/images/miners/miner3.png"
                                    alt=""
                                    className="tw-absolute tw-right-2 tw-bottom-2 tw-w-16 tw-h-16 tw-opacity-70 tw-pointer-events-none"
                                />
                                <h3 className="tw-text-lg tw-font-bold">Hash #1</h3>
                                <p className="tw-text-sm tw-text-white/80 tw-mt-1">ROI: <strong>12%</strong></p>
                                <p className="tw-text-sm tw-text-white/80">Return: <strong>Hourly</strong></p>
                                <p className="tw-text-sm tw-text-white/80">Duration: <strong>1 Days</strong></p>
                                <p className="tw-text-sm tw-text-white/80 tw-mb-1">Min Purchase: <strong>$10.00</strong></p>
                                <button onClick={handlePurchase} className="tw-w-full tw-mt-2 tw-bg-blue-600 tw-hover:tw-bg-blue-700 tw-text-white tw-py-2 tw-rounded-xl tw-text-sm tw-font-medium tw-transition">
                                    Purchase Miner
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer1 />
        </>
    );
}