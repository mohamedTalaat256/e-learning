
export const baseURL = 'http://localhost:8090/api'
export const imagePlaceholder: string = '/assets/images/image_placeholder.png';
export const profileImagesUrls='http://localhost:8090/media/'; 
export const imagesUrls='http://localhost:8090/media/'; 
export enum adminUrls {
    dasboard = "/admin/dasboard",
    addCourse = "/admin/add-course",
};


export enum FormMode {
    CREATE, EDIT
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
}