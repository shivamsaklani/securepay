import { Request, Response, Router } from "express";
import VerifyToken from "./verifytoken";
import { Database } from "@repo/database/Database";

const express = require("express");

const router = Router();


router.get("/balance",VerifyToken,async (req:Request,res:Response)=>{

    try {
       const amount= await Database.account.findFirst({
            where:{
                userId:Number(req.userId)
            }
        });
        res.status(200).json({
            mesg:"Get user Balance",
            balance:amount?.balance
        });
        return;
        
    } catch (e) {

        res.json({
            mesg:"Try again"
        });
        return;
        
    }

    
});

router.post("/transferfund",VerifyToken,async (req:Request,res:Response)=>{

    const {receiverid,sendamount} = req.body;
    const amount = Number(sendamount);

    if(amount<=0 || isNaN(amount) ){
        res.status(409).send("Please Enter the valid Amount");
        return;
    }
    try {
        const Reciever=  await Database.user.findFirst({
            where:{
                id:receiverid
            }
        });
        if(!Reciever) {
            res.status(404).json({
                mesg:"Receiver Not Exist"
            });
            return;
        }
        const Sender = await Database.account.findFirst({
            where:{
                userId:Number(req.userId)
            }
        });
        if(!Sender || Number(req.userId) == Reciever.id) {
            res.status(404).send("Please Check your Bank Details");
            return;
        }
        if(Sender.balance.toNumber()<amount){
            res.status(409).send("Sender don't have Enough Amount");
            return;
        }
        await Database.$transaction([

            Database.account.update({
                where:{
                    userId:Number(req.userId),
                },
                data:{
                    balance:{decrement:amount}
                }
            }),
            Database.account.update({
                where:{
                    userId:Number(Reciever?.id)
                },
                data:{
                    balance:{increment : amount}
                }
            })

        ]);

        res.status(200).json({
            mesg:"Funds transfered"
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mesg:"Try Again"
        });
        return;
    }

});

router.post("/topup",async (req:Request,res:Response)=>{
    const {sendamount,receiverid} =req.body;
    const amount = Number(sendamount);
    if(!amount || ! receiverid){
        res.status(404).send("Enter Proper Details");
        return;
    }
    try {
        const Receiver= await Database.user.findFirst({
        where:{
            id:receiverid
        }
        });
        if(!Receiver){
            res.status(404).send("User Doesn't Exit");
            return;
        }
        await  Database.account.update({
            where:{
                id:receiverid
            },
            data:{
                balance:{increment:amount}
            }
        });
        res.status(200).send(`Topup User with ${amount}`);
        return;
    } catch (e) {
        console.log(e);
        res.status(500).send("Try Again");
        return;
    }
});

module.exports = router;