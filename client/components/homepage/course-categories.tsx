import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart2,
  BookOpen,
  Camera,
  Code,
  Languages,
  LineChart,
  Palette,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: "programming",
    name: "Programming",
    description: "Learn to code and build software",
    icon: Code,
    color: "bg-blue-100 text-blue-700",
    courses: 412,
  },
  {
    id: "design",
    name: "Design",
    description: "Master UI/UX and graphic design",
    icon: Palette,
    color: "bg-purple-100 text-purple-700",
    courses: 285,
  },
  {
    id: "business",
    name: "Business",
    description: "Develop leadership and business skills",
    icon: TrendingUp,
    color: "bg-amber-100 text-amber-700",
    courses: 342,
  },
  {
    id: "data-science",
    name: "Data Science",
    description: "Analyze data and create insights",
    icon: BarChart2,
    color: "bg-green-100 text-green-700",
    courses: 193,
  },
  {
    id: "languages",
    name: "Languages",
    description: "Learn a new language today",
    icon: Languages,
    color: "bg-red-100 text-red-700",
    courses: 157,
  },
  {
    id: "finance",
    name: "Finance",
    description: "Master personal and business finance",
    icon: LineChart,
    color: "bg-sky-100 text-sky-700",
    courses: 124,
  },
  {
    id: "photography",
    name: "Photography",
    description: "Capture stunning photos like a pro",
    icon: Camera,
    color: "bg-indigo-100 text-indigo-700",
    courses: 89,
  },
  {
    id: "education",
    name: "Education",
    description: "Enhance teaching and learning methods",
    icon: BookOpen,
    color: "bg-orange-100 text-orange-700",
    courses: 201,
  },
];

const CourseCategories = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our diverse range of courses across popular disciplines and
            find the perfect match for your learning goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link href={`/category/${category.id}`} key={category.id}>
              <Card className="transition-all hover:shadow-md hover:scale-[1.02] duration-300 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div
                    className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-4`}
                  >
                    <category.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <span className="text-xs font-medium bg-background rounded-full px-3 py-1">
                    {category.courses} courses
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
