import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  errorFormat: "pretty",
  log: ["info", "warn", "error"],
  transactionOptions: {
    maxWait: 7_500,
    timeout: 15_000,
  },
});
