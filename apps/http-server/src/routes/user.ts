import { Database } from "@repo/database/Database";
import { Request, Response, Router } from "express";
import { UserInput, UserLogin } from "@repo/typesafe/zodSchema";
import VerifyToken from "./verifytoken";
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



            const user = await Database.user.create({
                data: {
                    name: UserData.data.username,
                    email: UserData.data.email,
                    password: await bcrypt.hash(UserData.data.password, 10)
                }
            });
            const userAccount = await Database.account.create({
                data: {
                    userId: user.id,
                    balance: 0,
                }
            })
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
                token:token
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

router.get("/verifytoken", VerifyToken, (req: Request, res: Response) => {
    console.log(req.userId);
    res.json({
        mesg: "working fine"
    })
});



module.exports = router;