import { PrismaClient } from "../generated/prisma";
import { usersSeed } from "./seed-data-user";

const prisma = new PrismaClient();

async function seedUsers() {
  await prisma.$transaction(async (tx) => {
    console.log("Seeding users...");
    for (const user of usersSeed) {
      await tx.user.create({
        data: {
          id: user.id,
          googleId: user.googleId,
          email: user.email,
          name: user.name,
          password: user.password,
          emailVerified: user.emailVerified,
          image: user.image,
          about: user.about,
          experinces: user.experinces || [],
          education: user.education || [],
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
    }
    console.log(`Successfully seeded ${usersSeed.length} users`);
  });
}

async function clearUserData() {
  await prisma.user.deleteMany({
    where: {
      id: {
        in: usersSeed.map((user) => user.id),
      },
    },
  });
}

async function main() {
  try {
    await clearUserData();
    await seedUsers();
    console.log("User seeding completed successfully!");
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("User seeding process complete!");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
