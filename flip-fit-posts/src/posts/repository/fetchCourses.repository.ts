import { Injectable } from "@nestjs/common";
import { PostEntity } from "../models/post.entity";
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class FetchCoursesRepository {
    constructor(@InjectModel('Posts') private postModel: Model<PostEntity>){
        
    }

    async findAll(): Promise<PostEntity[]> {
        return this.postModel.find();
    }

}