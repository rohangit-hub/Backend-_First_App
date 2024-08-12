// require('dotenv').config({path: "../../.env"})
//mongodb://localhost:27017/rohanDB

import mongoose from "mongoose";
import {DB_CONNECTION_ATLAS} from '../constants.js'
import dotenv from "dotenv";
dotenv.config({
    path: '.env'
});


const connectionDB = async ()=> {

    try {
        console.log(process.env.PORT)
        // const connectionString = await mongoose.connect(`${process.env.DB_CONNECTION_COMPASS}`)  // connection string COMPASS LOCALHOST
        const connectionString = await mongoose.connect(DB_CONNECTION_ATLAS)  // connection string ATLAS
        console.log(`Database connected with HOST..! ${connectionString.connection.host}`)  // to find host 

    } catch (error) {
        console.log(`Database connection error..! ${error}`)
        console.log(`Database connecting with..! ${process.env.DB_CONNECTION_ATLAS}`)
    }
}

export {connectionDB};