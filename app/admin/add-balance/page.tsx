"use client";

import { useEffect, useState } from "react";
import apiClient from "@/lib/axios-config";
import { toast } from "react-toastify";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  role: string;
}

interface CoinBalance {
  coin_id: number;
  name: string;
  unique_id: string;
  icon: string;
  type: string;
  balance: number;
}

export default function AdminAddBalancePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // Selected user and their coins state for the balance edit modal
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [coinBalances, setCoinBalances] = useState<CoinBalance[]>([]);
  const [loadingCoins, setLoadingCoins] = useState(false);
  const [updatingCoins, setUpdatingCoins] = useState<number | null>(null); // tracks which coin_id is updating

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await apiClient.get("/api/admin/users");
        if (res.data.status_code) {
          // Keep only standard users or list all
          setUsers(res.data.users || []);
        }
      } catch (err: any) {
        console.error("Error fetching users for balance:", err);
        toast.error("Failed to load user records.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const openBalanceModal = async (user: User) => {
    setSelectedUser(user);
    setLoadingCoins(true);
    setCoinBalances([]);
    try {
      const res = await apiClient.get(`/api/admin/users/${user.id}/coins`);
      if (res.data.status_code) {
        setCoinBalances(res.data.coins || []);
      }
    } catch (err: any) {
      console.error("Error loading user coins:", err);
      toast.error("Failed to load user coin balances.");
      setSelectedUser(null);
    } finally {
      setLoadingCoins(false);
    }
  };

  const handleUpdateBalance = async (coinId: number, newBalance: number) => {
    if (!selectedUser) return;
    setUpdatingCoins(coinId);
    try {
      const res = await apiClient.post(`/api/admin/users/${selectedUser.id}/balance`, {
        coin_id: coinId,
        balance: newBalance
      });
      if (res.data.status_code) {
        toast.success("Coin balance successfully updated!");
        // Update local coin list state
        setCoinBalances(prev =>
          prev.map(c => (c.coin_id === coinId ? { ...c, balance: newBalance } : c))
        );
      }
    } catch (err: any) {
      console.error("Error updating user balance:", err);
      toast.error("Failed to update user balance.");
    } finally {
      setUpdatingCoins(null);
    }
  };

  if (loading) {
    return (
      <div className="tw-py-12 tw-text-center tw-space-y-4">
        <div className="tw-w-10 tw-h-10 tw-border-4 tw-border-green-500 tw-border-t-transparent tw-rounded-full tw-animate-spin tw-mx-auto"></div>
        <p className="tw-text-gray-400 tw-text-sm">Loading accounts...</p>
      </div>
    );
  }

  return (
    <div className="tw-space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="tw-text-lg tw-font-bold tw-tracking-tight tw-text-white">Update Coin Balances</h1>
        <p className="tw-text-gray-400 tw-text-xs tw-mt-1">
          Adjust Old balance, top-up crypto coins for any user account.
        </p>
      </div>

      {/* Users Table */}
      <div className="tw-bg-[#161b22] tw-border tw-border-solid tw-border-gray-800 tw-rounded-2xl tw-overflow-hidden">
        <div className="tw-overflow-x-auto">
          <table className="tw-w-full tw-text-left tw-border-collapse">
            <thead>
              <tr className="tw-border-b tw-border-solid tw-border-gray-800 tw-bg-black/10">
                <th className="tw-px-6 tw-py-4 tw-text-xs tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider">Username</th>
                <th className="tw-px-6 tw-py-4 tw-text-xs tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider">Email Address</th>
                <th className="tw-px-6 tw-py-4 tw-text-xs tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider">Role</th>
                <th className="tw-px-6 tw-py-4 tw-text-xs tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider tw-text-right">Action</th>
              </tr>
            </thead>
            <tbody className="tw-divide-y tw-divide-solid tw-divide-gray-800/50 tw-overflow-auto">
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id} className="hover:tw-bg-white/[0.01] tw-transition">
                    <td className="tw-px-6 tw-py-4 tw-font-semibold tw-text-white tw-text-sm">{user.username || user.name}</td>
                    <td className="tw-px-6 tw-py-4 tw-text-sm tw-text-gray-300">{user.email}</td>
                    <td className="tw-px-6 tw-py-4">
                      <span className="tw-px-2 tw-py-0.5 tw-bg-gray-800 tw-text-gray-400 tw-rounded tw-text-[10px] tw-font-bold tw-uppercase">
                        {user.role}
                      </span>
                    </td>
                    <td className="tw-px-6 tw-py-4 tw-text-right">
                      <button
                        onClick={() => openBalanceModal(user)}
                        className="tw-inline-flex text-nowrap tw-items-center tw-bg-green-600 hover:tw-bg-green-500 hover:tw-text-white tw-text-white tw-text-xs tw-font-bold tw-px-4 tw-py-2 tw-rounded-xl tw-transition tw-shadow-md"
                      >
                        ⚙️ Manage
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="tw-px-6 tw-py-12 tw-text-center tw-text-gray-500 tw-text-sm">
                    No users registered.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Balance Modal Backdrop */}
      {selectedUser && (
        <div className="tw-fixed tw-inset-0 tw-z-50 tw-bg-black/60 tw-backdrop-blur-sm tw-flex tw-justify-center tw-items-center tw-p-4">
          {/* Modal Container */}
          <div className="tw-w-full tw-max-w-xl tw-bg-[#161b22] tw-border tw-border-solid tw-border-gray-800 tw-rounded-2xl tw-overflow-hidden tw-shadow-2xl tw-animate-zoom-in">
            {/* Modal Header */}
            <div className="tw-px-6 tw-py-4 tw-border-b tw-border-solid tw-border-gray-800 tw-flex tw-justify-between tw-items-center">
              <div>
                <h3 className="tw-text-base tw-font-bold tw-text-white">Balances for: {selectedUser.name}</h3>
                <p className="tw-text-xs tw-text-gray-400 tw-mt-0.5">{selectedUser.email}</p>
              </div>
              <button
                onClick={() => setSelectedUser(null)}
                className="tw-w-8 tw-h-8 tw-rounded-xl tw-bg-gray-800/40 hover:tw-bg-gray-800 tw-text-gray-400 hover:tw-text-white tw-flex tw-items-center tw-justify-center tw-transition"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="tw-p-6 tw-max-h-[60vh] tw-overflow-y-auto tw-space-y-4">
              {loadingCoins ? (
                <div className="tw-py-12 tw-text-center tw-space-y-3">
                  <div className="tw-w-8 tw-h-8 tw-border-4 tw-border-green-500 tw-border-t-transparent tw-rounded-full tw-animate-spin tw-mx-auto"></div>
                  <p className="tw-text-xs tw-text-gray-400">Loading wallet balances...</p>
                </div>
              ) : coinBalances.length > 0 ? (
                <div className="tw-divide-y tw-divide-solid tw-divide-gray-800/50">
                  {coinBalances.map((coin) => {
                    // Local input state for each coin
                    return (
                      <CoinBalanceRow
                        key={coin.coin_id}
                        coin={coin}
                        isUpdating={updatingCoins === coin.coin_id}
                        onUpdate={(newVal) => handleUpdateBalance(coin.coin_id, newVal)}
                      />
                    );
                  })}
                </div>
              ) : (
                <p className="tw-text-center tw-text-gray-500 tw-text-xs tw-py-6">No support assets available.</p>
              )}
            </div>

            {/* Modal Footer */}
            <div className="tw-px-6 tw-py-4 tw-border-t tw-border-solid tw-border-gray-800 tw-bg-black/10 tw-flex tw-justify-end">
              <button
                onClick={() => setSelectedUser(null)}
                className="tw-bg-[#0d1117] hover:tw-bg-[#080b0f] tw-border tw-border-solid tw-border-gray-800 tw-rounded-xl tw-px-5 tw-py-2 tw-text-xs tw-font-bold tw-text-gray-300 tw-transition"
              >
                Close Manager
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Separate inline row component to easily handle individual inputs
function CoinBalanceRow({
  coin,
  isUpdating,
  onUpdate
}: {
  coin: CoinBalance;
  isUpdating: boolean;
  onUpdate: (newVal: number) => void;
}) {
  const [inputValue, setInputValue] = useState(coin.balance.toString());

  useEffect(() => {
    setInputValue(coin.balance.toString());
  }, [coin.balance]);

  return (
    <div className="tw-py-3.5 tw-flex tw-items-center tw-justify-between tw-gap-4">
      {/* Coin Icon & Name */}
      <div className="tw-flex tw-items-center tw-gap-3">
        <div className="tw-w-8 tw-h-8 tw-bg-[#0d1117] tw-border tw-border-solid tw-border-gray-800 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
          {coin.icon ? (
            <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000"}${coin.icon}`} alt={coin.name} className="tw-w-6 tw-h-6 tw-object-contain" onError={(e) => {
              // fallback to generic symbol letters if icon fails
              (e.target as HTMLElement).style.display = 'none';
            }} />
          ) : (
            <span className="tw-text-[10px] tw-font-bold tw-text-gray-400">{coin.name}</span>
          )}
        </div>
        <div>
          <div className="tw-text-xs tw-font-bold tw-text-white">{coin.name}</div>
          <div className="tw-text-[10px] tw-text-gray-500 tw-capitalize">{coin.type}</div>
        </div>
      </div>

      {/* Input & Update */}
      <div className="tw-flex tw-justify-between tw-items-center tw-gap-2">
        <div className="tw-flex tw-gap-1 tw-text-right">
          <div className="tw-text-[10px] tw-text-gray-500 tw-text-nowrap">Current Balance</div>
          <div className="tw-text-xs tw-font-semibold tw-text-gray-300">{coin.balance}</div>
        </div>

        <input
          type="number"
          step="any"
          min="0"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="tw-w-16 tw-bg-[#0d1117] tw-border tw-border-solid tw-border-gray-800 focus:tw-border-green-500 tw-rounded-xl tw-px-3 tw-py-1.5 tw-text-xs tw-text-white focus:tw-outline-none tw-transition"
          placeholder="New balance"
        />

        <button
          onClick={() => {
            const parsed = parseFloat(inputValue);
            if (isNaN(parsed) || parsed < 0) {
              toast.error("Balance value must be zero or greater.");
              return;
            }
            onUpdate(parsed);
          }}
          disabled={isUpdating}
          className="tw-bg-green-600 hover:tw-bg-green-500 disabled:tw-bg-green-800 tw-text-white tw-text-[11px] tw-font-bold tw-px-3.5 tw-py-2 tw-rounded-xl tw-transition tw-shadow-sm"
        >
          {isUpdating ? "..." : "Save"}
        </button>
      </div>
    </div>
  );
}