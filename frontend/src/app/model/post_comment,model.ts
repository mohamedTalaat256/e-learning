import { User } from "./user,model";

export class PostComment{
    
    constructor(
        public postId: number,
        public user: User,
        public comment: string,
        public createdAt: string,

    ){}
}