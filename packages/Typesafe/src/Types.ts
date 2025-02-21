export interface UserAccount{
    id:string,
    balance:number
}

export interface UserDetails{
    name : string,
    email:string,
    image:string,
    Account:UserAccount
}
