import FeaturedCourses from "@/components/homepage/featured-courses";
import Hero from "@/components/homepage/hero";
import React from "react";

const HomepageV2 = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedCourses />
      {/* <Categories /> */}
      {/* <StatisticsSection /> */}
      {/* <TestimonialSection /> */}
      {/* <TopInstructors /> */}
      {/* <CTASection /> */}
    </div>
  );
};

export default HomepageV2;
