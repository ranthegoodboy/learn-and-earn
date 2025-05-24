"use client";

import { RegisterForm } from "./register-form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { DEFAULT_LOGIN_ROUTE } from "@/config/routes";
import useCurrentUser from "@/hooks/auth/user-current-user";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const RegisterComponent = () => {
  const router = useRouter();
  const user = useCurrentUser();
  const searchParams = useSearchParams();
  const isCheckoutPage = searchParams.get("showSignUp") !== null;
  const courseId = searchParams.get("courseId");

  const loginUrl = isCheckoutPage
    ? `/checkout?step=1&courseId=${courseId}&showSignUp=false`
    : "/login";

  const redirectUrl = isCheckoutPage
    ? `/checkout?step=1&courseId=${courseId}&showSignUp=false`
    : DEFAULT_LOGIN_ROUTE;

  useEffect(() => {
    if (user) {
      router.push(redirectUrl);
    }
  }, [user, redirectUrl, router]);

  return (
    <Card className="w-full py-10 px-6">
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <RegisterForm redirectUrl={redirectUrl} />
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href={loginUrl} className="text-secondary hover:underline">
            Sign in
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RegisterComponent;
