export interface UserAccount{
    id:string,
    balance:number,
    account_number:string
}

export interface UserDetails{
    id:string,
    name : string,
    email:string,
    image:string,
    Account:UserAccount
}
