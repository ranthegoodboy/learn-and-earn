"use client";
import { LoginForm } from "@/components/auth/login-form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DEFAULT_LOGIN_REDIRECT } from "@/config/routes";
import useCurrentUser from "@/hooks/auth/user-current-user";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const LoginComponent = () => {
  const router = useRouter();
  const user = useCurrentUser();
  const searchParams = useSearchParams();
  const isCheckoutPage = searchParams.get("showSignUp") !== null;
  const courseId = searchParams.get("courseId");

  const signUpUrl = isCheckoutPage
    ? `/checkout?step=1&courseId=${courseId}&showSignUp=true`
    : "/register";

  const redirectUrl = isCheckoutPage
    ? `/checkout?step=2&courseId=${courseId}&showSignUp=true`
    : DEFAULT_LOGIN_REDIRECT;

  useEffect(() => {
    if (user) {
      router.push(redirectUrl);
    }
  }, [user, redirectUrl, router]);

  return (
    <Card className="w-full py-10 px-6">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <LoginForm redirectUrl={redirectUrl} />
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="text-center text-sm">
          {`Don't have an account? `}
          <Link href={signUpUrl} className="text-secondary hover:underline">
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginComponent;
