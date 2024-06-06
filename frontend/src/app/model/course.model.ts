import { Review } from "./courseReview.model";

export interface Course{
    id: number,
    title: string,
    description: string,
    price: number,
    discount: number,
    isCourseFree: boolean,
    rating: number,
    enrolledStudents?: any[],
    enrolledStudentsCount?: number,
    coverImage: string,
    hours?: number;
    author?:any,
    lecturesCount?: number,
    reviews?: Review[],
    isEnrolled? :boolean

}