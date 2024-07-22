import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config({
    path : '../../env'
});
import { DB_NAME } from "../constants";

// require('dotenv').config({path:"../../.env"})


const connectionDB = ()=> {

    try {
        const connectionSting = mongoose.connect(`${process.env.DB_CONNECTIO}${DB_NAME}`)  // connection string
        console.log(`Database connected with HOST..! ${connectionSting.connection.host}`)  // to find host 

    } catch (error) {
        console.log(`DB connection error..! ${error}`)
    }
}