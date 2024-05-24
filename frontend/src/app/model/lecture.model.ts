import { Course } from "./course.model";

export interface Lecture{
    
    id:number,
    title: string,
    description: string,
    length: number,
    coverImage: string,
    video: number,
    course ?:Course,
    lectureOrder?: number

}