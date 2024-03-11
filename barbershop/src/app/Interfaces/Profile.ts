import { AccountCategory } from "./AccountCategory";

export interface Profile {
    id: number,
    email: string,
    password: string,
    image: string,
    accountcategory_id: AccountCategory
}