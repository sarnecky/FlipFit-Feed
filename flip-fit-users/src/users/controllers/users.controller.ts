import { Controller, Get, Post } from "@nestjs/common";
import { UserEntity } from "../entities/user.entity";
import { FetchUsersRepository } from "../repositories/fetchUsers.repository";
import { UsersRepository } from "../repositories/users.repository";

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersRepository: UsersRepository, 
        private readonly fetchUsers: FetchUsersRepository) {}
        
    @Get()
    async feed(): Promise<UserEntity[]> {
        return this.fetchUsers.findAll();
    }

    @Post()
    async seed(): Promise<UserEntity[]> {
        this.usersRepository.seedUsers();
        return [];
    }
}