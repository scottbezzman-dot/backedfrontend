import React from "react";
import Image from "next/image";
import RedirectComponent from "@/components/RedirectComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Face Id || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <RedirectComponent redirectRoute="/face-id-done" />
      <div className="bg-face">
        <div className="tf-container">
          <h5 className="mt-12 text-center text-secondary">
            Please look into the camera and hold still
          </h5>
          <div
            className="mt-8 pt-45 banner-scan-profile m--16 pb-16"
            style={{
              backgroundImage: 'url("/images/banner/banner-faceId.png")',
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
            <div className="box-noti-camera">
              <span className="icon-think icon" />
              <p className="text-large text-surface">
                Adjust your camera orientation to show your face clearly to
                finish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
