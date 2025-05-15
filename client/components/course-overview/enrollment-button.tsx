import { DEFAULT_LOGIN_ROUTE } from "@/config/routes";
import { CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";

interface EnrollmentButtonProps {
  courseId: string;
  price: number;
}

const EnrollmentButton = ({ courseId, price }: EnrollmentButtonProps) => {
  const router = useRouter();

  // Mock authentication state - in a real app, this would come from your auth context
  const isAuthenticated = false;

  const handleEnrollment = () => {
    if (!isAuthenticated) {
      toast("Please login to continue", {
        description: "You need to be logged in to enroll in courses",
        action: {
          label: "Login",
          onClick: () => router.push(DEFAULT_LOGIN_ROUTE),
        },
      });
      return;
    }

    if (price === 0) {
      // For free courses, directly enroll
      toast.success("Successfully enrolled!", {
        description: "You can now access the course content",
      });
      router.push(`/course/${courseId}/learn`);
    } else {
      // For paid courses, redirect to payment page
      router.push(`/checkout/${courseId}`);
    }
  };

  return (
    <Button
      className="w-full"
      size="lg"
      onClick={handleEnrollment}
      variant={price === 0 ? "secondary" : "default"}
    >
      {price === 0 ? (
        "Enroll for Free"
      ) : (
        <>
          <CreditCard className="mr-2 h-4 w-4" />
          Enroll Now
        </>
      )}
    </Button>
  );
};

export default EnrollmentButton;
