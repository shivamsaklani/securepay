import {Database} from "@repo/database/Database";
import { Request, Response } from "express";
import {UserInput} from "@repo/typesafe/zodSchema";
const cors=require("cors");
const express = require("express");
const dot=require("dotenv");
dot.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/",(req:Request,res:Response)=>{
    res.json(
    {
        message:"Server is running fine"
    }
    )
});
app.post("/signup",async (req:Request,res:Response)=>{

    
   const user = {
    username:req.body.username,
    password:req.body.password,
    email:req.body.email
   }
   console.log(user);
    const UserData = UserInput.safeParse(user);
    console.log(UserData);
    if(!UserData.success) {
      res.status(422).json({
        mesg:"Please Type correct Input"
      });
      return;
    }

 else{
  
      try {
       await  Database.user.create({
          data:{
            name:UserData.data.username,
            email:UserData.data.email,
            password:UserData.data.password
          }  
        });
        res.status(200).json({
          mesg:"User created"
        });
        return;
      } catch (e) {
  
        res.status(500).json({
          mesg:"Try Again"
        });
        return;
        
      }
      
}


})

app.listen(process.env.PORT);