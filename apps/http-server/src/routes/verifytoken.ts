import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
const dotenv = require("dotenv");
dotenv.config();
export default function VerifyToken(req:Request,res:Response,next:NextFunction){

   const token = req.cookies?.jwtsecret;
   if(!token) {
    res.status(401).json("Unauthorized User");
   }
  try {
    const decoded =jwt.verify(token, process.env.JWT_SECRET as string);
    req.userId = (decoded as JwtPayload).id;
    if(!req.userId) return;
    next();
    return;
  } catch (error) {
    res.status(500).json({
        mesg:"Try again"
    });
    return;
  }
}