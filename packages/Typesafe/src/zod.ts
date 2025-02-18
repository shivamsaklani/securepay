import {z} from "zod";
export const UserInput = z.object({
    username:z.string().min(1).max(50),
    email:z.string().email().max(50),
    password:z.string()
  });

export const UserLogin = z.object({
  email :z.string().email().max(50),
  password:z.string()
})