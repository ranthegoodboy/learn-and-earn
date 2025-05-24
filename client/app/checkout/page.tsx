"use client";

import WizardStepper from "@/components/checkout/wizard-stepper";
import { useCheckoutNavigation } from "@/hooks/use-checkout-navigation";
import React from "react";
import CompletionPage from "./completion";
import CheckoutDetailsPage from "./details";
import PaymentPage from "./payment";

const CheckoutWizard = () => {
  const { checkoutStep } = useCheckoutNavigation();

  const renderSteps = () => {
    switch (checkoutStep) {
      case 1:
        return <CheckoutDetailsPage />;
      case 2:
        return <PaymentPage />;
      case 3:
        return <CompletionPage />;
      default:
        return <CheckoutDetailsPage />;
    }
  };

  return (
    <div>
      <WizardStepper currentStep={checkoutStep} />
      {renderSteps()}
    </div>
  );
};

export default CheckoutWizard;
