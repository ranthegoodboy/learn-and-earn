"use client";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { CourseOverview } from "@/types";
import Image from "next/image";

type courseCardProps = CourseOverview & {
  isFeatured?: boolean;
};

const CourseCard = ({
  title,
  author,
  description,
  image,
  category,
  price,
  sections,
  isFeatured = false,
}: courseCardProps) => {
  return (
    <>
      <div className="relative">
        <Image
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
          width={500}
          height={300}
          priority
        />

        {isFeatured && (
          <div className="absolute top-3 right-3 bg-secondary text-white text-xs px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      <CardContent className="px-5 flex-grow">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs font-medium">
            {category}
          </span>
          <div className="flex items-center gap-1">
            <span className="text-amber-500">★</span>
            <span className="text-sm font-medium">{`5.0`}</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        <p className="text-sm text-muted-foreground mb-2">
          by <span className="font-medium">{author.name}</span>
        </p>

        <p className="text-sm text-foreground/80 line-clamp-2 mb-2">
          {description}
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

      <CardFooter className="flex justify-between items-center p-5 pt-0">
        <div className="font-bold">
          {price === 0 ? "Free" : `$${price.toFixed(2)}`}
        </div>
        <Button
          variant={"default"}
          size="sm"
          className="cursor-pointer hover:bg-secondary"
        >
          View Details
        </Button>
      </CardFooter>
    </>
  );
};

export default CourseCard;
