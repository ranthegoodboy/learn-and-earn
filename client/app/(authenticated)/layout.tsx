import RouteGuardServer from "@/components/auth/route-guard-server";
import { ErrorBoundary } from "@/components/error-boundary";

import React from "react";

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RouteGuardServer>
      <ErrorBoundary>{children}</ErrorBoundary>
    </RouteGuardServer>
  );
};

export default AuthenticatedLayout;
