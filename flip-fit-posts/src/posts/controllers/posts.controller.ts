import { Controller, Get, Post } from '@nestjs/common';
import { PostModel } from '../contracts/post.model';
import { CoursesRepository } from '../repository/courses.repository';
import { FetchCoursesRepository } from '../repository/fetchCourses.repository';
import { PostEntity } from '../models/post.entity';

@Controller('posts')
export class PostsController {

    constructor(
        private readonly courseRepository: CoursesRepository, 
        private readonly fetchCourses: FetchCoursesRepository) {}
        
    @Get()
    async feed(): Promise<PostEntity[]> {
        return this.fetchCourses.findAll();
    }

    @Post()
    async seed(): Promise<PostEntity[]> {
        this.courseRepository.seedPosts();
        return [];
    }
}
