"use client";
import { FiArrowLeft } from "react-icons/fi";
import "../../../app/globals.css";
import Footer1 from "@/components/footers/Footer1";
import { BiHome } from "react-icons/bi";

export default function LogsPage() {
    return (
        <>
            <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-surface tf-container">
                <div className="tw-relative tw-z-30 tw-w-full tw-max-w-[672px] tw-mx-auto tw-py-6">
                    <div className='tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-10 bg-surface tw-border-b tw-border-white/5 tf-container tw-max-w-[672px] tw-mx-auto'>
                        <div className='tw-py-6 tw-flex tw-items-center tw-justify-between'>
                            <a href='/assets/index' className='tw-flex tw-items-center tw-gap-2 tw-text-white/70 tw-hover:tw-text-white tw-transition-colors'>
                                <FiArrowLeft size={20} />
                                <span className='tw-text-sm tw-font-medium'>Back</span>
                            </a>
                            <h1 className='tw-font-semibold tw-text-[20px]'>
                                Trades Log
                            </h1>
                            <a href='/home' className='tw-flex tw-items-center tw-gap-2 tw-text-white/70 tw-hover:tw-text-white tw-transition-colors'>
                                <span className='tw-text-sm tw-font-medium'>Home</span>
                                <BiHome size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="tw-pt-[100px] tw-relative tw-w-full tw-max-w-[672px] tw-mx-auto tw-px-4">
                        <div className="tw-bg-white/5 tw-backdrop-blur-xl tw-rounded-2xl tw-p-6 tw-mb-6 tw-border-2 tw-border-solid tw-border-white/10" style={{ paddingTop: '2px' }}>
                            <div className="tw-mt-8">
                                <h2 className="tw-text-lg tw-font-semibold tw-mb-4">History</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer1 />
        </>
    );
}