import { Card, CardContent } from "@/components/ui/card";
import { Award, Book, GraduationCap, Users } from "lucide-react";

const stats = [
  {
    id: 1,
    title: "Courses",
    value: "1,200+",
    description: "Expert-led courses across disciplines",
    icon: Book,
    color: "text-blue-500",
  },
  {
    id: 2,
    title: "Students",
    value: "850,000+",
    description: "Students worldwide",
    icon: Users,
    color: "text-purple-500",
  },
  {
    id: 3,
    title: "Instructors",
    value: "2,500+",
    description: "Top-rated industry experts",
    icon: GraduationCap,
    color: "text-amber-500",
  },
  {
    id: 4,
    title: "Certifications",
    value: "500,000+",
    description: "Certificates awarded",
    icon: Award,
    color: "text-green-500",
  },
];

const StatisticsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">LearnHub Impact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our growing community of learners and educators is making a
            difference worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.id} className="border text-center">
              <CardContent className="p-6">
                <div
                  className={`mx-auto w-12 h-12 rounded-full bg-opacity-10 flex items-center justify-center mb-4 ${stat.color.replace(
                    "text-",
                    "bg-"
                  )}/10`}
                >
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <div className="text-lg font-medium mb-2">{stat.title}</div>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
