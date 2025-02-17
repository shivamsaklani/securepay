import {z} from "zod";
export const UserInput = z.object({
    username:z.string(),
    email:z.string().email(),
    password:z.string()
  })