import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/controllers/posts.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
     MongooseModule.forRoot('mongodb://mongo:27017')
  ],
  controllers: [
    AppController,
    PostsController
  ],
  providers: [AppService],
})
export class AppModule {}
