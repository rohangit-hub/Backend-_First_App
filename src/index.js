import { connectionDB } from './db/db.js';
// import dotenv from "dotenv";
// dotenv.config({
//     path: '.env'
// });

import bodyParser from 'body-parser';

import express from 'express'
const server = express(); // Creating the server by express
server.use(bodyParser())

// create indirect routs by router() middleware 
const routes = express.Router();
server.use("/api/v1",routes);

// Importing routes function form routes.routes.js
import routesFunction from './routs/routs.js'


// ALL METHOD OF ROUTES (GET, POST, DELETE, PUT, PATCH)
routes.get("/get",routesFunction.get)

routes.post("/post",routesFunction.post)


routes.delete("/delete",routesFunction.del)
routes.put("/put",routesFunction.put)
routes.patch("/patch",routesFunction.patch)




// DATABASE CONNECTION (ATLAS)
connectionDB()
.then(()=>{
    // server listening here
    server.listen(process.env.PORT || 8080,()=>{
        console.log(`Server started at the port..! ${process.env.PORT} or 8080`)
    })
})
.catch((error)=>{
    console.log(`Server not connected..! ${error}`)
})