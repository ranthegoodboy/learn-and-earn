import { PrismaClient } from "../generated/prisma";
import { coursesSeed } from "./seed-data-course";
import { chaptersSeed, sectionsSeed } from "./seed-data-section-chapter";

const prisma = new PrismaClient();

async function seedSectionsAndChapters() {
  await prisma.$transaction(async (tx) => {
    console.log("Seeding sections...");
    for (const section of sectionsSeed) {
      await tx.section.create({
        data: {
          id: section.id,
          sectionTitle: section.sectionTitle,
          sectionDescription: section.sectionDescription,
          courseId: section.courseId,
        },
      });
    }
    console.log(`Successfully seeded ${sectionsSeed.length} sections`);

    console.log("Seeding chapters...");
    for (const chapter of chaptersSeed) {
      await tx.chapter.create({
        data: {
          id: chapter.id,
          type: chapter.type,
          title: chapter.title,
          content: chapter.content,
          videoLength: chapter.videoLength,
          videoUrl: chapter.videoUrl,
          videoUniqueId: chapter.videoUniqueId,
          videoType: chapter.videoType,
          sectionId: chapter.sectionId,
        },
      });
    }
    console.log(`Successfully seeded ${chaptersSeed.length} chapters`);
  });
}

async function clearSectionAndChapterData() {
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
}

async function main() {
  try {
    await clearSectionAndChapterData();
    await seedSectionsAndChapters();
    console.log("Section and chapter seeding completed successfully!");
  } catch (error) {
    console.error("Error seeding sections and chapters:", error);
    throw error;
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Section and chapter seeding process complete!");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
