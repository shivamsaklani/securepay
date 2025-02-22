import { Database } from "@repo/database/Database";
import { Request, Response, Router } from "express";
import { UserInput, UserLogin } from "@repo/typesafe/zodSchema";
import VerifyToken from "./verifytoken";
import { GenerateAccount } from "./generateAccount";
const dot = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const router = Router();


dot.config();


router.get("/", (req: Request, res: Response) => {
    res.json(
        {
            message: "Server is running fine"
        }
    )
});
router.post("/signup", async (req: Request, res: Response) => {


    const user = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }

    const UserData = UserInput.safeParse(user);
    if (!UserData.success) {
        res.status(422).json({
            mesg: "Please Type correct Input"
        });
        return;
    }


    else {



        try {

            const existinguser = await Database.user.findFirst({
                where: {
                    email: UserData.data.email
                }
            });

            if (existinguser) {
                res.json({
                    mesg: "user exist Please login"
                });
                return;

            }
            
            const {userdetails,userAccount}= await Database.$transaction(async (prisma)=>{
                const userdetails = await prisma.user.create({
                    data: {
                        name: UserData.data.username,
                        email: UserData.data.email,
                        password: await bcrypt.hash(UserData.data.password, 10)
                    }
                });
                let account=await GenerateAccount();
                let userAccount;
                try {
                     userAccount = await prisma.account.create({
                        data: {
    
                            userId: userdetails.id,
                            balance:0,
                            account_number:account
                        }
                    });
                } catch (error:any) {
                    if (error.code === "P2002") { // Prisma unique constraint violation
                        account = await GenerateAccount();
                        userAccount = await prisma.account.create({
                            data: {
                                userId: userdetails.id,
                                balance: 0,
                                account_number: account
                            }
                        });
                    } else {
                        throw error;
                    }
                    
                }
                return {userdetails,userAccount}
            });


            
            res.status(200).json({
                mesg: "New User created",
                balance: userAccount.balance
            });
            return;
        } catch (e) {
            res.status(500).json({
                mesg: "server is down Please Try Again"
            });

            return;

        }



    }


});

router.post("/signin", async (req: Request, res: Response) => {
    let existinguser;

    const user = {
        password: req.body.password,
        email: req.body.email
    }

    const UserData = UserLogin.safeParse(user);
    if (!UserData.success) {
        res.status(422).json({
            mesg: "Please Type correct Input"
        });
        return;
    }
    try {
        existinguser = await Database.user.findFirst({
            where: {
                email: UserData.data.email,

            }
        });
        if (!existinguser) {
            res.status(401).json({
                mesg: "Unauthorized User"
            });
            return;
        }
        const hasedpassword = (await bcrypt.compare(UserData.data.password, existinguser.password));
        if (!hasedpassword) {
            console.log(existinguser.password);

            res.status(401).json({
                mesg: "Incorrect Password"
            });
            return;
        }
        else {
            const token = jwt.sign({id:existinguser.id,email:existinguser.email}, process.env.JWT_SECRET as string,{ expiresIn: "1h" });
            res.cookie("jwtsecret",token);
            res.status(200).json({
                mesg:"SignIn Successful",

            });
            return;
        }
    } catch (error) {
        res.status(500).json({
            mesg: "Try again"
        });
        return;
    }

});

router.get("/allusers", VerifyToken,async (req: Request, res: Response) => {
  try {
      const Response = await Database.user.findMany({
        select:{
            id:true,
            email:true,
            name:true,
            image:true,
            Account:true
        }
      });
      res.status(200).json({
        users:Response
      })
      return;
  } catch (error) {
    res.status(500).send("No user Exist");
    return;
  }
});

router.get("/getuser/:userid",async (req:Request,res:Response)=>{
    let response;
    const id = Number(req.params.userid);
    if(!id){
        res.status(404).send("please give id"); return;
    }
    else{
        try {
             response = await Database.user.findFirst({
                where:{
                    id:id
                },
                select:{
                    email:true,
                    name:true,
                    Account:true,
                    id:true,
                    image:true
                },
                
            });
            if(!response) {
                res.status(404).send("No user found");
                return ;
            }
            res.status(200).json({
                userdetails:response.name,
                Account: response.Account
            });
        } catch (error) {
           res.status(500).send("Try Again");
           return;
        }     
    }

});

router.get("/currentuser",VerifyToken, async (req:Request,res:Response)=>{
        const id = req.userId;
       
        try {
            const response = await Database.user.findFirst({
                where:{
                    id:Number(id)
                },
                select:{
                    email:true,
                    name:true,
                    Account:true,
                    id:true,
                    image:true
                },
            });

            res.status(200).json({
                response
            });
            return;
        } catch (error) {

            res.status(500).send("Try Again");
            return;
            
        }

        
});



module.exports = router;