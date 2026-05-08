'use client'
import Link from 'next/link';
import '../../../app/globals.css';
import { useEffect, useState } from 'react';
import apiClient from '@/lib/axios-config';
import { use } from 'react';
import Footer1 from '@/components/footers/Footer1';

export default function CoinPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = use(params);
  const coinName = name;
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const res = await apiClient.get(`/api/history/iframe/${coinName}`);
        if (res.data.status_code) {
          setData(res.data.data);
        }
      } catch (err) {
        console.error("Error in API call:", err);
      // alert(err.response?.data?.msg || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchWallets();
  }, []);

  return (
    <>
    <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-h-screen tw-text-center tw-py-24 tw-w-full tf-container'>
      <h1 className='tw-mb-3' style={{ color: 'lime', fontSize: '48px' }}>
        {coinName}
      </h1>
      <p style={{ color: 'white', fontSize: '20px', marginBottom: '20px' }}>
        Live {coinName} Price:{" "}
        {loading ? "Loading..." : data?.current_price_usd !== null ? `$${data?.current_price_usd}` : "N/A"}{!loading && <span className={data?.usd_24h_change < 0 ? "text-danger" : "text-primary"}>({data?.usd_24h_change?.toFixed(2)})</span>}
      </p>
      <div className='tw-w-full tw-flex tw-items-center tw-justify-center'>
        <div
          style={{
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
          }}
        >
          <iframe
            src={data?.link}
            width="100%"
            height="400"
            style={{
              border: 'none',
              borderRadius: '8px',
              display: 'block'
            }}
            title={`${coinName} Price Chart`}
          />
        </div>
      </div>
      <div className="tw-my-16 tw-flex tw-flex-row tw-gap-[16px] tw-justify-center">
      <Link
          href={`/deposit`}
          className="tf-list-item tw-w-[72px] tw-d-flex tw-flex-column tw-gap-[12px] tw-align-items-center tw-border-2 tw-border-solid tw-p-2 tw-rounded-lg"
        >
          <span className="tw-bg-surface tw-d-flex tw-justify-content-center tw-align-items-center tw-flex tw-justify-center tw-items-center">
            <i className="icon icon-way2" />
          </span>
          Receive
        </Link>
        
        <Link
          href={`/exchange-market`}
          className="tf-list-item tw-w-[72px] tw-d-flex tw-flex-column tw-gap-[12px] tw-align-items-center tw-border-2 tw-border-solid tw-p-2 tw-rounded-lg"
        >
          <span className="tw-bg-surface tw-d-flex tw-justify-content-center tw-align-items-center tw-flex tw-justify-center tw-items-center">
            <i className="icon icon-way" />
          </span>
          Send
        </Link>
        
        <Link
          href={`/buy`}
          className="tf-list-item tw-w-[72px] tw-d-flex tw-flex-column tw-gap-[12px] tw-align-items-center tw-border-2 tw-border-solid tw-p-2 tw-rounded-lg"
        >
          <span className="tw-bg-surface tw-d-flex tw-justify-content-center tw-align-items-center tw-flex tw-justify-center tw-items-center">
            <i className="icon icon-wallet" />
          </span>
          Buy
        </Link>
        
        <Link
          href={`/swap`}
          className="tf-list-item tw-w-[72px] tw-d-flex tw-flex-column tw-gap-[12px] tw-align-items-center tw-border-2 tw-border-solid tw-p-2 tw-rounded-lg"
        >
          <span className="tw-bg-surface tw-d-flex tw-justify-content-center tw-align-items-center tw-flex tw-justify-center tw-items-center">
            <i className="icon icon-exchange" />
          </span>
          Swap
        </Link>
      </div>
      <div style={{width:'100%', backgroundColor:'#1a1a1a', border:'1px solid #333', borderRadius:'8px', padding:'1rem', marginBottom:'2rem'}}>
        <h5 style={{textAlign:'left', fontWeight:600, fontSize:'1rem', marginBottom:'1rem'}}>Recent Transactions</h5>
        <div style={{color:'#888', textAlign:'center', padding:'1rem'}}>
          <p>No transactions found for Bitcoin.</p>
        </div>
      </div>
    </div>
    <Footer1 />
    </>
  );
}