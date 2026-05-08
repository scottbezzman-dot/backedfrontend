"use client";

import { useState } from "react";
import GoBackButton from "./BackButton"; // adjust this import path as needed
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import apiClient from "@/lib/axios-config";
import { toast } from "react-toastify";


export default function Register() {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    country_code: "",
  });

  const handleSubmit = async (e : any) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
  // alert("Passwords do not match");
      toast.success('Passwords do not match')
      return;
    }

    try {
  const response = await apiClient.post('/api/auth/register', {
        username: formData.username,
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        country_code: formData.country_code,
      });
      console.log("Response",response);

      if (response.data.status_code) {
        router.push("/log-in");
        toast.success(response.data.msg)
      } else {
        toast.error(response.data.msg)
      }
    } catch (err) {
       const error = err as AxiosError<{ msg: string }>;
       toast.error(error.response?.data?.msg)
    }
  };

  return (
    <>
      <div className="header fixed-top bg-surface">
        <a href="#" className="left back-btn">
          <GoBackButton />
        </a>
      </div>
      <div className="pt-45">
        <div className="tf-container">
          <form onSubmit={handleSubmit} className="mt-32 mb-16">
            <h2 className="text-center">Register Backedby Quantum</h2>

            <fieldset className="mt-40">
              <label className="label-ip">
                <p className="mb-8 text-small">Username</p>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  required
                />
              </label>
            </fieldset>

            <fieldset className="mt-16">
              <label className="label-ip">
                <p className="mb-8 text-small">Name</p>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </label>
            </fieldset>

            <fieldset className="mt-16">
              <label className="label-ip">
                <p className="mb-8 text-small">Email</p>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </label>
            </fieldset>

            <fieldset className="mt-16">
              <label className="label-ip">
                <p className="mb-8 text-small">Phone Number</p>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </label>
            </fieldset>

            <fieldset className="mt-16">
              <label className="label-ip">
                <p className="mb-8 text-small">Country Code</p>
                <input
                  type="text"
                  placeholder="+1"
                  value={formData.country_code}
                  onChange={(e) =>
                    setFormData({ ...formData, country_code: e.target.value })
                  }
                  required
                />
              </label>
            </fieldset>

            <fieldset className="mt-16">
              <label className="label-ip">
                <p className="mb-8 text-small">Password</p>
                <div className="box-auth-pass">
                  <input
                    type={showPass ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                    placeholder="6 - 20 characters"
                  />
                  <span
                    onClick={() => setShowPass((prev) => !prev)}
                    className="show-pass"
                  >
                    <i className="icon-view" />
                    <i className="icon-view-hide" />
                  </span>
                </div>
              </label>
            </fieldset>

            <fieldset className="mt-16">
              <label className="label-ip">
                <p className="mb-8 text-small">Confirm Password</p>
                <div className="box-auth-pass">
                  <input
                    type={showPass2 ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    required
                    placeholder="Confirm password"
                  />
                  <span
                    onClick={() => setShowPass2((prev) => !prev)}
                    className="show-pass2"
                  >
                    <i className="icon-view" />
                    <i className="icon-view-hide" />
                  </span>
                </div>
              </label>
            </fieldset>

            <fieldset className="group-cb cb-signup mt-12">
              <input
                type="checkbox"
                className="tf-checkbox"
                id="cb-ip"
                defaultChecked
                required
              />
              <label htmlFor="cb-ip">
                I agree to{" "}
                <span className="text-white">Terms and condition</span>
              </label>
            </fieldset>

            <button type="submit" className="mt-40">
              Create an account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
