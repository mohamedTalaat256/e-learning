import { Course } from "./course.model";

export interface Review{
    
    id:number,
    contentText: string,
    ratingValue: number,
    author?: any,
    createdAt?: string

}