"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseOverview } from "@/types";

import {
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  CreditCard,
  FileIcon,
  Play,
  Star,
  User,
} from "lucide-react";
import Image from "next/image";

import React, { useState } from "react";

const CourseOverviewContent = ({ course }: { course: CourseOverview }) => {
  const [activeTab, setActiveTab] = useState("overview");

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

  const completionPercentage = 34;
  const courseRating = 5;

  return (
    <div className="container py-8">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="sticky top-16 z-20 bg-background pt-4 pb-2">
          <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 space-x-8">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:font-bold data-[state=active]:border-b-gray-800 data-[state=active]:border-b-2 data-[state=active]:shadow-none rounded-none py-3 px-1 text-base cursor-pointer max-w-max"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="curriculum"
              className="data-[state=active]:font-bold data-[state=active]:border-b-gray-800 data-[state=active]:border-b-2 data-[state=active]:shadow-none rounded-none py-3 px-1 text-base cursor-pointer max-w-max"
            >
              Curriculum
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="data-[state=active]:font-bold data-[state=active]:border-b-gray-800 data-[state=active]:border-b-2 data-[state=active]:shadow-none rounded-none py-3 px-1 text-base cursor-pointer max-w-max"
            >
              Reviews
            </TabsTrigger>
            <TabsTrigger
              value="instructor"
              className="data-[state=active]:font-bold data-[state=active]:border-b-gray-800 data-[state=active]:border-b-2 data-[state=active]:shadow-none rounded-none py-3 px-1 text-base cursor-pointer max-w-max"
            >
              Instructor
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="py-6">
          <TabsContent value="overview" className="m-0 animate-in fade-in-50">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="bg-muted/30 p-6 rounded-lg mb-8 border border-border/50">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-amber-500" />
                    Your Learning Progress
                  </h2>
                  <Progress value={completionPercentage} className="h-2 mb-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{completionPercentage}% complete</span>
                    <span>
                      {Math.round(
                        (+totalDuration * completionPercentage) / 100
                      )}{" "}
                      min / {totalDuration.toFixed(0)} min
                    </span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">About this course</h2>
                <div className="text-muted-foreground whitespace-pre-line mb-8 leading-relaxed">
                  {course.description}
                </div>

                <div className="bg-muted/30 p-6 rounded-lg mb-8 border border-border/50">
                  <h3 className="text-xl font-semibold mb-4">
                    {`What you'll learn`}
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {course.whatYouLearn.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-3 mt-0.5 h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                  <ul className="space-y-3">
                    {course.requirements.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="sticky top-40">
                  <Card className="overflow-hidden border border-border/50 shadow-sm">
                    <div className="p-6 bg-muted/30">
                      <h3 className="font-semibold mb-2">
                        This course includes:
                      </h3>
                      <ul className="space-y-2.5 text-sm">
                        <li className="flex items-center gap-3">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {totalDuration.toFixed(0)} of on-demand video
                          </span>
                        </li>
                        <li className="flex items-center gap-3">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {totalChapters} chapters in {course.sections.length}{" "}
                            sections
                          </span>
                        </li>
                        <li className="flex items-center gap-3">
                          <FileIcon className="h-4 w-4 text-muted-foreground" />
                          <span>15 downloadable resources</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Award className="h-4 w-4 text-muted-foreground" />
                          <span>Certificate of completion</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CreditCard className="h-4 w-4 text-muted-foreground" />
                          <span>30-day money-back guarantee</span>
                        </li>
                      </ul>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="curriculum" className="m-0 animate-in fade-in-50">
            <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
              <div>
                {course.sections.length} sections • {totalChapters} chpaters •{" "}
                {totalDuration.toFixed(0)} hours total length
              </div>
              <Button variant="outline" size="sm">
                <CheckCircle className="mr-2 h-4 w-4" />
                Mark all as complete
              </Button>
            </div>

            <div className="space-y-4">
              {course.sections.map((section, sectionIndex) => (
                <Card
                  key={sectionIndex}
                  className="overflow-hidden shadow-sm border-border/50"
                >
                  <div className="bg-muted/30 p-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">
                        section {sectionIndex + 1}: {section.sectionTitle}
                      </h3>
                      <div className="text-sm text-muted-foreground mt-1">
                        {totalChapters} chapters • {totalChapters} min
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Expand
                    </Button>
                  </div>
                  <div className="divide-y divide-border/50">
                    {section.chapters.map((chapter, chapterIndex) => (
                      <div
                        key={chapterIndex}
                        className="p-4 flex justify-between items-center hover:bg-muted/20 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 text-xs font-medium">
                            {sectionIndex + 1}.{chapterIndex + 1}
                          </div>
                          <div>
                            <div>{chapter.title}</div>
                            <div className="text-sm text-muted-foreground mt-0.5 flex items-center gap-2">
                              <Clock className="h-3 w-3" />{" "}
                              {chapter.videoLength} min
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                        >
                          <Play className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="m-0 animate-in fade-in-50">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <Card className="p-6 border-border/50">
                  <div className="text-center mb-4">
                    <div className="text-5xl font-bold mb-1">
                      {courseRating}
                    </div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(courseRating)
                              ? "fill-amber-400 text-amber-400"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Course Rating
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((stars) => {
                      const percentage =
                        stars === 5
                          ? 78
                          : stars === 4
                          ? 15
                          : stars === 3
                          ? 5
                          : stars === 2
                          ? 2
                          : 0;

                      return (
                        <div key={stars} className="flex items-center text-sm">
                          <div className="w-12 flex items-center">
                            <Star className="h-3 w-3 mr-1 fill-amber-400 text-amber-400" />
                            <span>{stars}</span>
                          </div>
                          <div className="flex-1 mx-3">
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full bg-amber-400 rounded-full"
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="w-12 text-right text-muted-foreground">
                            {percentage}%
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </div>

              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Student Feedback</h2>

                <div className="space-y-6">
                  {[1, 2, 3].map((review) => (
                    <div
                      key={review}
                      className="border-b border-border/50 pb-6 last:border-0"
                    >
                      <div className="flex justify-between mb-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                            <User className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="font-medium">Student {review}</div>
                            <div className="text-xs text-muted-foreground">
                              2 weeks ago
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < 5
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-muted"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        This course exceeded my expectations. The instructor
                        explains complex concepts clearly, and the hands-on
                        projects really helped solidify my understanding. Highly
                        recommended for anyone looking to learn web development.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="instructor" className="m-0 animate-in fade-in-50">
            <h2 className="text-2xl font-bold mb-6">Meet Your Instructor</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="aspect-square max-w-xs overflow-hidden rounded-xl">
                  <Image
                    src={course.author.image as string}
                    alt={course.author.name || ""}
                    className="w-full h-full object-cover"
                    width={300}
                    height={300}
                  />
                </div>
              </div>

              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold">{course.author.name}</h3>
                <p className="text-muted-foreground mb-3">
                  Professional Web Developer & Instructor
                </p>

                <div className="flex flex-wrap gap-6 mb-6">
                  <div>
                    <div className="text-2xl font-bold">4.8</div>
                    <div className="text-sm text-muted-foreground">
                      Instructor Rating
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24</div>
                    <div className="text-sm text-muted-foreground">Courses</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">12,546</div>
                    <div className="text-sm text-muted-foreground">
                      Students
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">8,392</div>
                    <div className="text-sm text-muted-foreground">Reviews</div>
                  </div>
                </div>

                <h4 className="font-medium mb-2">About</h4>
                <p className="text-muted-foreground mb-6">
                  {`Professional web developer with 10+ years of experience in
              building commercial applications. Passionate about teaching
              and helping others achieve their coding goals. I've worked
              with companies like Google, Microsoft, and Amazon, and now
              I'm focused on sharing my knowledge with aspiring
              developers.`}
                </p>

                <Button variant="outline" className="gap-2">
                  <User className="h-4 w-4" />
                  View Profile
                </Button>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default CourseOverviewContent;
