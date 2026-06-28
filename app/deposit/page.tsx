'use client';
import { AxiosError } from 'axios';
import '../../app/globals.css'

import { useEffect, useState } from 'react';
import apiClient from '@/lib/axios-config';
import { useRouter } from 'next/navigation';
import Footer1 from '@/components/footers/Footer1';

interface Coin {
    id: string;
    name: string;
    unique_id: Record<string, { usd: number | string; }>;
}

export default function DepositPage() {
    const [coins, setCoins] = useState<Coin[]>([]);
    const [selectedCoin, setSelectedCoin] = useState<string>('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter();

    const selectedCoinData = coins.find(c => c.name === selectedCoin);

    const usdPrice: number | undefined = (() => {
        if (!selectedCoinData?.unique_id) return undefined;
        const key = Object.keys(selectedCoinData.unique_id)[0];
        const raw = selectedCoinData.unique_id[key]?.usd;
        const n = typeof raw === 'string' ? parseFloat(raw) : raw;
        return Number.isFinite(n as number) ? (n as number) : undefined;
    })();

    const coinAmount =
        amount && usdPrice
            ? (parseFloat(amount) / usdPrice).toFixed(8)
            : '0.00000000';

    const handleContinue = () => {
        if (!amount || parseFloat(amount) <= 0) {
            setError('Please enter a amount.');
            return;
        }
        setError('');
        router.push(`/deposit/confirm?coin=${selectedCoin}&amount=${amount}&usdPrice=${usdPrice}`);
    };

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const res = await apiClient.get('/api/wallet/get_wallets');
                if (res.data.status_code) {
                    setCoins(res.data.data);
                    if (res.data.data.length > 0) {
                        setSelectedCoin(res.data.data[0]?.name);
                    }
                }
            } catch (err) {
                const error = err as AxiosError<{ msg: string }>;
                // alert(error.response?.data?.msg || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };
        fetchCoins();
    }, []);

    return (
        <>
        <div className="tw-flex tw-items-center tw-justify-center tw-min-h-screen tf-container">
            <div className="tw-border-2 tw-border-solid tw-border-white tw-rounded-lg tw-p-6 tw-w-full tw-max-w-2xl tw-bg-surface tw-text-white">
                <label className="tw-block tw-mb-2 tw-text-sm tw-font-semibold">Select Wallet</label>
                <select
                    value={selectedCoin}
                    onChange={(e) => setSelectedCoin(e.target.value)}
                    className="tw-w-full tw-p-3 tw-bg-[#1a1a1a] tw-rounded-lg tw-text-white tw-outline-none tw-text-[16px]"
                >
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

                <label className="tw-block tw-mt-5 tw-mb-2 tw-text-sm tw-font-semibold">Amount to Deposit</label>
                <div className="tw-flex tw-items-center tw-bg-[#1a1a1a] tw-rounded-lg">
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0"
                        required
                        className="tw-flex-1 tw-bg-transparent tw-p-3 tw-text-white tw-outline-none tw-focus:tw-ring-0 tw-focus:tw-outline-none tw-border-0 tw-text-[16px]"
                    />
                    <span className="tw-text-white tw-font-semibold tw-p-2">USD</span>
                </div>
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

                <p className="text-sm mt-2 text-gray-300">
                    ≈ Input amount in USD{' '}
                    <span className="text-green-500">
                        {loading ? 'Loading...' : `${coinAmount} ${selectedCoin.toLowerCase()}`}
                    </span>
                </p>

                <button onClick={handleContinue} className="tw-w-full tw-mt-5 tw-text-[16px] tw-text-black tw-bg-[#9b5de5] tw-hover:tw-bg-[#9b5df4] tw-border-none tw-hover:tw-text-black tw-p-3 tw-rounded-lg tw-font-semibold">
                    Continue Deposit
                </button>
            </div>
        </div>
        <Footer1 />
        </>
    );
}