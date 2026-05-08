import Image from "next/image";
import bybit from '../../assets/bybit.jpg';
import ramp from '../../assets/Ramp.jpg';
import coinbase from '../../assets/coinbase.webp';
import kranken from '../../assets/kraken.jpg';
import gemini from '../../assets/Gemini.png';
import crypto from '../../assets/crypto.webp';
import transak from '../../assets/transak.jpg';
import arculus from '../../assets/arculus.jpg';
import '../../app/globals.css'
import Footer1 from "@/components/footers/Footer1";

const cryptoServices = [
    { name: "ByBit", desc: "Buy Bitcoin, Ethereum & more", logo: bybit, link:'https://www.bybitglobal.com/' },
    { name: "Ramp", desc: "Buy Bitcoin, Ethereum & more", logo: ramp, link:'https://ramp.network/' },
    { name: "CoinBase", desc: "Buy Bitcoin, Ethereum & more", logo: coinbase, link:'http://coinbase.com/' },
    { name: "Kraken", desc: "Buy Bitcoin, Ethereum & more", logo: kranken, link:'https://www.kraken.com/' },
    { name: "Gemini", desc: "Buy Bitcoin, Ethereum & more", logo: gemini, link:'https://www.gemini.com/' },
    { name: "Crypto.com", desc: "Buy Bitcoin, Ethereum & more", logo: crypto, link:'https://crypto.com/' },
    { name: "Transak", desc: "Buy Bitcoin, Ethereum & more", logo: transak,link:'https://transak.com/' },
    { name: "Arculus", desc: "Buy Bitcoin, Ethereum & more", logo: arculus,link:'https://www.getarculus.com/' },
];

export default function BuyCryptoGrid() {
    return (
        <>
        <div className="tw-bg-[#11150f] tw-text-white tw-px-6 tw-pt-8 tf-container">
            <h2 className="tw-text-lg tw-font-semibold tw-mb-8">Buy Crypto</h2>
            <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-[20px]">
                {cryptoServices.map((service, i) => (
                    <a
                        href={service.link}
                        target="blank"
                        key={i}
                        className="tw-flex tw-items-center tw-gap-4 tw-bg-black/20 tw-rounded-lg tw-px-3 tw-py-2 tw-transition tw-border-2 tw-border-solid tw-border-[#f1f1f2]"
                    >
                       <div className="tw-w-10 tw-h-10 tw-relative tw-rounded-full tw-overflow-hidden tw-mr-[12px]">
                            <Image 
                                src={service.logo} 
                                alt={service.name} 
                                fill
                                className="tw-object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="tw-font-medium">{service.name}</h3>
                            <p className="tw-text-sm tw-text-neutral-400">{service.desc}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
        <Footer1 />
        </>
    );
}