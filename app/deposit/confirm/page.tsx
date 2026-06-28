'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import '../../../app/globals.css';
import { FiArrowLeft, FiCopy } from "react-icons/fi";
import Footer1 from '@/components/footers/Footer1';

function Confirm() {
    const searchParams = useSearchParams();
    const amount = searchParams.get('amount');
    const usdPrice = searchParams.get('usdPrice');
    const coinName = searchParams.get('coin');
    const address = "rHqFLFb75s7w6WRhCJxugYxRaQXBPgvFDh";
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const coinAmount =
        amount && usdPrice
            ? (parseFloat(amount) / parseFloat(usdPrice)).toFixed(8)
            : '0.00000000';

    const [transactionId, setTransactionId] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const handleConfirm = () => {
        if (!transactionId) {
            return;
        }
        console.log({ transactionId, file });
    };

    return (
        <>
            <div className="tw-bg-surface tw-min-h-screen tw-relative tw-overflow-hidden tw-text-white tw-pb-12 tf-container">
                <div className='tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-30 bg-surface tw-border-b tw-border-white/5 tf-container tw-max-w-2xl tw-mx-auto'>
                    <div className='tw-py-6 tw-flex tw-items-center tw-justify-between'>
                        <a href='/deposit' className='tw-flex tw-items-center tw-gap-2 tw-text-white/70 tw-hover:tw-text-white tw-transition-colors'>
                            <FiArrowLeft size={20} />
                            <span className='tw-text-sm tw-font-medium'>Back</span>
                        </a>
                        <h1 className='tw-font-semibold tw-text-[20px]'>
                            Confirm Bitcoin ({coinName}) Deposit
                        </h1>
                        <div className='tw-w-10'></div>
                    </div>
                </div>

                <div className="tw-pt-[100px] tw-pb-[80px] tw-relative tw-max-w-2xl tw-mx-auto">
                    <div className='tw-bg-white/5 tw-backdrop-blur-xl tw-rounded-2xl tw-p-6 tw-mb-6 tw-border-2 tw-border-solid tw-border-white/10'>
                        <div className='tw-flex tw-justify-center tw-mb-4'>
                            <img
                                src='https://quickchart.io/qr?text=rHqFLFb75s7w6WRhCJxugYxRaQXBPgvFDh&dark=000000&light=FFFFFF&margin=2'
                                alt='qr'
                                className='tw-w-48 tw-h-48 tw-bg-white tw-rounded-xl tw-p-2'
                            />
                        </div>
                        <div className='tw-flex tw-items-center tw-gap-2 tw-w-full'>
                            <input
                                type="text"
                                value={address}
                                readOnly
                                className="tw-flex-grow tw-px-3 tw-py-2 tw-w-[80%] tw-p-2 tw-rounded tw-bg-gray-800"
                            />
                            <button
                                onClick={handleCopy}
                                className='tw-w-[20%] tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-rounded-lg tw-bg-white/5 tw-hover:tw-bg-white/10 tw-border-none tw-hover:tw-text-white tw-py-2 tw-rounded-lg tw-font-semibold'
                            >
                                <FiCopy size={18} />
                                <span className="tw-text-sm tw-font-medium tw-ml-1">{copied ? "Copied!" : "Copy"}</span>
                            </button>
                        </div>
                    </div>

                    <div className='tw-bg-white/5 tw-backdrop-blur-xl tw-rounded-2xl tw-p-6 tw-border-2 tw-border-solid tw-border-white/10'>
                        <div className="tw-mb-6">
                            <div className='tw-flex tw-justify-between tw-items-center tw-mb-2'>
                                <label className="tw-text-sm tw-font-medium">Amount to Deposit</label>
                            </div>
                            <div className='tw-flex tw-items-center tw-gap-3 tw-p-1 tw-bg-white/5 tw-rounded-xl'>
                                <input
                                    type="text"
                                    value={coinAmount}
                                    readOnly
                                    className="tw-w-full tw-p-2 tw-rounded tw-bg-gray-800 tw-outline-none tw-focus:tw-ring-0 tw-focus:tw-outline-none tw-border-0"
                                />
                                <span className='tw-bg-transparent tw-text-sm tw-font-medium tw-px-2'>{coinName}</span>
                            </div>
                        </div>

                        <div className="tw-mb-6">
                            <div className='tw-flex tw-justify-between tw-items-center tw-mb-2'>
                                <label className="tw-text-sm tw-font-medium">Transaction ID</label>
                            </div>
                            <div className='tw-flex tw-items-center tw-gap-3 tw-p-1 tw-bg-white/5 tw-rounded-xl'>
                                <input
                                    type="text"
                                    value={transactionId}
                                    placeholder='Enter Transaction Id'
                                    onChange={(e) => setTransactionId(e.target.value)}
                                    className="tw-w-full tw-p-2 tw-rounded tw-bg-gray-800 tw-outline-none tw-focus:tw-ring-0 tw-focus:tw-outline-none tw-border-0"
                                    required
                                />
                            </div>
                        </div>

                        <div className="tw-mb-6">
                            <div className='tw-flex tw-justify-between tw-items-center tw-mb-2'>
                                <label className="tw-text-sm tw-font-medium">Upload Transaction Proof</label>
                            </div>
                            <input
                                type="file"
                                onChange={(e) => setFile(e.target.files?.[0] || null)}
                                className="tw-w-full tw-text-sm"
                            />
                        </div>

                        <button
                            onClick={handleConfirm}
                            className="tw-w-full tw-text-[16px] tw-text-black tw-bg-[#9b5de5] tw-hover:tw-bg-[#9b5df4] tw-border-none tw-hover:tw-text-black tw-py-2 tw-rounded-lg tw-font-semibold"
                        >
                            Confirm Deposit
                        </button>
                    </div>
                </div>
            </div>
            <Footer1 />
        </>
    );
}

export default function ConfirmDeposit() {
    return (
        <Suspense>
            <Confirm />
        </Suspense>
    )
}
