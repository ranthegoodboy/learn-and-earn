"use client";

import { CardContent, CardFooter } from "@/components/ui/card";
import { MyCourseDetails } from "@/types";
import Image from "next/image";

const MyCourseCard = ({
  title,
  image,
  category,
  sections,
  isPublished,
  enrollments,
}: MyCourseDetails) => {
  return (
    <>
      <div className="relative">
        <Image
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          width={300}
          height={200}
          priority
        />
        <div
          className={`absolute top-3 right-3 text-white text-xs px-2 py-1 rounded-full ${
            isPublished ? "bg-accent" : "bg-muted"
          }`}
        >
          {isPublished ? "Published" : "Draft"}
        </div>
        <div className="absolute bottom-2 flex justify-between items-center">
          <span className="bg-secondary text-white px-2 py-1 text-xs font-medium">
            {category}
          </span>
        </div>
      </div>
      <CardContent className="p-4 flex-grow space-y-2">
        <h6 className="font-semibold">{title}</h6>
        <p className="text-sm text-foreground/80 line-clamp-2 mb-2">
          {enrollments.length} Students Enrolled
        </p>

        <div className="text-sm text-muted-foreground">
          {sections.length} sections,{" "}
          {sections.reduce(
            (total, section) => total + section.chapters.length,
            0
          )}{" "}
          chapters
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center p-4">
        <span className="italic text-xs">View Only</span>
      </CardFooter>
    </>
  );
};

export default MyCourseCard;
