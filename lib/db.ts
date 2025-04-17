// Import the PrismaClient class from Prisma
import { PrismaClient } from "@prisma/client";

// Add a type declaration to the global scope 
// This allows us to use globalThis.prisma without TypeScript errors
declare global {
  var prisma: PrismaClient | undefined;
}

// Export a singleton instance of PrismaClient
// This pattern prevents creating multiple instances during hot reloading in development
export const db = globalThis.prisma || new PrismaClient();

// In development, save the instance to the global object to reuse between hot reloads
// This prevents creating a new connection for every hot reload
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;