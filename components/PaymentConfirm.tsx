"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GoBackButton from "./BackButton";
export default function PaymentConfirm() {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]); // Updated typing to allow null
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]); // Typing the OTP state as an array of strings

  // Handle change event for input fields
  const handleChange = (index: number, value: string): void => {
    // Ensure only digits are entered
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move to the next input if a digit is entered
    if (value && index < inputsRef.current.length - 1) {
      const nextInput = inputsRef.current[index + 1];
      if (nextInput) nextInput.focus(); // Ensure nextInput is not null before focusing
    }
  };

  // Handle key down event for backspace
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const updatedOtp = [...otp];
      updatedOtp[index - 1] = "";
      setOtp(updatedOtp);
      const nextInput = inputsRef.current[index - 1];
      if (nextInput) nextInput.focus(); // Ensure nextInput is not null before focusing
    }
  };
  return (
    <>
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="#" className="left back-btn">
          <GoBackButton />
        </a>
        <h3>Confirm</h3>
      </div>
      <div className="pt-45 pb-90">
        <div className="tf-container">
          <p className="text-center text-small mt-4">Transfer amount</p>
          <h1 className="mt-8 text-center">$1200.0</h1>
          <div className="mt-12 accent-box-v3 bg-menuDark">
            <div className="pb-10 line-bt">
              <span>From</span>
              <div className="mt-4 card-item">
                <Image
                  alt="img"
                  className="img"
                  src="/images/card/card1.png"
                  width={72}
                  height={48}
                />
                <div className="content flex-grow-1">
                  <p className="text-large text-white">Visacard</p>
                  <p>**** **** **** 4234</p>
                </div>
              </div>
            </div>
            <div className="pt-10">
              <span>To</span>
              <div className="mt-4 card-item">
                <Image
                  alt="img"
                  className="img"
                  src="/images/card/card2.png"
                  width={72}
                  height={48}
                />
                <div className="content flex-grow-1">
                  <p className="text-large text-white">Tony Nguyen</p>
                  <p>**** **** **** 4234</p>
                </div>
              </div>
            </div>
          </div>
          <ul className="mt-12 accent-box-v4 bg-menuDark">
            <li className="d-flex align-items-center justify-content-between pb-8 line-bt">
              <span className="text-small">Transaction fee</span>
              <span className="text-large text-white">Free</span>
            </li>
            <li className="d-flex align-items-center justify-content-between pt-8 pb-8 line-bt">
              <span className="text-small">Amount in words </span>
              <span className="text-large text-white text-end">
                One thousand two <br />
                hundred dollars
              </span>
            </li>
            <li className="d-flex align-items-center justify-content-between pt-8 pb-8 line-bt">
              <span className="text-small">Transfer form</span>
              <span className="text-large text-white">Transfer to bank</span>
            </li>
            <li className="d-flex align-items-center justify-content-between pt-8 pb-8">
              <span className="text-small">Notification</span>
              <span className="text-large text-white">BTC</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="menubar-footer footer-fixed bg-surface">
        <div className="inner-bar">
          <a
            href="#"
            className="tf-btn lg primary"
            data-bs-toggle="modal"
            data-bs-target="#otpPin"
          >
            Confirm
          </a>
        </div>
      </div>
      {/* filter otp */}
      <div className="modal fade action-sheet sheet-down" id="otpPin">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="header d-flex justify-content-center align-items-center">
              <span className="left icon-cancel" data-bs-dismiss="modal" />
              <h3>Enter your pin</h3>
            </div>
            <div className="modal-body">
              <div className="digit-group">
                {Array(4)
                  .fill("")
                  .map((_, index) => (
                    <input
                      key={index}
                      type="number"
                      maxLength={1}
                      value={otp[index]}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      ref={(el) => {
                        // Ref callback should not return anything
                        inputsRef.current[index] = el;
                      }}
                      className="otp-input"
                    />
                  ))}
              </div>
              <p className="text-center text-small text-white mt-16">
                Enter your PIN to proceed
              </p>
              <a
                href="#success"
                className="mt-40 tf-btn lg primary"
                data-bs-toggle="modal"
              >
                Confirm
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* filter success */}
      <div className="modal fade modalCenter" id="success">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content success_box">
            <div className="icon-1 ani3">
              <span className="circle-box lg bg-circle check-icon bg-primary" />
            </div>
            <div className="icon-2 ani5">
              <span className="circle-box md bg-primary" />
            </div>
            <div className="icon-3 ani8">
              <span className="circle-box md bg-primary" />
            </div>
            <div className="icon-4 ani2">
              <span className="circle-box sm bg-primary" />
            </div>
            <div className="text-center">
              <h2 className="text-surface">Successful!</h2>
              <p className="text-small mt-8">Your transfer has been done!</p>
              <h5 className="mt-16 text-surface">Transfer amount</h5>
              <h1 className="mt-8 text-primary">$ 1200.0</h1>
              <p className="mt-16 text-surface text-button">Notification</p>
              <p className="text-small mt-4">BTC payment</p>
            </div>
            <Link href={`/home`} className="tf-btn lg primary mt-40">
              Done
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
