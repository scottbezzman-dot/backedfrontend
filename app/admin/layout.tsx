"use client";

import { useEffect, useState, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import apiClient from "@/lib/axios-config";
import { toast } from "react-toastify";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminName, setAdminName] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const checkAdminAccess = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Please log in to access the admin panel.");
        router.push("/log-in");
        return;
      }

      try {
        const res = await apiClient.get("/api/admin/users");
        if (res.data.status_code) {
          setIsAdmin(true);
          const usersList = res.data.users || [];
          const decodedToken = JSON.parse(atob(token.split(".")[1]));
          const currentUserId = decodedToken.userId || decodedToken.id;
          const currentUser = usersList.find((u: any) => u.id === currentUserId);
          setAdminName(currentUser ? currentUser.name : "Admin");
        }
      } catch (err: any) {
        console.error("Admin verification failed:", err);
        toast.error("Access denied. Admin role required.");
        router.push("/home");
      } finally {
        setLoading(false);
      }
    };

    checkAdminAccess();
  }, [router]);

  if (loading) {
    return (
      <div className="tw-min-h-screen tw-bg-[#0d1117] tw-flex tw-justify-center tw-items-center tw-text-white">
        <div className="tw-text-center tw-space-y-4">
          <div className="tw-w-10 tw-h-10 tw-border-4 tw-border-green-500 tw-border-t-transparent tw-rounded-full tw-animate-spin tw-mx-auto"></div>
          <p className="tw-text-gray-400 tw-text-xs">Verifying Admin Credentials...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) return null;

  const navLinks = [
    { href: "/admin", label: "👥 Users & Phrases" },
    { href: "/admin/add-balance", label: "💰 Update Balances" }
  ];

  return (
    <div className="tw-min-h-screen tw-bg-[#0d1117] tw-text-white tw-flex tw-flex-col">
      {/* Top Header (Slightly smaller height on mobile) */}
      <header className="tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-h-10 lg:tw-h-12 tw-bg-[#161b22]/80 tw-backdrop-blur-md tw-border-b tw-border-solid tw-border-gray-800 tw-z-50 tw-px-3 md:tw-px-6 tw-flex tw-justify-between tw-items-center">
        <div className="tw-flex tw-items-center tw-gap-1.5 md:tw-gap-3">
          {/* Mobile Hamburger Toggle (Made highly compact/small) */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:tw-hidden tw-p-1 tw-rounded-md tw-bg-[#161b22] hover:tw-bg-gray-800 tw-text-gray-400 hover:tw-text-white tw-transition"
          >
            <svg className="tw-w-4 tw-h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <span className="tw-font-bold tw-text-xs md:tw-text-base tw-tracking-wider tw-text-white">ADMIN PANEL</span>
        </div>
        <div className="tw-flex tw-items-center tw-gap-2 md:tw-gap-4">
          <span className="tw-text-[11px] md:tw-text-sm tw-text-gray-400 tw-hidden sm:tw-inline">
            Welcome, <span className="tw-text-white tw-font-semibold">{adminName}</span>
          </span>
          <Link
            href="/home"
            className="tw-bg-[#0d1117] hover:tw-bg-black/30 tw-border tw-border-solid tw-border-gray-800 tw-rounded-lg tw-px-2 tw-py-1 tw-text-[9px] md:tw-text-xs tw-font-bold tw-text-gray-300 hover:tw-text-white tw-transition"
          >
            ← Back
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <div className="tw-flex tw-flex-1 tw-pt-14 lg:tw-pt-16">
        {/* Desktop Sidebar (Hidden on mobile) */}
        <aside className="tw-w-64 tw-bg-[#0d1117] tw-border-r tw-border-solid tw-border-gray-800 tw-fixed tw-top-16 tw-bottom-0 tw-left-0 tw-p-4 tw-space-y-2 tw-z-40 tw-hidden lg:tw-block">
          <div className="tw-py-2 tw-px-3 tw-text-[11px] tw-font-bold tw-text-gray-500 tw-uppercase tw-tracking-wider">
            Navigation Menu
          </div>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`tw-flex tw-items-center tw-px-4 tw-py-3 tw-rounded-xl tw-text-sm tw-font-semibold tw-transition ${isActive
                  ? "tw-bg-green-600 tw-text-white tw-shadow-lg tw-shadow-green-950/20"
                  : "tw-text-gray-400 hover:tw-text-white hover:tw-bg-[#161b22]"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </aside>

        {/* Mobile Sidebar Slide Drawer (Made more compact/narrow) */}
        {isMobileOpen && (
          <>
            <style jsx>{`
                @keyframes slideTopToBottom {
                  0% {
                    transform: translateY(-100%);
                  }
                  100% {
                    transform: translateY(0);
                  }
                }
                .animate-slideTopToBottom {
                  animation: slideTopToBottom 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
              `}
            </style>
            <div
              className="animate-slideTopToBottom tw-fixed tw-inset-0 tw-z-50 tw-bg-black/70 tw-backdrop-blur-sm lg:tw-hidden"
              onClick={() => setIsMobileOpen(false)}
            >
              <div
                className="tw-bg-[#0d1117] tw-border-r tw-border-solid tw-border-gray-800 tw-p-3 tw-space-y-1.5"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="tw-flex tw-justify-between tw-items-center tw-mb-4 tw-pt-1">
                  <span className="tw-font-bold tw-text-sm tw-text-gray-500 tw-uppercase tw-tracking-wider">Menu</span>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="tw-bg-transparent hover:tw-bg-transparent tw-w-max tw-text-gray-500 hover:tw-text-white tw-font-bold tw-p-1"
                  >
                    ✕
                  </button>
                </div>
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`tw-flex tw-items-center tw-px-3 tw-py-2 tw-rounded-xl tw-text-xs tw-font-semibold tw-transition ${isActive
                        ? "tw-bg-green-600 tw-text-white tw-shadow-md"
                        : "tw-text-gray-400 hover:tw-text-white hover:tw-bg-[#161b22]"
                        }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* Content Body (Slightly smaller padding on mobile) */}
        <main className="tw-flex-1 tw-ml-0 lg:tw-ml-64 tw-p-3 md:tw-p-8 tw-bg-[#0d1117] tw-overflow-hidden">
          <div className="tw-max-w-6xl tw-mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div >
  );
}