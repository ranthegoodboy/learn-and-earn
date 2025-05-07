import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface InstructorCardProps {
  id: string;
  name: string;
  expertise: string;
  image: string;
  courseCount: number;
  studentCount: number;
  rating: number;
}

const InstructorCard = ({
  id,
  name,
  expertise,
  image,
  courseCount,
  studentCount,
  rating,
}: InstructorCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md duration-300">
      <CardContent className="p-0">
        <div className="aspect-[3/2] overflow-hidden">
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            height={220}
            width={330}
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-muted-foreground mb-3">{expertise}</p>

          <div className="flex justify-between text-sm mb-4">
            <div>
              <div className="font-medium">{courseCount}</div>
              <div className="text-muted-foreground">Courses</div>
            </div>
            <div>
              <div className="font-medium">{studentCount.toLocaleString()}</div>
              <div className="text-muted-foreground">Students</div>
            </div>
            <div>
              <div className="font-medium flex items-center">
                <span className="text-amber-500 mr-1">★</span> {rating}
              </div>
              <div className="text-muted-foreground">Rating</div>
            </div>
          </div>

          <Link href={`/instructor/${id}`}>
            <Button variant="outline" className="w-full">
              View Profile
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default InstructorCard;
