"use client";

import { useAuthStore } from "@/stores/auth-store";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface LogoutProps {
  children: ReactNode;
}

export function Logout({ children }: LogoutProps) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const clearUser = useAuthStore((state) => state.clearUser);

  const handleLogout = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
      method: "GET",
      credentials: "include",
    });
    clearUser();

    queryClient.invalidateQueries({
      queryKey: ["auth-status"],
    });
    router.push("/");
  };

  return (
    <span onClick={handleLogout} style={{ cursor: "pointer" }}>
      {children}
    </span>
  );
}
