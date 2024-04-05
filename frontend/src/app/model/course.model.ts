export interface Course{
    title: string,
    describtion: string,
    price: number,
    discount: number,
    isFree: boolean,
    rating: number,
    enrolledStudents?: number,
    image: string

}