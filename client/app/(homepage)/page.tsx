import CourseCategories from "@/components/homepage/course-categories";
import CTASection from "@/components/homepage/cta-section";
import FeaturedCourses from "@/components/homepage/featured-courses";
import Hero from "@/components/homepage/hero";
import StatisticsSection from "@/components/homepage/statistic-section";
import TestimonialSection from "@/components/homepage/testimonials-section";
import TopInstructors from "@/components/homepage/top-instructors";
import React from "react";

const HomepageV2 = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedCourses />
      <CourseCategories />
      <StatisticsSection />
      <TestimonialSection />
      <TopInstructors />
      <CTASection />
    </div>
  );
};

export default HomepageV2;
