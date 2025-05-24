import { type CourseOverview } from "@/types";
import { Separator } from "@radix-ui/react-separator";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const PriceDetails = ({ course }: { course: CourseOverview }) => {
  return (
    <Card className="w-full max-h-max overflow-hidden border-gray-300 rounded-lg shadow-sm py-0 gap-0 p-6">
      <CardHeader className="p-4">
        <CardTitle className="text-xl font-bold text-gray-800">
          Price Details (1 item)
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 px-4 pb-4">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-sm text-gray-700 mb-1">
            1x {course.title}
          </h3>
          <div className="text-sm font-bold">${course.price}</div>
        </div>
        <Separator
          orientation="horizontal"
          className="text-gray-400 w-full bg-sidebar-border h-[2px] mt-5 mb-3"
        />
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-sm text-gray-700 mb-1">
            Total Amount
          </h3>
          <div className="text-sm font-bold">${course.price}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceDetails;
