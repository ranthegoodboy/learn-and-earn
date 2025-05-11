"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCourses } from "@/hooks/course/use-courses";
import { CourseOverview } from "@/types";
import { TrendingUp } from "lucide-react";
import Link from "next/link";
import { CourseGridSkeleton } from "../skeletons/course-grid-skeleton";
import CourseCard from "./course-card";

const FeaturedCourses = () => {
  const { data, isLoading } = useCourses();
  const courses = data?.data as CourseOverview[];

  if (isLoading) {
    return <CourseGridSkeleton count={3} />;
  }

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <Carousel
          className="w-full"
          opts={{
            loop: true,
          }}
        >
          <div className="relative flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-secondary h-6 w-6" />
              <h2 className="text-3xl font-bold">Trending Courses</h2>
            </div>
            <div className="flex items-center gap-2 absolute right-0">
              <CarouselPrevious className="hidden sm:flex absolute -left-30 rounded-md h-10 w-10 cursor-pointer" />
              <CarouselNext className="hidden sm:flex absolute right-30 rounded-md h-10 w-10 cursor-pointer" />
              <Link href="/courses">
                <Button variant="ghost">View All</Button>
              </Link>
            </div>
          </div>

          <CarouselContent className="-ml-1">
            {courses?.map((course) => (
              <CarouselItem
                key={course.id}
                className="pl-1 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="flex flex-col h-full p-1">
                  <CourseCard {...course} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedCourses;
