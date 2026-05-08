import React from "react";
import Link from "next/link";
import Image from "next/image";
import GoBackButton from "@/components/BackButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Info Recievied || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <>
        <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
          <a href="#" className="left back-btn">
            <GoBackButton />
          </a>
        </div>
        <div className="pt-45 pb-16">
          <div className="tf-container">
            <div className="banner-received mt-32">
              <Image
                alt="img"
                src="/images/banner/banner1.jpg"
                width={407}
                height={461}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={350}
                height={350}
                viewBox="0 0 390 350"
                fill="none"
              >
                <g opacity="0.8" filter="url(#filter0_f_1_1747)">
                  <path
                    d="M263.966 174.967C166.335 248.996 230.871 248.996 190.046 248.996C149.221 248.996 228.168 263.895 116.126 174.967C4.0829 86.0396 149.221 100.938 190.046 100.938C230.871 100.938 361.596 100.938 263.966 174.967Z"
                    fill="url(#paint0_linear_1_1747)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_1_1747"
                    x="-25.5"
                    y={0}
                    width="424.902"
                    height="349.934"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation={50}
                      result="effect1_foregroundBlur_1_1747"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1_1747"
                    x1="271.289"
                    y1={100}
                    x2="178.95"
                    y2="286.752"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E250E5" />
                    <stop offset={1} stopColor="#4B50E6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className="mt-40 text-center">Information received.</h2>
            <p className="mt-12 text-center text-large">
              Your information has been confirmed, welcome to Backedby Quantum!
            </p>
            <Link href={`/log-in`} className="tf-btn primary lg mt-40">
              Done
            </Link>
          </div>
        </div>
      </>
    </>
  );
};
export default Page;
