"use client"; // Make sure this is a client-side component

import { useRouter } from "next/navigation";

// Typing the props for the component
interface RedirectComponentProps {
  redirectRoute?: string; // `redirectRoute` is optional, defaulting to "/"
}

const RedirectComponent: React.FC<RedirectComponentProps> = ({
  redirectRoute = "/",
}) => {
  const router = useRouter();

  // Using setTimeout to redirect after 2 seconds
  setTimeout(() => {
    router.push(redirectRoute);
  }, 2000);

  return <></>;
};

export default RedirectComponent;
