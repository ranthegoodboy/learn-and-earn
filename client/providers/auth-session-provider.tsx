"use client";

import { useAuthStatus } from "@/hooks/auth/use-auth-status";

const AuthSessionProvider = () => {
  useAuthStatus();
  return null;
};

export default AuthSessionProvider;
