import Footer from "@/components/homepage/footer";
import NavBar from "@/components/homepage/navbar";
import React from "react";

const CourseOverviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default CourseOverviewLayout;
