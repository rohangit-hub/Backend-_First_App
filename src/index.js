import { connectionDB } from './db/db.js';
import express from 'express'
const server = express(); // Creating the server by express


// create indirect routs by router() middleware 
const routes = express.Router();
server.use("/api/v1",routes);

// GET METHOD ROUTES
routes.get("/get",(req,res)=>{
    res.send({"method":"get"})
});



// DATABASE CONNECTION (ATLAS)
connectionDB()
.then(()=>{
    server.listen(process.env.PORT || 8080,()=>{
        console.log(`Server started at the port..! ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log(`Server not connected..! ${error}`)
})