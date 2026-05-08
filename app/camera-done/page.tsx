import React from "react";
import Image from "next/image";
import RedirectComponent from "@/components/RedirectComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camera Done || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <RedirectComponent redirectRoute="/camera-success" />
      <div className="bg-camera">
        <div className="tf-container">
          <div className="pt-30 pb-30 position-relative">
            <div className="line-qr">
              <Image
                alt="img"
                src="/images/banner/line-qr.png"
                width={515}
                height={484}
              />
            </div>
            <div className="scan-done">
              <a
                href={`/camera-success`}
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
