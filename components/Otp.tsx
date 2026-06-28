"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import GoBackButton from "./BackButton";

// Define the component's state type for OTP (an array of strings, each string represents a digit)
const Otp: React.FC = () => {
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
        <h3>OTP</h3>
      </div>
      <div className="pt-45 pb-20">
        <div className="tf-container">
          <form onSubmit={(e) => e.preventDefault()} className="mt-32">
            <div className="digit-group mt-12">
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
              A code has been sent to your phone
            </p>
            <p className="d-flex justify-content-center mt-4 text-center text-button text-primary fw-6">
              Resend in&nbsp;
              <span
                className="js-countdown"
                data-timer={60}
                data-labels=" :  ,  : , : , "
              />
            </p>
            <Link href={`/info-received`} className="mt-40 tf-btn lg primary">
              Confirm
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Otp;
