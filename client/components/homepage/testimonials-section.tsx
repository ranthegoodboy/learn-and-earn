"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=32",
    company: "Tech Innovators Inc.",
    quote:
      "LearnHub's web development courses transformed my career. The hands-on projects and expert guidance helped me land my dream job in just 6 months!",
  },
  {
    id: 2,
    name: "David Martinez",
    role: "Marketing Director",
    image: "https://i.pravatar.cc/150?img=68",
    company: "Global Marketing Solutions",
    quote:
      "The digital marketing courses are outstanding. I've applied the strategies I learned and have seen a 40% increase in our company's online engagement.",
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "UX Designer",
    image: "https://i.pravatar.cc/150?img=47",
    company: "Creative Design Studio",
    quote:
      "As someone transitioning careers, LearnHub's design courses gave me the skills and confidence to succeed. The instructor support is unmatched!",
  },
  {
    id: 4,
    name: "Michael Thompson",
    role: "Data Analyst",
    image: "https://i.pravatar.cc/150?img=12",
    company: "Data Insights Group",
    quote:
      "The data science curriculum is comprehensive and up-to-date. I went from knowing basic Excel to implementing machine learning models in production.",
  },
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Success stories from students who have transformed their careers
            through our platform.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border shadow-md bg-card">
            <CardContent className="p-8 sm:p-12">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex-shrink-0 flex justify-center">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="rounded-full w-24 h-24 object-cover border-4 border-secondary/30"
                    width={96}
                    height={96}
                  />
                </div>
                <div>
                  <blockquote className="text-lg italic mb-4">
                    {`"{testimonials[activeIndex].quote}"`}
                  </blockquote>
                  <div className="font-semibold text-lg">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[activeIndex].role} at{" "}
                    {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-secondary w-6"
                    : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="hidden sm:flex">
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-1/2 -left-12 transform -translate-y-1/2 rounded-full"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-1/2 -right-12 transform -translate-y-1/2 rounded-full"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="sm:hidden flex justify-center mt-6 gap-2">
          <Button variant="outline" size="icon" onClick={prevTestimonial}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextTestimonial}>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
