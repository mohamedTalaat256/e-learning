import { Course } from "./course.model";

export interface CourseReview{
    
    id:number,
    contentText: string,
    ratingValue: number,
    author?: any,

}