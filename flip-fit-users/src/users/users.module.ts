import { UsersRepository } from "./repositories/users.repository";
import { UsersController } from "./controllers/users.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersSchema } from "./schemas/users.schema";
import { FetchUsersRepository } from "./repositories/fetchUsers.repository";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: "Users", schema: UsersSchema }
        ])
    ],
    controllers: [
        UsersController
    ],
    providers: [
        FetchUsersRepository,
        UsersRepository
    ]
})
export class UsersModule {
    
}
