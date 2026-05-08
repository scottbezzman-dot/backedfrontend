"use client"; // Ensure this runs in the client-side

import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // Navigate to the previous page
  };

  return <i onClick={handleGoBack} className="icon-left-btn" />;
};

export default GoBackButton;
