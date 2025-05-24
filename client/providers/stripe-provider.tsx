import { useCurrentCourse } from "@/hooks/course/use-current-course";
import api from "@/services/api";
import { Elements } from "@stripe/react-stripe-js";
import {
  Appearance,
  loadStripe,
  StripeElementsOptions,
} from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
  throw new Error("Missing Stripe public key");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const appearance: Appearance = {
  theme: "stripe",
  variables: {
    colorPrimary: "#525252",
    colorBackground: "#ffffff",
  },
};

const StripeProvider = ({ children }: { children: React.ReactNode }) => {
  const [clientSecret, setClientSecret] = useState<string | "">("");
  const { course } = useCurrentCourse();

  useEffect(() => {
    if (!course) return;

    const createPaymentIntent = async () => {
      const res = await api.post("/stripe-transaction", {
        amount: course.price ?? 9999999999999,
      });
      setClientSecret(res.data.data);
    };

    createPaymentIntent();
  }, [course]);

  const options: StripeElementsOptions = {
    appearance,
    clientSecret,
  };

  if (!clientSecret) return <div>Loading...</div>;

  return (
    <Elements options={options} stripe={stripePromise}>
      {children}
    </Elements>
  );
};

export default StripeProvider;
