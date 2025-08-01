import { PrismaClient } from "../generated/prisma";
import { usersSeed } from "./seed-data-user";

const prisma = new PrismaClient();

async function seedUsers() {
  await prisma.$transaction(async (tx) => {
    console.log("Seeding users...");
    // for (const user of usersSeed) {
    //   await tx.user.create({
    //     data: {
    //       id: user.id,
    //       googleId: user.googleId,
    //       email: user.email,
    //       name: user.name,
    //       password: user.password,
    //       emailVerified: user.emailVerified,
    //       image: user.image,
    //       about: user.about,
    //       experiences: user.experiences || [],
    //       education: user.education || [],
    //       createdAt: user.createdAt,
    //       updatedAt: user.updatedAt,
    //     },
    //   });
    // }
    await tx.user.create({
      data: {
        id: usersSeed[0].id,
        googleId: usersSeed[0].googleId,
        email: usersSeed[0].email,
        name: usersSeed[0].name,
        password: usersSeed[0].password,
        emailVerified: usersSeed[0].emailVerified,
        image: usersSeed[0].image,
        about: usersSeed[0].about,
        experiences: usersSeed[0].experiences || [],
        education: usersSeed[0].education || [],
        createdAt: usersSeed[0].createdAt,
        updatedAt: usersSeed[0].updatedAt,
      },
    });
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
    //await clearUserData();
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
