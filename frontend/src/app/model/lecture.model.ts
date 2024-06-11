import { Course } from "./course.model";
import { Review } from "./courseReview.model";

export interface Lecture{

    id:number,
    title: string,
    description: string,
    length: number,
    coverImage: string,
    video: number,
    course ?:Course,
    lectureOrder?: number,
    reviews? : Review[],
    likesCount?: number,
    commentsCount?: number

}
