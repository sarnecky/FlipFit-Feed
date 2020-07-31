import { Injectable, Post } from "@nestjs/common";
import { Model } from 'mongoose';
import { UserEntity } from "../entities/user.entity";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class UsersRepository {
    constructor(@InjectModel('Users') private userModel: Model<UserEntity>){
        
    }
    
    async seedUsers() {
        this.userModel.insertMany([
            { email: "john@gmail.com" },
            { email: "steven@gmail.com" },
            { email: "tanja@gmail.com" },
            { email: "sebastian@gmail.com" },
         ], function(err, docs){});
    }
}