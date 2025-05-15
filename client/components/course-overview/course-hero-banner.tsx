"use client";
import EnrollmentButton from "@/components/course-overview/enrollment-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CourseOverview } from "@/types";
import Image from "next/image";

import {
  ArrowLeft,
  BookmarkPlus,
  BookOpen,
  CheckCircle,
  Clock,
  Heart,
  Share2,
  Star,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const CourseHeroBanner = ({ course }: { course: CourseOverview }) => {
  const [isSaved, setIsSaved] = useState(false);

  const courseRating = 5;
  const totalDuration =
    course.sections.reduce((total, section) => {
      const sectionMinutes = section.chapters.reduce((sum, chapter) => {
        return sum + chapter.videoLength;
      }, 0);
      return total + sectionMinutes;
    }, 0) / 60;
  const totalChapters = course.sections.reduce((total, section) => {
    return total + section.chapters.length;
  }, 0);

  return (
    <div className="bg-gradient-to-r from-primary/80 to-primary/40 text-white">
      <div className="container py-12">
        <Link
          href="/courses"
          className="inline-flex items-center text-white/90 mb-6 hover:text-white transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Browse All Courses
        </Link>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <Badge className="mb-3 bg-accent  font-medium text-white">
              {course.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {course.title}
            </h1>

            <p className="text-white/90 text-lg mb-6">{course.description}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
              <div className="flex items-center bg-white/20 px-3 py-1.5 rounded-full">
                <User className="mr-1.5 h-4 w-4" />
                <span>{100} students</span>
              </div>
              <div className="flex items-center bg-white/20 px-3 py-1.5 rounded-full text-amber-200">
                <Star className="mr-1.5 h-4 w-4 fill-amber-200" />
                <span>{courseRating} rating</span>
              </div>
              <div className="flex items-center bg-white/20 px-3 py-1.5 rounded-full">
                <Clock className="mr-1.5 h-4 w-4" />
                <span>{totalDuration.toFixed()} hours</span>
              </div>
              <div className="flex items-center bg-white/20 px-3 py-1.5 rounded-full">
                <BookOpen className="mr-1.5 h-4 w-4" />
                <span>{totalChapters} chapters</span>
              </div>
            </div>

            <div className="flex items-center">
              <Image
                src={course.author.image || ""}
                alt={course.author.name || ""}
                className="w-10 h-10 rounded-full object-cover mr-3"
                width={300}
                height={300}
              />
              <div>
                <p className="text-sm text-white/80">Created by</p>
                <Link
                  href={`/instructor/${course.author.id}`}
                  className="font-medium hover:underline"
                >
                  {course.author.name}
                </Link>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <Card className="overflow-hidden bg-white/10 backdrop-blur-lg border-white/20">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                  width={300}
                  height={300}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-3xl font-bold">
                    {course.price === 0
                      ? "Free"
                      : `$${course.price.toFixed(2)}`}
                  </div>
                </div>

                <div className="space-y-5">
                  <EnrollmentButton courseId={course.id} price={course.price} />

                  <div className="flex justify-between space-x-2">
                    <Button
                      variant="outline"
                      className="flex-1 bg-white/20 border-white/20 gap-2 hover:bg-white/30"
                      onClick={() => setIsSaved(!isSaved)}
                    >
                      {isSaved ? (
                        <Heart className="h-4 w-4 fill-red-500 stroke-red-500" />
                      ) : (
                        <BookmarkPlus className="h-4 w-4" />
                      )}
                      <span>{isSaved ? "Saved" : "Save"}</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 bg-white/20 border-white/20 gap-2 hover:bg-white/30"
                    >
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                  </div>

                  <div className="text-sm">
                    <div className="flex items-center gap-2 mb-1.5">
                      <CheckCircle className="h-4 w-4 text-emerald-300" />
                      <span>Full lifetime access</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <CheckCircle className="h-4 w-4 text-emerald-300" />
                      <span>Access on mobile and desktop</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-300" />
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeroBanner;
