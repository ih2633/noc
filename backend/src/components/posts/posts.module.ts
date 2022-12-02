import { Module } from '@nestjs/common';
import { PostsResolver } from "./post.resolvers";
import { PrismaService } from "@/prisma.service";

@Module({
  imports: [],
  providers: [PostsResolver, PrismaService],
})
export class PostsModule {}
