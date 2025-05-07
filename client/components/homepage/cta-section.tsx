import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start your learning journey today
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students already learning on LearnHub. Access our
            library of courses and transform your skills.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/courses">
              <Button variant="secondary" size="lg">
                Browse Courses
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="outline" size="lg">
                Sign Up For Free
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-primary-foreground/80 text-sm">
            No credit card required. Start learning instantly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
