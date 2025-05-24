import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import useCurrentUser from "./auth/user-current-user";

export const useCheckoutNavigation = () => {
  const user = useCurrentUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const checkoutStep = parseInt(searchParams.get("step") ?? "1", 10);
  const courseId = searchParams.get("courseId");

  const navigateToStep = useCallback(
    (step: number) => {
      const newStep = Math.min(Math.max(1, step), 3);
      const showSignUp = user ? "false" : "true";

      router.push(
        `/checkout?courseId=${courseId}&step=${newStep}&showSignUp=${showSignUp}`
      );
    },
    [courseId, user, router]
  );

  useEffect(() => {
    if (!user && checkoutStep > 1) {
      navigateToStep(1);
    }
  }, [user, checkoutStep, navigateToStep]);

  return {
    checkoutStep,
    navigateToStep,
  };
};
