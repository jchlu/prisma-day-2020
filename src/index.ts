// NOTE: This file will show errors until you installed Prisma Client in your project.

import { PrismaClient, Post } from '@prisma/client'

const prisma = new PrismaClient()

const countPosts = async () => {
  return await prisma.post.count()
}

const findManyPosts = async (authorId?: string) => {
  if (authorId) {
    return await prisma.post.findMany({
      where: {
        author: authorId
      }
    })
  }
  return await prisma.post.findMany()
}

const main = async () => {
  const result: number = await countPosts()
  // const posts: Post[] = await findManyPosts()
  const authorPosts: Post[] = await findManyPosts('ckbmq7zyk00fm0727bq3yr6vt')
  console.log(`Here is the post count: ${result}`)
  console.dir(authorPosts)
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.disconnect())
