"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function Auth() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = searchParams.get("token");
    const error = searchParams.get("error");

    if (error) {
      setError(error);
      setIsLoading(false);
      return;
    }

    if (token) {
      try {
        // Save token in localStorage
        localStorage.setItem("token", token);
        
        // Redirect to dashboard after successful authentication
        setTimeout(() => {
          router.push("/home");
        }, 1000);
      } catch (err) {
        setError("Failed to save authentication data");
        setIsLoading(false);
      }
    } else {
      setError("No authentication token received");
      setIsLoading(false);
    }
  }, [searchParams, router]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Authentication Error</h1>
          <p className="text-gray-300 mb-6">{error}</p>
          <button
            onClick={() => router.push("/log-in")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Authentication Successful!</h1>
        <p className="text-gray-300 mb-6">Logging you in...</p>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    </div>
  );
}

export default function AuthSuccess() {
  return(
    <Suspense>
       <Auth />
    </Suspense>
  )
}