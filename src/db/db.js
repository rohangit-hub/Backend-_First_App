import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config({
    path : '../../env'
});
// import { DB_NAME } from "../constants";

// require('dotenv').config({path:"../../.env"})


const connectionDB = async ()=> {

    try {
        const connectionSting = await mongoose.connect(process.env.DB_CONNECTIO)  // connection string
        console.log(`Database connected with HOST..! ${connectionSting.connection.host}`)  // to find host 

    } catch (error) {
        console.log(`DB connection error..! ${error}`)
    }
}

export default connectionDB;