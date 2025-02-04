import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient();

async function main() {
    // ... you will write your Prisma Client queries here
}

main()
    .catch(async (e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prismaClient.$disconnect();
    });
