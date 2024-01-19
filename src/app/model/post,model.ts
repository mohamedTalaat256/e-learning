import { PostComment } from "./post_comment,model";
import { PostImage } from "./post_image,model";
import { User } from "./user,model";

export class Post{
    
    constructor(
        public id: number,
        public user: User,
        public date: string,
        public images: PostImage[],
        public caption: string,
        public likesCount: number,
        public commentCount: number,
        public recentComments: PostComment []
    ){}
}