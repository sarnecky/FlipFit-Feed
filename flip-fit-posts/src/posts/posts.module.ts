import { MongooseModule } from "@nestjs/mongoose";
import { PostsSchema } from "./schemas/post.schema";
import { Module } from "@nestjs/common";
import { PostsController } from "./controllers/posts.controller";
import { FetchCoursesRepository } from "./repository/fetchCourses.repository";
import { CoursesRepository } from "./repository/coursesRepository.repository";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: "Posts", schema: PostsSchema }
        ])
    ],
    controllers: [
        PostsController
    ],
    providers: [
        FetchCoursesRepository,
        CoursesRepository
    ]
})
export class PostsModule {
    
}
