"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DEFAULT_LOGIN_ROUTE } from "@/config/routes";
import { ChevronRight, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Featured course data - typically would come from an API
const featuredCourses = [
  {
    id: "1",
    title: "Web Development Fundamentals",
    category: "Programming",
    rating: 4.9,
    price: 49.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description:
      "Learn HTML, CSS, and JavaScript to build responsive websites from scratch.",
    trendingReason: "650+ students enrolled this week",
  },
  {
    id: "2",
    title: "Data Science Essentials",
    category: "Data Science",
    rating: 4.8,
    price: 59.99,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    description:
      "Master Python, pandas and visualization techniques for data analysis.",
    trendingReason: "Top rated in Analytics category",
  },
  {
    id: "3",
    title: "UI/UX Design Masterclass",
    category: "Design",
    rating: 4.7,
    price: 69.99,
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    description: "Create stunning user interfaces and improve user experience.",
    trendingReason: "Featured in Design Weekly",
  },
];

const Hero = () => {
  return (
    <section className=" bg-primary py-10 text-primary-foreground relative overflow-hidden">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-12 h-full w-full opacity-20">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="border-r border-t border-white/10"></div>
          ))}
        </div>
      </div>

      {/* Moving dots overlay */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 15}s`,
              animationDelay: `${Math.random() * 5}s`,
              animation: "float 20s infinite linear",
            }}
          ></div>
        ))}
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Learn without <span className="text-secondary">limits</span>
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-md">
              Master new skills, advance your career, and explore your passion
              with our expert-led courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/courses">
                <Button size="default" className="w-full sm:w-auto">
                  Explore Courses
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  size="default"
                  variant="default"
                  className="w-full sm:w-auto bg-secondary hover:bg-accent cursor-pointer"
                >
                  Join for Free
                </Button>
              </Link>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Already have an account?{" "}
              <Link
                href={DEFAULT_LOGIN_ROUTE}
                className="underline hover:text-secondary"
              >
                Log in
              </Link>
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -top-4 -left-4 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>

            <div className="relative backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
              <div className="flex items-center justify-between p-4">
                <h3 className="text-base font-semibold flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-secondary" />
                  Trending Courses
                </h3>
                <Link
                  href="/courses"
                  className="text-sm text-secondary flex items-center"
                >
                  View all <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <Carousel className="w-full">
                <CarouselContent>
                  {featuredCourses.map((course) => (
                    <CarouselItem key={course.id}>
                      <div className="bg-white/5 backdrop-blur-md rounded-lg overflow-hidden shadow-lg border border-white/10">
                        <Image
                          src={course.image}
                          alt={course.title}
                          className="w-full h-40 object-cover"
                          width={500}
                          height={500}
                        />
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="bg-secondary/10 text-secondary px-2 py-0.5 rounded-full text-xs font-medium">
                              {course.category}
                            </span>
                            <div className="text-xs text-gray-300">
                              {course.rating} ★★★★★
                            </div>
                          </div>
                          <h3 className="text-base font-semibold text-white mb-1">
                            {course.title}
                          </h3>
                          <p className="text-xs text-gray-300 mb-3 line-clamp-2">
                            {course.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-bold text-white">
                              ${course.price}
                            </span>
                            <Button
                              size="sm"
                              variant="secondary"
                              className="text-xs py-1 px-2 h-auto"
                            >
                              Enroll Now
                            </Button>
                          </div>
                          <div className="mt-3 pt-2 border-t border-white/10">
                            <p className="text-xs text-secondary font-medium flex items-center gap-1">
                              <TrendingUp className="h-3 w-3" />
                              {course.trendingReason}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-end gap-1 mt-2">
                  <CarouselPrevious className="relative h-7 w-7 inset-auto transform-none translate-y-0 left-0" />
                  <CarouselNext className="relative h-7 w-7 inset-auto transform-none translate-y-0 right-0" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for moving dots */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(100px, 20px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
