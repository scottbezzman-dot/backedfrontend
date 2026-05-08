'use client';
import Footer1 from '@/components/footers/Footer1';
import { useParams, useRouter } from 'next/navigation';
import { BiHome, BiChevronDown } from 'react-icons/bi';
import { FiArrowLeft } from 'react-icons/fi';
import "../../../../app/globals.css";
import { useEffect, useState } from 'react';
import apiClient from '@/lib/axios-config';

const assetList = [
    {
        name: 'EUR/DKK',
        iframe: 'https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22EUR%2FDKK%22%2C%22frameElementId%22%3A%22tradingview_d6b86%22%2C%22interval%22%3A%221%22%2C%22save_image%22%3A%220%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22web3connectvaultx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22EUR%2FDKK%22%2C%22page-uri%22%3A%22web3connectvaultx.com%2Fassets%2Fshow%2F1%22%7D'
    },
    {
        name: 'USD/ZAR',
        iframe: 'https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22USD%2FZAR%22%2C%22frameElementId%22%3A%22tradingview_a8cd0%22%2C%22interval%22%3A%221%22%2C%22save_image%22%3A%220%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22web3connectvaultx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22USD%2FZAR%22%2C%22page-uri%22%3A%22web3connectvaultx.com%2Fassets%2Fshow%2F2%22%7D'
    },
    {
        name: 'USD/SGD',
        iframe: 'https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22USD%2FSGD%22%2C%22frameElementId%22%3A%22tradingview_21be8%22%2C%22interval%22%3A%221%22%2C%22save_image%22%3A%220%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22web3connectvaultx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22USD%2FSGD%22%2C%22page-uri%22%3A%22web3connectvaultx.com%2Fassets%2Fshow%2F3%22%7D'
    },
    {
        name: 'EUR/CHF',
        iframe: 'https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22EUR%2FCHF%22%2C%22frameElementId%22%3A%22tradingview_e0c98%22%2C%22interval%22%3A%221%22%2C%22save_image%22%3A%220%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22web3connectvaultx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22EUR%2FCHF%22%2C%22page-uri%22%3A%22web3connectvaultx.com%2Fassets%2Fshow%2F4%22%7D'
    },
    {
        name: 'XAU/USD',
        iframe: 'https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22XAU%2FUSD%22%2C%22frameElementId%22%3A%22tradingview_25915%22%2C%22interval%22%3A%221%22%2C%22save_image%22%3A%220%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22web3connectvaultx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22XAU%2FUSD%22%2C%22page-uri%22%3A%22web3connectvaultx.com%2Fassets%2Fshow%2F5%22%7D'
    },
    {
        name: 'CN50/USD',
        iframe: 'https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22CN50%2FUSD%22%2C%22frameElementId%22%3A%22tradingview_96941%22%2C%22interval%22%3A%221%22%2C%22save_image%22%3A%220%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22web3connectvaultx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22CN50%2FUSD%22%2C%22page-uri%22%3A%22web3connectvaultx.com%2Fassets%2Fshow%2F6%22%7D'
    },
    {
        name: 'TRY/JPY',
        iframe: 'https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22TRY%2FJPY%22%2C%22frameElementId%22%3A%22tradingview_6f441%22%2C%22interval%22%3A%221%22%2C%22save_image%22%3A%220%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22web3connectvaultx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22TRY%2FJPY%22%2C%22page-uri%22%3A%22web3connectvaultx.com%2Fassets%2Fshow%2F7%22%7D'
    },
    {
        name: 'USD/NOK',
        iframe: 'https://s.tradingview.com/widgetembed/?hideideas=1&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en#%7B%22symbol%22%3A%22USD%2FNOK%22%2C%22frameElementId%22%3A%22tradingview_78ff2%22%2C%22interval%22%3A%221%22%2C%22save_image%22%3A%220%22%2C%22studies%22%3A%22%5B%5D%22%2C%22theme%22%3A%22dark%22%2C%22style%22%3A%221%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22studies_overrides%22%3A%22%7B%7D%22%2C%22utm_source%22%3A%22web3connectvaultx.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22chart%22%2C%22utm_term%22%3A%22USD%2FNOK%22%2C%22page-uri%22%3A%22web3connectvaultx.com%2Fassets%2Fshow%2F8%22%7D'
    }
];

export default function AssetDetailsPage() {
    const { id } = useParams();
    const assetIndex = parseInt(id as string, 10) - 1;
    const asset = assetList[assetIndex];
    const [coins, setCoins] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const res = await apiClient.get("/api/wallet/get_wallets");
                setCoins(res.data.data);
            } catch (error) {
                console.error("Error fetching coins:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCoins();
    }, []);

    return (
        <>
            <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-surface tf-container">
                <div className='tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-30 bg-surface tw-border-b tw-border-white/5 tf-container tw-max-w-[672px] tw-mx-auto'>
                    <div className='tw-py-6 tw-flex tw-items-center tw-justify-between'>
                        <a href='/assets/index' className='tw-flex tw-items-center tw-gap-2 tw-text-white/70 tw-hover:tw-text-white tw-transition-colors'>
                            <FiArrowLeft size={20} />
                            <span className='tw-text-sm tw-font-medium'>Back</span>
                        </a>
                        <h1 className='tw-font-semibold tw-text-[20px]'>
                            ({asset?.name})
                        </h1>
                        <a href='/home' className='tw-flex tw-items-center tw-gap-2 tw-text-white/70 tw-hover:tw-text-white tw-transition-colors'>
                            <span className='tw-text-sm tw-font-medium'>Home</span>
                            <BiHome size={20} />
                        </a>
                    </div>
                </div>
                <div className="tw-border-2 tw-border-solid tw-border-white/10 tw-rounded-md tw-overflow-hidden tw-w-full tw-max-w-[672px] tw-mx-auto" style={{ marginTop: "100px" }}>
                    <iframe
                        src={asset?.iframe}
                        className="tw-w-full tw-bg-black tw-flex tw-items-center tw-justify-center"
                        style={{ height: "500px" }}
                    />
                </div>

                <div className="tw-mt-6 tw-border-2 tw-border-solid tw-border-yellow-500 tw-rounded-md tw-bg-black tw-p-3 tw-text-yellow-400 tw-text-sm tw-w-full tw-max-w-[672px] tw-mx-auto">
                    <strong>Delayed Notice!</strong><br />
                    {asset?.name} data is delayed by 15 minutes because of exchange requirements.
                </div>

                <form className="tw-mt-6 tw-flex tw-flex-col tw-border-2 tw-border-solid tw-border-white/10 tw-rounded-md tw-overflow-hidden tw-w-full tw-max-w-[672px] tw-mx-auto tw-p-6 tw-mb-[100px]" style={{ gap: "24px" }}>
                    <div>
                        <label className="tw-block tw-mb-2 tw-text-sm tw-font-medium">Amount (USD)</label>
                        <input
                            type="number"
                            placeholder="Enter amount"
                            className="tw-bg-[#1a1a1a] tw-rounded-lg tw-text-white tw-border-white tw-outline-none tw-text-[16px] tw-focus:tw-ring-0 tw-focus:tw-outline-none"
                            style={{ height: "55px" }}
                        />
                    </div>

                    <div className='tw-relative'>
                        <label className="tw-block tw-mb-2 tw-text-sm tw-font-medium">Select Wallet</label>
                        <select className="tw-bg-[#1a1a1a] tw-rounded-lg tw-text-white tw-border-white tw-outline-none tw-text-[16px] tw-px-2" style={{ height: "55px" }}>
                            {loading ? (
                                <option>Loading...</option>
                            ) : (
                                coins.map((coin) => (
                                    <option key={coin.id} value={coin.name}>
                                        {coin.name}
                                    </option>
                                ))
                            )}
                        </select>
                        <div className="tw-absolute tw-right-3 tw-top-[55%] tw-pointer-events-none tw-text-white">
                            <BiChevronDown size={20} />
                        </div>
                    </div>

                    <div className='tw-relative'>
                        <label className="tw-block tw-mb-2 tw-text-sm tw-font-medium">Timeframe</label>
                        <select className="tw-bg-[#1a1a1a] tw-rounded-lg tw-text-white tw-border-white tw-outline-none tw-text-[16px] tw-px-2" style={{ height: "55px" }}>
                            {[...Array(30)].map((_, i) => (
                                <option key={i + 1}>{`${i + 1} min`}</option>
                            ))}
                        </select>
                        <div className="tw-absolute tw-right-3 tw-top-[55%] tw-pointer-events-none tw-text-white">
                            <BiChevronDown size={20} />
                        </div>
                    </div>

                    <div className='tw-relative'>
                        <label className="tw-block tw-mb-2 tw-text-sm tw-font-medium">Leverage</label>
                        <select className="tw-bg-[#1a1a1a] tw-rounded-lg tw-border-white tw-text-white tw-outline-none tw-text-[16px] tw-px-2" style={{ height: "55px" }}>
                            <option>1x</option>
                            <option>5x</option>
                            <option>10x</option>
                        </select>
                        <div className="tw-absolute tw-right-3 tw-top-[55%] tw-pointer-events-none tw-text-white">
                            <BiChevronDown size={20} />
                        </div>
                    </div>

                    <div className="tw-flex tw-justify-between tw-gap-4 tw-mt-4">
                        <button type="submit" className="tw-flex-1 tw-bg-[#22c55e] tw-hover:tw-bg-[#16a34a] tw-py-2 tw-rounded-lg tw-font-semibold tw-border-none tw-text-[16px] tw-text-white !tw-px-[24px] !tw-py-[12px]">
                            Buy
                        </button>
                        <button type="button" className="tw-flex-1 tw-bg-[#ef4444] tw-hover:tw-bg-[#dc2626] tw-py-2 tw-rounded-lg tw-font-semibold tw-border-none tw-text-[16px] tw-text-white !tw-px-[24px] !tw-py-[12px]">
                            Sell
                        </button>
                    </div>
                </form>
            </div>
            <Footer1 />
        </>
    );
}
