// Creating Routs function in this file and exporting to other 
import {userData} from '../models/userData.js'

// GET
const get = (req,res)=>{
    res.send({"method":"GET"})
};


// POST
const post = async (req,res)=>{
    const user = new userData(req.body);
    await user.save()
    .then(()=>{
        res.json(user)

    }).catch(error,()=>{
        console.log(error)
    })
    
};


// DELETE
const del = (req,res)=>{
    res.send({"method":"DELETE"})
};


// PUT
const put = (req,res)=>{
    res.send({"method":"PUT"})
};


// PATCH
const patch = (req,res)=>{
    res.send({"method":"PATCH"})
}

export default {get,post,del,put,patch}