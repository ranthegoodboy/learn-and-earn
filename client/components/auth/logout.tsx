"use client";

import api from "@/services/api";
import { useAuthStore } from "@/stores/auth-store";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { toast } from "sonner";

interface LogoutProps {
  children: ReactNode;
  redirectUrl: string;
}

export function Logout({ children, redirectUrl }: LogoutProps) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const clearUser = useAuthStore((state) => state.clearUser);

  const handleLogout = async () => {
    const res = await api.get("/auth/logout");

    if (res.data.success) {
      clearUser();
      queryClient.invalidateQueries({ queryKey: ["auth-status"] });
      router.push(redirectUrl);
      toast.success("Logged out successfully.");
    } else {
      toast.error("Failed to logout.");
    }
  };

  return (
    <span onClick={handleLogout} style={{ cursor: "pointer" }}>
      {children}
    </span>
  );
}
