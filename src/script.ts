// 1
import { PrismaClient } from "@prisma/client";

// 2
const prisma = new PrismaClient();

// 3
async function main() {
    const allLinks = await prisma.link.findMany();
    console.log(allLinks);
}
// async function main() {
//     const allLinks = await prisma.link.create({ data: { description: 'description', url: 'url' } });
//     console.log(allLinks);
// }

// 4
main()
    .catch((e) => {
        throw e;
    })
    // 5
    .finally(async () => {
        await prisma.$disconnect();
    });