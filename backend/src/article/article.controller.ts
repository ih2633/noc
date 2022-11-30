import { Controller, Get, Param, Post } from "@nestjs/common";

@Controller('article')
export class ArticleController {

  @Get()
  findAll(): string {
    return "All Article Get"
  }

  @Post()
  create(): string {
    return "Article Post"
  }

  @Get(":id")
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} article`;
  }
}