// "use client";

// import { useEffect, useState } from "react";
// import apiClient from "@/lib/axios-config";
// import { toast } from "react-toastify";

// interface User {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   role: string;
// }

// interface CoinBalance {
//   coin_id: number;
//   name: string;
//   unique_id: string;
//   icon: string;
//   type: string;
//   balance: number;
// }

// export default function AdminAddBalancePage() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Selected user and their coins state for the balance edit modal
//   const [selectedUser, setSelectedUser] = useState<User | null>(null);
//   const [coinBalances, setCoinBalances] = useState<CoinBalance[]>([]);
//   const [loadingCoins, setLoadingCoins] = useState(false);
//   const [updatingCoins, setUpdatingCoins] = useState<number | null>(null); // tracks which coin_id is updating

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await apiClient.get("/api/admin/users");
//         if (res.data.status_code) {
//           // Keep only standard users or list all
//           setUsers(res.data.users || []);
//         }
//       } catch (err: any) {
//         console.error("Error fetching users for balance:", err);
//         toast.error("Failed to load user records.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const openBalanceModal = async (user: User) => {
//     setSelectedUser(user);
//     setLoadingCoins(true);
//     setCoinBalances([]);
//     try {
//       const res = await apiClient.get(`/api/admin/users/${user.id}/coins`);
//       if (res.data.status_code) {
//         setCoinBalances(res.data.coins || []);
//       }
//     } catch (err: any) {
//       console.error("Error loading user coins:", err);
//       toast.error("Failed to load user coin balances.");
//       setSelectedUser(null);
//     } finally {
//       setLoadingCoins(false);
//     }
//   };

//   const handleUpdateBalance = async (coinId: number, newBalance: number) => {
//     if (!selectedUser) return;
//     setUpdatingCoins(coinId);
//     try {
//       const res = await apiClient.post(`/api/admin/users/${selectedUser.id}/balance`, {
//         coin_id: coinId,
//         balance: newBalance
//       });
//       if (res.data.status_code) {
//         toast.success("Coin balance successfully updated!");
//         // Update local coin list state
//         setCoinBalances(prev =>
//           prev.map(c => (c.coin_id === coinId ? { ...c, balance: newBalance } : c))
//         );
//       }
//     } catch (err: any) {
//       console.error("Error updating user balance:", err);
//       toast.error("Failed to update user balance.");
//     } finally {
//       setUpdatingCoins(null);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="tw-py-12 tw-text-center tw-space-y-4">
//         <div className="tw-w-10 tw-h-10 tw-border-4 tw-border-green-500 tw-border-t-transparent tw-rounded-full tw-animate-spin tw-mx-auto"></div>
//         <p className="tw-text-gray-400 tw-text-sm">Loading accounts...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="tw-space-y-6">
//       {/* Page Header */}
//       <div>
//         <h1 className="tw-text-lg tw-font-bold tw-tracking-tight tw-text-white">Update Coin Balances</h1>
//         <p className="tw-text-gray-400 tw-text-xs tw-mt-1">
//           Adjust Old balance, top-up crypto coins for any user account.
//         </p>
//       </div>

//       {/* Users Table */}
//       <div className="tw-bg-[#161b22] tw-border tw-border-solid tw-border-gray-800 tw-rounded-2xl tw-overflow-hidden">
//         <div className="tw-overflow-x-auto">
//           <table className="tw-w-full tw-text-left tw-border-collapse">
//             <thead>
//               <tr className="tw-border-b tw-border-solid tw-border-gray-800 tw-bg-black/10">
//                 <th className="tw-px-6 tw-py-4 tw-text-xs tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider">Username</th>
//                 <th className="tw-px-6 tw-py-4 tw-text-xs tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider">Email Address</th>
//                 <th className="tw-px-6 tw-py-4 tw-text-xs tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider">Role</th>
//                 <th className="tw-px-6 tw-py-4 tw-text-xs tw-font-bold tw-text-gray-400 tw-uppercase tw-tracking-wider tw-text-right">Action</th>
//               </tr>
//             </thead>
//             <tbody className="tw-divide-y tw-divide-solid tw-divide-gray-800/50 tw-overflow-auto">
//               {users.length > 0 ? (
//                 users.map((user) => (
//                   <tr key={user.id} className="hover:tw-bg-white/[0.01] tw-transition">
//                     <td className="tw-px-6 tw-py-4 tw-font-semibold tw-text-white tw-text-sm">{user.username || user.name}</td>
//                     <td className="tw-px-6 tw-py-4 tw-text-sm tw-text-gray-300">{user.email}</td>
//                     <td className="tw-px-6 tw-py-4">
//                       <span className="tw-px-2 tw-py-0.5 tw-bg-gray-800 tw-text-gray-400 tw-rounded tw-text-[10px] tw-font-bold tw-uppercase">
//                         {user.role}
//                       </span>
//                     </td>
//                     <td className="tw-px-6 tw-py-4 tw-text-right">
//                       <button
//                         onClick={() => openBalanceModal(user)}
//                         className="tw-inline-flex text-nowrap tw-items-center tw-bg-green-600 hover:tw-bg-green-500 hover:tw-text-white tw-text-white tw-text-xs tw-font-bold tw-px-4 tw-py-2 tw-rounded-xl tw-transition tw-shadow-md"
//                       >
//                         ⚙️ Manage
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={4} className="tw-px-6 tw-py-12 tw-text-center tw-text-gray-500 tw-text-sm">
//                     No users registered.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Edit Balance Modal Backdrop */}
//       {selectedUser && (
//         <div className="tw-fixed tw-inset-0 tw-z-50 tw-bg-black/60 tw-backdrop-blur-sm tw-flex tw-justify-center tw-items-center tw-p-4">
//           {/* Modal Container */}
//           <div className="tw-w-full tw-max-w-xl tw-bg-[#161b22] tw-border tw-border-solid tw-border-gray-800 tw-rounded-2xl tw-overflow-hidden tw-shadow-2xl tw-animate-zoom-in">
//             {/* Modal Header */}
//             <div className="tw-px-6 tw-py-4 tw-border-b tw-border-solid tw-border-gray-800 tw-flex tw-justify-between tw-items-center">
//               <div>
//                 <h3 className="tw-text-base tw-font-bold tw-text-white">Balances for: {selectedUser.name}</h3>
//                 <p className="tw-text-xs tw-text-gray-400 tw-mt-0.5">{selectedUser.email}</p>
//               </div>
//               <button
//                 onClick={() => setSelectedUser(null)}
//                 className="tw-w-8 tw-h-8 tw-rounded-xl tw-bg-gray-800/40 hover:tw-bg-gray-800 tw-text-gray-400 hover:tw-text-white tw-flex tw-items-center tw-justify-center tw-transition"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* Modal Body */}
//             <div className="tw-p-6 tw-max-h-[60vh] tw-overflow-y-auto tw-space-y-4">
//               {loadingCoins ? (
//                 <div className="tw-py-12 tw-text-center tw-space-y-3">
//                   <div className="tw-w-8 tw-h-8 tw-border-4 tw-border-green-500 tw-border-t-transparent tw-rounded-full tw-animate-spin tw-mx-auto"></div>
//                   <p className="tw-text-xs tw-text-gray-400">Loading wallet balances...</p>
//                 </div>
//               ) : coinBalances.length > 0 ? (
//                 <div className="tw-divide-y tw-divide-solid tw-divide-gray-800/50">
//                   {coinBalances.map((coin) => {
//                     // Local input state for each coin
//                     return (
//                       <CoinBalanceRow
//                         key={coin.coin_id}
//                         coin={coin}
//                         isUpdating={updatingCoins === coin.coin_id}
//                         onUpdate={(newVal) => handleUpdateBalance(coin.coin_id, newVal)}
//                       />
//                     );
//                   })}
//                 </div>
//               ) : (
//                 <p className="tw-text-center tw-text-gray-500 tw-text-xs tw-py-6">No support assets available.</p>
//               )}
//             </div>

//             {/* Modal Footer */}
//             <div className="tw-px-6 tw-py-4 tw-border-t tw-border-solid tw-border-gray-800 tw-bg-black/10 tw-flex tw-justify-end">
//               <button
//                 onClick={() => setSelectedUser(null)}
//                 className="tw-bg-[#0d1117] hover:tw-bg-[#080b0f] tw-border tw-border-solid tw-border-gray-800 tw-rounded-xl tw-px-5 tw-py-2 tw-text-xs tw-font-bold tw-text-gray-300 tw-transition"
//               >
//                 Close Manager
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // Separate inline row component to easily handle individual inputs
// function CoinBalanceRow({
//   coin,
//   isUpdating,
//   onUpdate
// }: {
//   coin: CoinBalance;
//   isUpdating: boolean;
//   onUpdate: (newVal: number) => void;
// }) {
//   const [inputValue, setInputValue] = useState(coin.balance.toString());

//   useEffect(() => {
//     setInputValue(coin.balance.toString());
//   }, [coin.balance]);

//   return (
//     <div className="tw-py-3.5 tw-flex tw-items-center tw-justify-between tw-gap-4">
//       {/* Coin Icon & Name */}
//       <div className="tw-flex tw-items-center tw-gap-3">
//         <div className="tw-w-8 tw-h-8 tw-bg-[#0d1117] tw-border tw-border-solid tw-border-gray-800 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
//           {coin.icon ? (
//             <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000"}${coin.icon}`} alt={coin.name} className="tw-w-6 tw-h-6 tw-object-contain" onError={(e) => {
//               // fallback to generic symbol letters if icon fails
//               (e.target as HTMLElement).style.display = 'none';
//             }} />
//           ) : (
//             <span className="tw-text-[10px] tw-font-bold tw-text-gray-400">{coin.name}</span>
//           )}
//         </div>
//         <div>
//           <div className="tw-text-xs tw-font-bold tw-text-white">{coin.name}</div>
//           <div className="tw-text-[10px] tw-text-gray-500 tw-capitalize">{coin.type}</div>
//         </div>
//       </div>

//       {/* Input & Update */}
//       <div className="tw-flex tw-justify-between tw-items-center tw-gap-2">
//         <div className="tw-flex tw-gap-1 tw-text-right">
//           <div className="tw-text-[10px] tw-text-gray-500 tw-text-nowrap">Current Balance</div>
//           <div className="tw-text-xs tw-font-semibold tw-text-gray-300">{coin.balance}</div>
//         </div>

//         <input
//           type="number"
//           step="any"
//           min="0"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           className="tw-w-16 tw-bg-[#0d1117] tw-border tw-border-solid tw-border-gray-800 focus:tw-border-green-500 tw-rounded-xl tw-px-3 tw-py-1.5 tw-text-xs tw-text-white focus:tw-outline-none tw-transition"
//           placeholder="New balance"
//         />

//         <button
//           onClick={() => {
//             const parsed = parseFloat(inputValue);
//             if (isNaN(parsed) || parsed < 0) {
//               toast.error("Balance value must be zero or greater.");
//               return;
//             }
//             onUpdate(parsed);
//           }}
//           disabled={isUpdating}
//           className="tw-bg-green-600 hover:tw-bg-green-500 disabled:tw-bg-green-800 tw-text-white tw-text-[11px] tw-font-bold tw-px-3.5 tw-py-2 tw-rounded-xl tw-transition tw-shadow-sm"
//         >
//           {isUpdating ? "..." : "Save"}
//         </button>
//       </div>
//     </div>
//   );
// }

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
  price?: number; // Current USD price per coin
  rate?: number;  // Fallback field support for live price
}

export default function AdminAddBalancePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [coinBalances, setCoinBalances] = useState<CoinBalance[]>([]);
  const [loadingCoins, setLoadingCoins] = useState(false);
  const [updatingCoins, setUpdatingCoins] = useState<number | null>(null);

  useEffect(() => {
    if (!selectedUser) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedUser(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedUser]);

  useEffect(() => {
  const fetchUsers = async () => {
      try {
        const res = await apiClient.get("/api/admin/users");
        if (res.data.status_code || res.data.success) {
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
      if (res.data.status_code || res.data.success) {
        const uniqueCoins: CoinBalance[] = Array.from(
          new Map<number, CoinBalance>(
            (res.data.coins || []).map((coin: CoinBalance) => [coin.coin_id, coin])
          ).values()
        );
        setCoinBalances(uniqueCoins);
      }
    } catch (err: any) {
      console.error("Error loading user coins:", err);
      toast.error("Failed to load user coin balances.");
      setSelectedUser(null);
    } finally {
      setLoadingCoins(false);
    }
  };

  const handleUpdateBalance = async (coinId: number, usdAmount: number) => {
    if (!selectedUser) return;
    setUpdatingCoins(coinId);
    try {
      const res = await apiClient.post(`/api/admin/users/${selectedUser.id}/balance`, {
        coin_id: coinId,
        usdAmount,
      });

    if (res.data.status_code || res.data.success) {
      toast.success("Coin balance successfully updated!");
      const updatedQuantity = Number(res.data.data?.quantity);
      if (Number.isFinite(updatedQuantity)) {
        setCoinBalances((prev) =>
          prev.map((c) => (c.coin_id === coinId ? { ...c, balance: updatedQuantity } : c))
        );
      }
    } else {
      toast.error(res.data.message || "Failed to update balance.");
    }
  } catch (err: any) {
    console.error("Error updating user balance:", err);
    
    const serverErrorMessage = 
      err.response?.data?.message || 
      err.response?.data?.error || 
      "Failed to update user balance.";
      
    toast.error(serverErrorMessage);
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
          Adjust account balances by entering the target USD ($) value.
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

      {selectedUser && (
        <div
          className="tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-black/75 tw-p-3 tw-backdrop-blur-sm sm:tw-p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedUser(null);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="balance-modal-title"
            className="tw-flex tw-max-h-[min(760px,calc(100vh-24px))] tw-w-full tw-max-w-3xl tw-flex-col tw-overflow-hidden tw-rounded-2xl tw-border tw-border-solid tw-border-gray-700 tw-bg-[#11161d] tw-shadow-2xl sm:tw-max-h-[calc(100vh-48px)]"
          >
            <header className="tw-flex tw-items-start tw-justify-between tw-gap-4 tw-border-b tw-border-solid tw-border-gray-800 tw-bg-[#171d26] tw-px-4 tw-py-4 sm:tw-px-6">
              <div className="tw-min-w-0">
                <div className="tw-mb-2 tw-flex tw-items-center tw-gap-2">
                  <span className="tw-rounded-full tw-bg-green-500/10 tw-px-2 tw-py-1 tw-text-[10px] tw-font-bold tw-uppercase tw-tracking-wider tw-text-green-400">Wallet manager</span>
                  <span className="tw-text-[10px] tw-text-gray-500">{coinBalances.length} assets</span>
                </div>
                <h2 id="balance-modal-title" className="tw-truncate tw-text-lg tw-font-bold tw-text-white sm:tw-text-xl">{selectedUser.name}</h2>
                <p className="tw-mt-1 tw-truncate tw-text-xs tw-text-gray-400">{selectedUser.email}</p>
              </div>
              <button
                type="button"
                aria-label="Close wallet manager"
                onClick={() => setSelectedUser(null)}
                className="tw-flex tw-h-9 tw-w-9 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-lg tw-border tw-border-solid tw-border-gray-700 tw-bg-[#0d1117] tw-text-lg tw-leading-none tw-text-gray-400 tw-transition hover:tw-border-gray-500 hover:tw-text-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-green-500"
              >
                <span aria-hidden="true">×</span>
              </button>
            </header>

            <div className="tw-border-b tw-border-solid tw-border-gray-800 tw-bg-[#0d1117]/60 tw-px-4 tw-py-3 sm:tw-px-6">
              <p className="tw-text-xs tw-leading-5 tw-text-gray-400"><span className="tw-font-semibold tw-text-gray-200">Set a USD target</span> for any asset below. The backend converts it using the current market price.</p>
            </div>

            <div className="tw-min-h-0 tw-overflow-y-auto tw-p-3 sm:tw-p-5">
              {loadingCoins ? (
                <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-3 tw-py-16">
                  <div className="tw-h-8 tw-w-8 tw-animate-spin tw-rounded-full tw-border-2 tw-border-gray-700 tw-border-t-green-400" />
                  <p className="tw-text-xs tw-text-gray-400">Loading wallet balances...</p>
                </div>
              ) : coinBalances.length > 0 ? (
                <div className="tw-space-y-2">
                  {coinBalances.map((coin) => (
                    <CoinBalanceRow
                      key={coin.coin_id}
                      coin={coin}
                      isUpdating={updatingCoins === coin.coin_id}
                      onUpdate={(usdAmount) => handleUpdateBalance(coin.coin_id, usdAmount)}
                    />
                  ))}
                </div>
              ) : (
                <div className="tw-rounded-xl tw-border tw-border-dashed tw-border-gray-700 tw-px-6 tw-py-12 tw-text-center">
                  <p className="tw-text-sm tw-font-semibold tw-text-gray-300">No supported assets available</p>
                  <p className="tw-mt-1 tw-text-xs tw-text-gray-500">Add a supported coin to this wallet to manage its balance.</p>
                </div>
              )}
            </div>

            <footer className="tw-flex tw-items-center tw-justify-between tw-gap-3 tw-border-t tw-border-solid tw-border-gray-800 tw-bg-[#171d26] tw-px-4 tw-py-3 sm:tw-px-6">
              <p className="tw-hidden tw-text-[11px] tw-text-gray-500 sm:tw-block">Changes are saved per asset.</p>
              <button
                type="button"
                onClick={() => setSelectedUser(null)}
                className="tw-ml-auto tw-rounded-lg tw-border tw-border-solid tw-border-gray-700 tw-bg-[#0d1117] tw-px-4 tw-py-2 tw-text-xs tw-font-bold tw-text-gray-300 tw-transition hover:tw-border-gray-500 hover:tw-text-white focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-green-500"
              >
                Done
              </button>
            </footer>
          </section>
        </div>
      )}
    </div>
  );
}

function CoinBalanceRow({
  coin,
  isUpdating,
  onUpdate,
}: {
  coin: CoinBalance;
  isUpdating: boolean;
  onUpdate: (usdAmount: number) => void;
}) {
  const [dollarValue, setDollarValue] = useState("");

  // Resolves rate/price safely from API response options
  const rawPrice = coin.price ?? coin.rate;
  const numericPrice = Number(rawPrice);
  const coinPrice = Number.isFinite(numericPrice) && numericPrice > 0 ? numericPrice : null;

  const parsedUsd = parseFloat(dollarValue);
  const previewCoinUnits =
    !isNaN(parsedUsd) && parsedUsd >= 0 && coinPrice
      ? (parsedUsd / coinPrice).toFixed(6)
      : null;

  const handleSave = () => {
    if (isNaN(parsedUsd) || parsedUsd < 0) {
      toast.error("Please enter a valid USD amount (0 or greater).");
      return;
    }

    // The backend owns price lookup and USD-to-coin conversion.
    onUpdate(parsedUsd);
    setDollarValue("");
  };

  return (
    <article className="tw-rounded-xl tw-border tw-border-solid tw-border-gray-800 tw-bg-[#171d26] tw-p-3 tw-transition hover:tw-border-gray-700 sm:tw-p-4">
      <div className="tw-flex tw-flex-col tw-gap-4 lg:tw-flex-row lg:tw-items-center lg:tw-justify-between">
        <div className="tw-flex tw-min-w-0 tw-items-center tw-gap-3">
          <div className="tw-flex tw-h-10 tw-w-10 tw-shrink-0 tw-items-center tw-justify-center tw-overflow-hidden tw-rounded-xl tw-border tw-border-solid tw-border-gray-700 tw-bg-[#0d1117]">
            {coin.icon ? (
              <img
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000"}${coin.icon}`}
                alt={coin.name}
                className="tw-h-7 tw-w-7 tw-object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            ) : (
              <span className="tw-text-[10px] tw-font-bold tw-text-gray-400">{coin.name}</span>
            )}
          </div>
          <div className="tw-min-w-0">
            <div className="tw-flex tw-items-center tw-gap-2">
              <span className="tw-truncate tw-text-sm tw-font-bold tw-text-white">{coin.name}</span>
              <span className="tw-rounded tw-bg-gray-800 tw-px-1.5 tw-py-0.5 tw-text-[9px] tw-font-bold tw-uppercase tw-text-gray-400">{coin.unique_id}</span>
            </div>
            <div className="tw-mt-1 tw-text-[11px] tw-text-gray-500 tw-capitalize">
              {coin.type || "Digital asset"} <span className={coinPrice ? "tw-text-gray-600" : "tw-text-amber-400"}>{coinPrice ? `• $${coinPrice.toLocaleString()} / unit` : "• Backend price lookup"}</span>
            </div>
          </div>
        </div>

        <div className="tw-flex tw-flex-col tw-gap-3 sm:tw-flex-row sm:tw-items-end lg:tw-justify-end">
          <div className="tw-rounded-lg tw-bg-[#0d1117] tw-px-3 tw-py-2 sm:tw-min-w-32">
            <div className="tw-text-[10px] tw-font-semibold tw-uppercase tw-tracking-wide tw-text-gray-500">Current balance</div>
            <div className="tw-mt-1 tw-text-xs tw-font-semibold tw-text-gray-200">{coin.balance} {coin.unique_id?.toUpperCase()}</div>
            {previewCoinUnits && <div className="tw-mt-0.5 tw-text-[10px] tw-font-mono tw-text-green-400">Preview ≈ {previewCoinUnits}</div>}
          </div>
          <label className="tw-flex tw-flex-1 tw-flex-col tw-gap-1 sm:tw-w-32">
            <span className="tw-text-[10px] tw-font-semibold tw-uppercase tw-tracking-wide tw-text-gray-500">New USD target</span>
            <div className="tw-relative">
              <span className="tw-pointer-events-none tw-absolute tw-left-3 tw-top-1/2 -tw-translate-y-1/2 tw-text-xs tw-text-gray-500">$</span>
              <input
                aria-label={`New USD target for ${coin.name}`}
                type="number"
                step="any"
                min="0"
                value={dollarValue}
                onChange={(e) => setDollarValue(e.target.value)}
                className="tw-w-full tw-rounded-lg tw-border tw-border-solid tw-border-gray-700 tw-bg-[#0d1117] tw-py-2 tw-pl-7 tw-pr-2 tw-text-xs tw-text-white tw-transition placeholder:tw-text-gray-600 focus:tw-border-green-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-green-500/20"
                placeholder="0.00"
              />
            </div>
          </label>
          <button
            type="button"
            onClick={handleSave}
            disabled={isUpdating}
            className="tw-h-9 tw-rounded-lg tw-bg-green-600 tw-px-4 tw-text-xs tw-font-bold tw-text-white tw-transition hover:tw-bg-green-500 disabled:tw-cursor-not-allowed disabled:tw-bg-gray-800 disabled:tw-text-gray-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-green-500"
          >
            {isUpdating ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </article>
  );
}
