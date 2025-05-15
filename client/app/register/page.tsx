"use client";

import { RegisterForm } from "@/components/auth/register-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DEFAULT_LOGIN_ROUTE } from "@/config/routes";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/40 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="mt-6 text-3xl font-bold text-primary">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Join thousands of learners from around the world
          </p>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Sign up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RegisterForm />
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
            </div>

            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link
                href={DEFAULT_LOGIN_ROUTE}
                className="text-secondary hover:underline"
              >
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
