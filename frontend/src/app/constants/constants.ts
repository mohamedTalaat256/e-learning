import { Course } from "../model/course.model";
import { Lecture } from "../model/lecture.model";

export const baseURL = 'http://localhost:8090/api'
export const imagePlaceholder: string = '/assets/images/image_placeholder.png';
export const profileImagesUrls='http://localhost:8090/media/images/';
export const imagesUrls='http://localhost:8090/media/images/';
export const VIDEOS_URL='http://localhost:8090/media/videos/';
export const LECTURE_STREAM_URL= baseURL+'/lectures/stream/';

export enum adminUrls {
    dasboard = "/admin/dasboard",
    addCourse = "/admin/add-course",
};


export enum FormMode {
    CREATE, EDIT
}

export enum ReviewType {
    COURSE, LECTURE
}

export const dialog_w_md = '600px';
export const dialog_h_md = '650px';

export const dialog_w_lg = '900px';
export const dialog_h_lg = '90%';


export const EMPTY_PROFILE = {
    id: 0,
    username: null,
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    profileImage: null,
    dateOfBirth: null,
    nationality: null,
    organization: null,
    roles: [],
    enabled: false,
    accountNonExpired: false,
    credentialsNonExpired: false,
    accountNonLocked: false
};

export const EMPTY_COURSE:Course = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discount: 0,
    isCourseFree: false,
    rating: 0,
    enrolledStudents: [],
    enrolledStudentsCount: 0,
    coverImage: '',
    hours: 0,
    author:EMPTY_PROFILE
}

export const EMPTY_LECTUER:Lecture = {
    id:0,
    title: '',
    description: '',
    length: 0,
    coverImage: '',
    video: 0,
    course: EMPTY_COURSE,
    likesCount: 0,
    commentsCount: 0,
    lectureOrder: 1
}

export enum constant {
    CURRENT_LECTURE_INDEX = 'CURRENT_LECTURE_INDEX',

}

export enum Currency {
    EGY,USD

}