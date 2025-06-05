"use client";

import { CardContent, CardFooter } from "@/components/ui/card";
import { useCoursesStore } from "@/stores/courses-store";
import { MyCourseDetails } from "@/types";
import Image from "next/image";
import { Button } from "./ui/button";

const MyCourseCard = ({
  id,
  title,
  image,
  category,
  sections,
  isPublished,
  enrollments,
  draftIndex,
}: MyCourseDetails & { draftIndex: number }) => {
  const { removeCourse, setActiveCourseIndex } = useCoursesStore(
    (state) => state
  );

  console.log("draftIndex", draftIndex);
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
            isPublished ? "bg-accent" : "bg-muted !text-gray-500"
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
          {enrollments?.length} Students Enrolled
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

      <CardFooter className="flex items-center p-4">
        {id ? (
          <div className="italic text-xs flex">View Only</div>
        ) : (
          <div className="flex gap-2">
            <Button
              onClick={() => setActiveCourseIndex(draftIndex)}
              className="bg-accent cursor-pointer hover:bg-accent/80"
            >
              Edit
            </Button>
            <Button
              onClick={() => removeCourse(draftIndex)}
              className=" bg-destructive cursor-pointer hover:bg-destructive/80"
            >
              Remove
            </Button>
          </div>
        )}
      </CardFooter>
    </>
  );
};

export default MyCourseCard;
