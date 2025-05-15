"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundaryClass extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error);
    console.error("Error info:", errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

interface ErrorFallbackProps {
  error: Error | null;
}

const ErrorFallback = ({ error }: ErrorFallbackProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-6 text-center">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-destructive mb-2">
          Something went wrong
        </h2>
        <p className="text-muted-foreground mb-4">
          {error?.message || "An unexpected error occurred"}
        </p>
        {process.env.NODE_ENV !== "production" && error && (
          <pre className="bg-muted p-4 rounded-md text-sm overflow-auto max-w-full max-h-[200px] mb-4">
            {error.stack}
          </pre>
        )}
      </div>
      <div className="flex gap-4">
        <Button onClick={() => router.refresh()} variant="outline">
          Try again
        </Button>
        <Button onClick={() => router.push("/")} variant="default">
          Go to homepage
        </Button>
      </div>
    </div>
  );
};

export function ErrorBoundary({ children, fallback }: ErrorBoundaryProps) {
  return (
    <ErrorBoundaryClass fallback={fallback}>{children}</ErrorBoundaryClass>
  );
}
