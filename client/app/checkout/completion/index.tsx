"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DEFAULT_LOGIN_REDIRECT } from "@/config/routes";

const CompletionPage = () => {
  const router = useRouter();

  return (
    <div className="container max-w-3xl py-12">
      <Card className="w-full">
        <CardHeader className="items-center text-center">
          <div className="flex justify-center">
            <CheckCircle className="text-primary h-16 w-16 mb-2" />
          </div>
          <CardTitle className="text-2xl">Purchase Successful!</CardTitle>
          <CardDescription>
            You have successfully purchased and enrolled in this course.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <div className="rounded-lg p-4">
            <p className="text-sm font-medium">Need help?</p>
            <p className="text-sm mt-1">
              If you have any questions or need assistance, please{" "}
              <Link
                href="/support"
                className="text-primary hover:underline font-medium"
              >
                contact our customer support
              </Link>
              .
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center pb-6 pt-2">
          <Button
            className="cursor-pointer"
            size="lg"
            onClick={() =>
              router.push(`${DEFAULT_LOGIN_REDIRECT}/enrolled-courses`)
            }
          >
            Go to Dashboard
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CompletionPage;
