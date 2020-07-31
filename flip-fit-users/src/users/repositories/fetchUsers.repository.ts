import { Injectable } from "@nestjs/common";
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import { UserEntity } from "../entities/user.entity";

@Injectable()
export class FetchUsersRepository {
    constructor(@InjectModel('Users') private userModel: Model<UserEntity>){
        
    }

    async findAll(): Promise<UserEntity[]> {
        return this.userModel.find();
    }

}