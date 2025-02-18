import { Router } from "express";

const express = require("express");
const router = Router();

const user = require("./user");
const account = require("./Account");

router.use("/user",user);
router.use("/account",account);


module.exports= router;