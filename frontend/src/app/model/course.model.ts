export interface Course{
    id: number,
    title: string,
    description: string,
    price: number,
    discount: number,
    isCourseFree: boolean,
    rating: number,
    enrolledStudents?: number,
    coverImage: string,
    hours?: number;

}