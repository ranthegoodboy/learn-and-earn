import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseOverviewCard = ({
  courseOverview,
  isShowEnrollButton = true,
}: {
  courseOverview: CourseOverviewType | undefined;
  isShowEnrollButton?: boolean;
  isShowPricingCard?: boolean;
}) => {
  if (!courseOverview) {
    return null;
  }

  const { title, description, author, price, sections, image } = courseOverview;

  const totalChapters = sections.reduce(
    (acc, section) => acc + section.chapters.length,
    0
  );

  return (
    <div className="space-y-5">
      <Card className="w-full flex flex-col overflow-hidden border-gray-300 rounded-lg shadow-sm py-0 gap-0 p-6">
        <CardHeader className="p-4">
          <Image src={image} alt={title} width={500} height={300} />
          <CardTitle className="text-xl font-bold text-gray-800 mt-4">
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

        <CardContent className="flex-1 overflow-y-auto px-4 pb-4">
          <h3 className="font-medium text-sm text-gray-700 mb-1">
            Course Content
          </h3>
          <Accordion type="multiple" className="w-full space-y-2">
            {sections.map((section, index) => (
              <AccordionItem
                key={index + section.sectionTitle}
                value={`section-${index}`}
                className="border border-gray-200 rounded-md overflow-hidden"
              >
                <AccordionTrigger className="p-3 bg-gray-100 rounded-none hover:bg-gray-200 hover:no-underline">
                  <div className="flex flex-col w-full pr-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="text-sm font-medium text-gray-800 truncate max-w-[300px]">
                            {section.sectionTitle}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p> {section.sectionTitle}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-0 pt-1">
                  <div className="bg-white">
                    {section.chapters.map((chapter, chapterIndex) => (
                      <div
                        key={chapter.title + chapterIndex}
                        className="flex items-center justify-between py-2 px-3 text-sm hover:bg-gray-50 rounded-none cursor-pointer"
                      >
                        <div className="flex items-center gap-2 max-w-[70%]">
                          <div>
                            <FileText className="!h-4 !w-4 text-gray-400" />
                          </div>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="truncate text-gray-700">
                                  {chapter.title}
                                </span>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p> {chapter.title}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
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

        {isShowEnrollButton && (
          <CardFooter className="mt-auto p-4 pt-3 flex justify-between items-center">
            <div className="font-bold text-xl text-indigo-600">
              {price === 0 ? "Free" : `$${price.toFixed(2)}`}
            </div>
            <Link href={`/checkout?courseId=${courseOverview.id}&step=${2}`}>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer">
                Enroll Now
              </Button>
            </Link>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default CourseOverviewCard;
