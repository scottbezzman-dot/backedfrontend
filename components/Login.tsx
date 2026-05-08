"use client";

import Link from "next/link";
import GoBackButton from "./BackButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import apiClient, { setAuthToken } from "@/lib/axios-config";
import { toast } from "react-toastify";


export default function Login() {

  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPass, setShowPass] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/home");
    }
  }, [router]);

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
  const response = await apiClient.post('/api/auth/login_with_password', {
        email: formData.email,
        password: formData.password,
      });

      console.log("✅ API Response:", response.data);

      if (response.data.status_code) {
  // alert("✅ Login successful!");
        toast.success('Login successfully');
        // ✅ Save token using the helper function
        setAuthToken(response.data.token);

        // ✅ Redirect to home
        router.push("/home");
      } else {
        toast.error(response.data.msg);
      }
    } catch (err) {
      const error = err as AxiosError<{ msg: string }>;
      toast.error(error.response.data.msg);
    }
  };

  return (
    <>
      <div className="header fixed-top bg-surface">
        <a href="#" className="left back-btn">
          <GoBackButton />
        </a>
      </div>
      <div className="pt-45 pb-20">
        <div className="tf-container">
          <div className="mt-32">
            <h2 className="text-center">Login Backedby Quantum</h2>
            <ul className="mt-40 socials-login">
              <li className="mt-12">
                <Link href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/google`} className="tf-btn md social dark">
                  <Image
                    alt="img"
                    src="/images/logo/google.jpg"
                    width={21}
                    height={20}
                  />
                  Continue with Google
                </Link>
              </li>
              
            </ul>
          </div>

          <div className="auth-line mt-12">Or</div>

          <form onSubmit={handleLogin} className="mt-16">
            <fieldset className="mt-16">
              <label className="label-ip">
                <p className="mb-8 text-small">Email</p>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Example@gmail.com"
                />
              </label>
            </fieldset>

            <fieldset className="mt-16 mb-12">
              <label className="label-ip">
                <p className="mb-8 text-small">password</p>
                <div className="box-auth-pass">
                  <input
                    type={showPass ? "text" : "password"}
                    required
                    placeholder="Your password"
                    className="password-field"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                  <span
                    className="show-pass"
                    onClick={() => setShowPass((prev) => !prev)}
                  >
                    <i className="icon-view" />
                    <i className="icon-view-hide" />
                  </span>
                </div>
              </label>
            </fieldset>

            <Link href={`/reset-pass`} className="text-secondary">
              Forgot Password?
            </Link>

            <button type="submit" className="mt-20">
              Login
            </button>

            <p className="mt-20 text-center text-small">
              Don't have an account? <Link href={`/register`}>Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
