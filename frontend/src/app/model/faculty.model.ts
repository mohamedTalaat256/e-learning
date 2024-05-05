import { Sepicailization } from "./sepicailization.model";
import { University } from "./university.model";

export interface Faculty{
    id: number,
    sepicailization: Sepicailization,
    university: University

}