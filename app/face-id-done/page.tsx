import React from "react";
import Image from "next/image";
import RedirectComponent from "@/components/RedirectComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Face Id Done || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <RedirectComponent redirectRoute="/verification-done" />
      <div className="bg-face">
        <div className="tf-container">
          <h5 className="mt-12 text-center text-secondary">
            Please look into the camera and hold still
          </h5>
          <div
            className="mt-8 pt-45 banner-scan-profile style-2 m--16 pb-16"
            style={{
              backgroundImage: 'url("/images/banner/banner-faceId2.png")',
            }}
          >
            <div className="line-qr">
              <Image
                alt="img"
                src="/images/banner/line-qr.png"
                width={515}
                height={484}
              />
            </div>
            <div className="overlay" />
            <div className="scan-done">
              <a
                href={`/verification-done`}
                className="circle-box xl bg-circle check-icon bg-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
