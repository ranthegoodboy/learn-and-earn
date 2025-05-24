import { Level, PrismaClient } from "../generated/prisma";
import { coursesSeed } from "./seed-data-course";

const prisma = new PrismaClient();

async function seedCourses() {
  await prisma.$transaction(async (tx) => {
    console.log("Seeding courses...");
    for (const course of coursesSeed) {
      await tx.course.create({
        data: {
          id: course.id,
          userId: course.userId,
          title: course.title,
          description: course.description,
          category: course.category,
          image: course.image,
          price: course.price,
          level: course.level as Level,
          isPublished: course.isPublished,
          whatYouLearn: course.whatYouLearn,
          requirements: course.requirements,
          targetAudience: course.targetAudience,
          language: course.language,
          analytics: course.analytics,
          createdAt: course.createdAt,
          updatedAt: course.updatedAt,
        },
      });
    }
    console.log(`Successfully seeded ${coursesSeed.length} courses`);
  });
}

async function clearCourseData() {
  await prisma.comment.deleteMany({
    where: {
      chapters: {
        Section: {
          course: {
            id: {
              in: coursesSeed.map((course) => course.id),
            },
          },
        },
      },
    },
  });

  await prisma.chapter.deleteMany({
    where: {
      Section: {
        course: {
          id: {
            in: coursesSeed.map((course) => course.id),
          },
        },
      },
    },
  });

  await prisma.section.deleteMany({
    where: {
      course: {
        id: {
          in: coursesSeed.map((course) => course.id),
        },
      },
    },
  });

  await prisma.course.deleteMany({
    where: {
      id: {
        in: coursesSeed.map((course) => course.id),
      },
    },
  });
}

async function main() {
  try {
    await clearCourseData();

    await seedCourses();
    console.log("Course seeding completed successfully!");
  } catch (error) {
    console.error("Error seeding courses:", error);
    throw error;
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Course seeding process complete!");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
