"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, Suspense } from "react";
import apiClient from "@/lib/axios-config";
import GoBackButton from "./BackButton";
import { toast } from "react-toastify";

function ChangePassword() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
  // alert("Token is missing from the URL.");
      toast.success('Token is missing from the URL.')
      return;
    }

    if (!newPassword || !confirmPassword) {
  // alert("Please enter both password fields.");
      toast.success('Please enter both password fields.')
      return;
    }

    if (newPassword !== confirmPassword) {
  // alert("Passwords do not match.");
      toast.success('Passwords do not match.')
      return;
    }

    setLoading(true);
    try {
      const response = await apiClient.post(
        '/api/auth/set_new_password',
        { password: newPassword }
      );

      if (response.data.status_code) {
  // alert("✅ Password reset successful. Please log in.");
      toast.success('Password reset successfully');
        router.push("/log-in");
      } else {
  // alert("❌ " + response.data.msg);
      }
    } catch (err: any) {
  // alert(err.response?.data?.msg || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="#" className="left back-btn">
          <GoBackButton />
        </a>
        <h3>Change login password</h3>
      </div>
      <div className="pt-45 pb-16">
        <div className="tf-container">
          <form onSubmit={handleSubmit}>
            {/* You can remove 'Current password' if this is a reset flow */}
            <fieldset className="mt-16">
              <label className="mb-8">New login password</label>
              <div className="box-auth-pass">
                <input
                  type="password"
                  required
                  placeholder="Enter your new password"
                  className="password-field"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
            </fieldset>

            <fieldset className="mt-16">
              <label className="mb-8">Confirm new login password</label>
              <div className="box-auth-pass">
                <input
                  type="password"
                  required
                  placeholder="Confirm new password"
                  className="password-field"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </fieldset>

            <button type="submit" className="mt-40 tf-btn lg" disabled={loading}>
              {loading ? "Resetting..." : "Confirm"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default function ChangePass() {
  return(
    <Suspense>
      <ChangePassword />
    </Suspense>
  )
}