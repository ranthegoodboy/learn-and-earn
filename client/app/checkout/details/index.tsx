"use client";

import LoginComponent from "@/components/auth/login-component";
import RegisterComponent from "@/components/auth/register-component";
import CourseOverviewCard from "@/components/checkout/course-overview-card";
import PriceDetails from "@/components/checkout/price-details";
import { useCurrentCourse } from "@/hooks/course/use-current-course";
import { useSearchParams } from "next/navigation";

import React from "react";

const CheckoutDetailsPage = () => {
  const { course, isLoading, error, isSuccess } = useCurrentCourse();
  const searchParams = useSearchParams();
  const showSignUp = searchParams.get("showSignUp") === "true";

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isSuccess || !course) {
    return <div>{error || "Error loading course"}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <CourseOverviewCard courseOverview={course} isShowEnrollButton={false} />
      <div className="grid grid-cols-1 gap-10">
        <PriceDetails course={course} />
        <div>{showSignUp ? <RegisterComponent /> : <LoginComponent />}</div>
      </div>
    </div>
  );
};

export default CheckoutDetailsPage;
