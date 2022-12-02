import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ConfigModule } from "@nestjs/config"
import * as path from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ArticleController } from "./article/article.controller";
import { PostsModule } from "./components/posts/posts.module";
import { PrismaService } from "./prisma.service"

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      debug: true,
      playground: true,
    }),
    PostsModule,
    ConfigModule.forRoot({
      envFilePath: path.join(process.cwd(),".env.development.local")
    }),
  ],
  controllers: [AppController, ArticleController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
