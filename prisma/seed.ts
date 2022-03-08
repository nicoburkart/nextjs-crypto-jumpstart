// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: 'hello',
        email: `nicolas@gmail.com`,
        pubAddrs: '0xF3B4f467CdB68C56041b840683c5C2AFD87F2726',
        role: 'ADMIN',
      },
      {
        name: 'hello2',
        email: `nicolas1@gmail.com`,
        pubAddrs: '0xF3B4f467CdB68C56041b840683c5C2AFD87F2727',
        role: 'ADMIN',
      },
      {
        name: 'hello3',
        email: `nicolas2@gmail.com`,
        pubAddrs: '0xF3B4f467CdB68C56041b840683c5C2AFD87F2728',
        role: 'ADMIN',
      },
      {
        name: 'hello4',
        email: `nicolas3@gmail.com`,
        pubAddrs: '0xF3B4f467CdB68C56041b840683c5C2AFD87F2729',
        role: 'ADMIN',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
