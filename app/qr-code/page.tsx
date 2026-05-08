import React from "react";
import Image from "next/image";
import GoBackButton from "@/components/BackButton";
import RedirectComponent from "@/components/RedirectComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qr Code || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <>
        <RedirectComponent redirectRoute="/profile" />
        <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
          <a href="#" className="left back-btn">
            <GoBackButton />
          </a>
          <h3>QR code</h3>
          <a href="#" className="right">
            <i className="icon-question" />
          </a>
        </div>
        <div className="pt-45 pb-16">
          <div className="tf-container">
            <h2 className="mt-20 text-center">Your QR Code</h2>
            <div className="mt-40 banner-qr">
              <Image
                alt="img"
                src="/images/banner/banner-qrcode.png"
                width={542}
                height={450}
              />
            </div>
          </div>
        </div>
      </>
    </>
  );
};
export default Page;
