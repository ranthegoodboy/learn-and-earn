import { cn } from "@/lib/utils";
import { Check, CreditCard, PackageCheck, User } from "lucide-react";
import React from "react";

interface WizardStepperProps {
  currentStep: number;
  className?: string;
}

const WizardStepper = ({ currentStep, className }: WizardStepperProps) => {
  const steps = [
    {
      id: 1,
      label: "Details",
      icon: User,
    },
    {
      id: 2,
      label: "Payment",
      icon: CreditCard,
    },
    {
      id: 3,
      label: "Completion",
      icon: PackageCheck,
    },
  ];

  return (
    <div className={cn("w-full py-4 my-10", className)}>
      <div className="flex justify-between">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id;
          const isCompleted =
            getStepStatus(currentStep, step.id) === "completed";
          const isUpcoming = getStepStatus(currentStep, step.id) === "upcoming";

          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "relative flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-200",
                    {
                      "border-primary bg-primary text-primary-foreground":
                        isActive,
                      "border-primary bg-primary/10 text-primary": isCompleted,
                      "border-muted-foreground/30 bg-background text-muted-foreground":
                        isUpcoming,
                    }
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
                </div>

                <span
                  className={cn("mt-2 text-sm font-medium", {
                    "text-primary": isActive,
                    "text-muted-foreground": !isActive,
                  })}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 flex items-center justify-center">
                  <div
                    className={cn("h-0.5 w-full", {
                      "bg-primary": isCompleted,
                      "bg-muted-foreground/30": !isCompleted,
                    })}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

function getStepStatus(
  currentStep: number,
  stepId: number
): "completed" | "active" | "upcoming" {
  if (stepId < currentStep) return "completed";
  if (stepId === currentStep) return "active";
  return "upcoming";
}

export default WizardStepper;
