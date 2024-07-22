import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config({
    path : '../../.env'
});
import { DB_NAME } from "../constants";

// require('dotenv').config({path:"../../.env"})


export const connectionDB = async ()=> {

    try {
        const connectionSting = await mongoose.connect("mongodb://localhost:27017/rohanDB")  // connection string
        console.log(`Database connected with HOST..! ${connectionSting.connection.host}`)  // to find host 

    } catch (error) {
        console.log(`DB connection error..! ${error}`)
    }
}