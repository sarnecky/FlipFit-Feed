import { Injectable, Post } from "@nestjs/common";
import { PostEntity } from "../models/post.entity";
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class CoursesRepository {
    constructor(@InjectModel('Posts') private postModel: Model<PostEntity>){
        
    }
    
    async seedPosts() {
        this.postModel.insertMany([
            { image: 'https://p7.hiclipart.com/preview/506/731/756/paris-saint-germain-f-c-paris-saint-germain-academy-paris-fc-uefa-champions-league-france-ligue-1-fc-barcelona.jpg'},
            { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png'},
            { image: 'https://i.dlpng.com/static/png/5980996-real-madrid-club-football-logo-png-image-free-download-searchpngcom-real-madrid-logo-png-715_715_preview.png'}, 
            { image: 'https://c7.uihere.com/files/227/742/467/chelsea-f-c-logo-premier-league-emblem-organization-premier-league.jpg'},
            { image: 'https://angielskieespresso.pl/wp-content/uploads/2018/09/Bournemouth.png'},
            { image: 'https://toppng.com/uploads/preview/cardiff-city-fc-logo-vector-11573852807hw0vdbka4a.png'},
            { image: 'https://www.korporacyjnie.pl/wp-content/uploads/2015/05/steaua1.png'},
            { image: 'https://toppng.com/uploads/preview/liverpool-115360216332lcgvs9kms.png'},
            { image: 'https://toppng.com/uploads/preview/wisla-plock-sa-vector-logo-11574305217naliqidhjb.png'},
            { image: 'https://www.vhv.rs/dpng/d/86-862524_bayern-munich-hd-png-download.png'},
            { image: 'https://w0.pngwave.com/png/711/137/inter-milan-a-c-milan-serie-a-fc-internazionale-milano-football-ale-png-clip-art.png'}
         ], function(err, docs){});
    }
}