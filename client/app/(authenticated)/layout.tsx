import RouteGuardServer from "@/components/auth/route-guard-server";
import { ErrorBoundary } from "@/components/error-boundary";
import Footer from "@/components/homepage/footer";
import NavBar from "@/components/homepage/navbar";
import React from "react";

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RouteGuardServer>
      <ErrorBoundary>
        <div>
          <NavBar />
          {children}
          <Footer />
        </div>
      </ErrorBoundary>
    </RouteGuardServer>
  );
};

export default AuthenticatedLayout;
