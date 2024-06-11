import { Course } from "./course.model";

export interface StudentCourse{
    id: number,
    course: Course,
    enrolledAt: string,
    progress: number,
}