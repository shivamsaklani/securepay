export interface UserAccount{
    id:string,
    balance:number,
    account_number:string
}

export interface UserDetails{
    name : string,
    email:string,
    image:string,
    Account:UserAccount
}
