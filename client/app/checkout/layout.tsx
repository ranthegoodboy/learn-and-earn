import NavBar from "@/components/homepage/navbar";
import React from "react";

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      <div className="container">{children}</div>
    </div>
  );
};

export default SearchLayout;
