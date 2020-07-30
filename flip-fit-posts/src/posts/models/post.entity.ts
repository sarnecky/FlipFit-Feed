import { IsMongoId, IsString } from 'class-validator';

export class PostEntity {
    @IsString()
    @IsMongoId()
    _id: string;
    @IsString() image: string;
}