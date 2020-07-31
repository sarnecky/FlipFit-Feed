import { IsMongoId, IsString } from 'class-validator';

export class UserEntity {
    @IsString()
    @IsMongoId()
    _id: string;
    @IsString() email: string;
}