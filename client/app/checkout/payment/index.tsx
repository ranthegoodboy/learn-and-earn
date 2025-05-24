"use client";
import { Logout } from "@/components/auth/logout";
import CourseOverviewCard from "@/components/checkout/course-overview-card";
import PriceDetails from "@/components/checkout/price-details";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useCurrentUser from "@/hooks/auth/user-current-user";
import { useCurrentCourse } from "@/hooks/course/use-current-course";
import { useCheckoutNavigation } from "@/hooks/use-checkout-navigation";
import StripeProvider from "@/providers/stripe-provider";
import api from "@/services/api";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React from "react";

const PaymentPageContent = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { navigateToStep } = useCheckoutNavigation();
  const { course, courseId } = useCurrentCourse();
  const user = useCurrentUser();

  if (!course || !user) {
    return null;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_STRIPE_REDIRECT_URL}}?courseId=${courseId}`,
      },
      redirect: "if_required",
    });

    if (result.paymentIntent?.status === "succeeded") {
      const payload = {
        courseId: courseId,
        transactionId: result.paymentIntent.id,
        userId: user.id,
        paymentProvider: "stripe",
        amount: course.price,
      };

      const response = await api.post("/transaction", payload);

      if (response.data.success) {
        navigateToStep(3);
      }
    }
  };

  return (
    <div className=" pb-10">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <CourseOverviewCard
            courseOverview={course}
            isShowEnrollButton={false}
          />
          <div className="grid grid-cols-1 gap-10">
            <PriceDetails course={course} />
            <div>
              <Card className="w-full max-h-max overflow-hidden border-gray-300 rounded-lg shadow-sm py-0 gap-0 p-6">
                <CardHeader className="p-4">
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Checkout
                  </CardTitle>
                  <CardDescription>
                    Fill out the payment details below to complete your
                    purchase.
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 px-4 pb-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-sm text-gray-700 mb-1">
                      Payment Method
                    </h3>
                  </div>

                  <div className="">
                    <PaymentElement />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-between items-center">
          <Logout
            redirectUrl={`/checkout?step=1&courseId=${courseId}&showSignUp=false`}
          >
            <Button variant="outline" className="cursor-pointer">
              Switch Account
            </Button>
          </Logout>
          <Button
            type="submit"
            variant="secondary"
            className="cursor-pointer"
            disabled={!stripe || !elements}
          >
            Pay with Credit Card
          </Button>
        </div>
      </form>
    </div>
  );
};

const PaymentPage = () => {
  return (
    <StripeProvider>
      <PaymentPageContent />
    </StripeProvider>
  );
};

export default PaymentPage;
