//require('dotenv').config()
import dotenv from "dotenv";
import mongoose from "mongoose";
//import { DB_NAME } from "./constants.js";

import conectDB from "./db/index.js";
dotenv.config(
    {
        path: './.env'
    }
)



conectDB()


















/*
(async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch (error) {
        console.error("error:", error);
        throw err
        
    }
})()
*/
