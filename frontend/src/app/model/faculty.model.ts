import { AcademicSepicailization } from "./academic-sepicailization.model";
import { University } from "./university.model";

export interface Faculty{
    id: number,
    sepicailization: AcademicSepicailization,
    university: University

}