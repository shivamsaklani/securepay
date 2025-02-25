import { Request, Response, Router } from "express";

const dotenv= require("dotenv");
const cors = require("cors");
const express = require("express");
const mainroute = require("./routes/mainroute");
dotenv.config();
const app = express();
const cookiePraser = require("cookie-parser");
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000", 
    credentials: true, 
  }));
app.use(cookiePraser());

app.use("/api/v1",mainroute);

const PORT =3001;
app.listen(PORT);
