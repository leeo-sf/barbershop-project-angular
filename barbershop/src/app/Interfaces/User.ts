import { Address } from "cluster";
import { Gender } from "./Gender";
import { Profile } from "./Profile";

export interface User {
    id?: number,
    name: string,
    cpf: string,
    telephone: string,
    birthDate: Date,
    profile_id: Profile,
    address_id: Address,
    genero: Gender
}