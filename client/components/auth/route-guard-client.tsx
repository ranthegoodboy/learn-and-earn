"use client";

import { DEFAULT_LOGIN_ROUTE } from "@/config/routes";
import { useAuthStatus } from "@/hooks/auth/use-auth-status";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface RouteGuardProps {
  children: React.ReactNode;
}

export function RouteGuard({ children }: RouteGuardProps) {
  const router = useRouter();
  const { isLoading, isError } = useAuthStatus();

  useEffect(() => {
    if (!isLoading && isError) {
      router.push(DEFAULT_LOGIN_ROUTE);
    }
  }, [isLoading, isError, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return null;
  }

  return <>{children}</>;
}
