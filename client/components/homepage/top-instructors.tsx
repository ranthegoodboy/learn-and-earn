import { Button } from "@/components/ui/button";
import Link from "next/link";
import InstructorCard from "./instructor-card";

// Sample data - would typically come from an API
const instructors = [
  {
    id: "1",
    name: "Dr. Robert Smith",
    expertise: "Data Science & Machine Learning",
    image: "https://i.pravatar.cc/300?img=11",
    courseCount: 12,
    studentCount: 56000,
    rating: 4.9,
  },
  {
    id: "2",
    name: "Jessica Williams",
    expertise: "Web Development & Programming",
    image: "https://i.pravatar.cc/300?img=26",
    courseCount: 8,
    studentCount: 42000,
    rating: 4.8,
  },
  {
    id: "3",
    name: "Mark Johnson",
    expertise: "Business & Leadership",
    image: "https://i.pravatar.cc/300?img=15",
    courseCount: 15,
    studentCount: 78000,
    rating: 4.7,
  },
  {
    id: "4",
    name: "Sophia Chen",
    expertise: "UI/UX & Graphic Design",
    image: "https://i.pravatar.cc/300?img=37",
    courseCount: 6,
    studentCount: 35000,
    rating: 4.9,
  },
];

const TopInstructors = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Meet Our Top Instructors</h2>
          <Link href="/instructors">
            <Button variant="ghost">View All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} {...instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;
