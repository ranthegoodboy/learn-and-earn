import { PrismaClient } from "../../generated/prisma";

// Prevent multiple instances of Prisma Client in development
declare global {
  var prisma: PrismaClient | undefined;
}

// Create a singleton instance of PrismaClient
export const db = global.prisma || new PrismaClient();

// In development, attach to global to prevent hot-reloading issues
if (process.env.NODE_ENV !== "production") global.prisma = db;
