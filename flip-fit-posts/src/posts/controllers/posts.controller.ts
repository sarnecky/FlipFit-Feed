import { Controller, Get } from '@nestjs/common';
import { Post } from '../contracts/post.model';

@Controller('posts')
export class PostsController {

    @Get()
    async feed(): Promise<Post[]> {
        return [];
    }
}
