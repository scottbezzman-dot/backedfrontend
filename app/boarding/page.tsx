import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boarding || Backedby Quantum crypto app",
  description: "Backedby Quantum crypto app",
};

const Page: React.FC = () => {
  return (
    <>
      <div className="header">
        <Link href={`/log-in`} className="right">
          Skip
        </Link>
      </div>
      <div className="wrap-boarding">
        <div className="tf-container">
          <div className="d-flex flex-column min-vh-100 justify-content-between">
            <div className="banner-boarding2 mt-20">
              <Image
                alt="img"
                src="/images/banner/boarding2.jpg"
                width={537}
                height={417}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={375}
                height={371}
                viewBox="0 0 390 371"
                fill="none"
              >
                <g opacity="0.8" filter="url(#filter0_f_1_12104)">
                  <path
                    d="M296.173 185.722C185.542 269.933 258.671 269.933 212.41 269.933C166.148 269.933 255.608 286.881 128.646 185.722C1.68354 84.5628 166.148 101.511 212.41 101.511C258.671 101.511 406.804 101.511 296.173 185.722Z"
                    fill="url(#paint0_linear_1_12104)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_1_12104"
                    x="-18.5225"
                    y="0.443359"
                    width="454.85"
                    height="370.557"
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
                      result="effect1_foregroundBlur_1_12104"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_1_12104"
                    x1="304.471"
                    y1="100.443"
                    x2="199.186"
                    y2="312.56"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E250E5" />
                    <stop offset={1} stopColor="#4B50E6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="content mb-32">
              <h2 className="text-center">Top-notch Security and Safety!</h2>
              <p className="mt-8 text-center text-large">
                With advanced encryption technology, your information and assets
                are protected with utmost security.
              </p>
              <Link href={`/boarding2`} className="tf-btn primary md mt-40">
                Next{" "}
              </Link>
              <p className="mt-20 text-center mb-35">
                By creating an account, you’re agree to our
                <Link
                  href='/about-us'
                  className="text-white"
                  // data-bs-toggle="modal"
                >
                  {" "}
                  About Us
                </Link>
                {/* {" "}
                and
                <a
                  href="#notiPrivacy"
                  className="text-white"
                  data-bs-toggle="modal"
                >
                  {" "}
                  Term of use
                </a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
