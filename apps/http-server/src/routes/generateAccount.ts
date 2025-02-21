import crypto from "crypto";

export const GenerateAccount = async ():Promise<string>=>{

    return crypto.randomInt(1000000000, 9999999999).toString();
}