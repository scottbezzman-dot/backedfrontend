import React from "react";
import Image from "next/image";
import RedirectComponent from "@/components/RedirectComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camera Scan || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <RedirectComponent redirectRoute="/camera-done" />
      <div className="bg-camera">
        <div className="tf-container">
          <div className="pt-30 pb-30">
            <div className="line-qr">
              <Image
                alt="img"
                src="/images/banner/line-qr.png"
                width={515}
                height={484}
              />
            </div>
            <div className="box-noti-camera">
              <span className="icon-think icon" />
              <p className="text-large text-surface">
                Point your camera at your Citizenship ID to complete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
