import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';
import { CommandModule } from 'nestjs-command';
@Module({
  imports: [
    PostsModule,
    CommandModule,
    MongooseModule.forRoot('mongodb://mongo:27017')
  ],
  controllers: [
    AppController
  ],
  providers: [AppService],
})
export class AppModule {}
