// NOTE: This file will show errors until you installed Prisma Client in your project.

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.post.count()
  console.log(`Here's the post count: ${result}`)
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.disconnect())
