import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type CourseOverview as CourseOverviewType } from "@/types";
import { FileText } from "lucide-react";
import React from "react";

const CourseOverview = ({
  courseOverview,
}: {
  courseOverview: CourseOverviewType | undefined;
}) => {
  if (!courseOverview) {
    return null;
  }

  const { title, description, author, price, sections } = courseOverview;

  // Calculate total chapters and estimated duration
  const totalChapters = sections.reduce(
    (acc, section) => acc + section.chapters.length,
    0
  );

  return (
    <Card className="w-full flex flex-col overflow-hidden border-gray-200 rounded-lg shadow-sm">
      <CardHeader className="p-4 space-y-2 bg-gray-50">
        <CardTitle className="text-xl font-bold text-gray-800">
          {title}
        </CardTitle>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">By {author.name}</span>
          <span className="text-sm text-gray-600">
            | {totalChapters} chapters
          </span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto p-4 pt-2">
        <h3 className="font-medium text-sm text-gray-700 mb-3">
          Course Content
        </h3>
        <Accordion type="multiple" className="w-full space-y-2">
          {sections.map((section, index) => (
            <AccordionItem
              key={index + section.sectionTitle}
              value={`section-${index}`}
              className="border border-gray-200 rounded-md overflow-hidden"
            >
              <AccordionTrigger className="p-3 bg-gray-50 hover:bg-gray-100 hover:no-underline">
                <div className="flex flex-col w-full pr-2">
                  <span className="text-sm font-medium text-gray-800">
                    {section.sectionTitle}
                  </span>
                  <span className="text-xs text-gray-500">
                    {section.chapters.length} chapters
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-0 pt-1">
                <div className="bg-white">
                  {section.chapters.map((chapter, chapterIndex) => (
                    <div
                      key={chapter.title + chapterIndex}
                      className="flex items-center justify-between py-2 px-3 text-sm hover:bg-gray-50 rounded-sm cursor-pointer"
                    >
                      <div className="flex items-center gap-2 max-w-[70%]">
                        <FileText className="h-4 w-4 text-gray-400" />
                        <span className="truncate text-gray-700">
                          {chapter.title}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 whitespace-nowrap">
                        ~{chapter.videoLength} min
                      </span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>

      <CardFooter className="mt-auto p-4 pt-3 border-t border-gray-200 flex justify-between items-center">
        <div className="font-bold text-xl text-indigo-600">
          {price === 0 ? "Free" : `$${price.toFixed(2)}`}
        </div>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseOverview;
