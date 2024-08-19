// Creating Routs function in this file and exporting to other 
import {userData} from '../models/userData.js'


// GET
const get = (req,res)=>{
    res.send({"method":"GET"})
};


// POST
const post = async (req,res)=>{
    const user = new userData(req.body);
    // const user = new userData;
    // user.firstName = "rohan",
    // user.lastName ="tiwari",
    // user.email ="rohantest@test.com",
    // user.age =24,
    // user.city  ="ballia",
    // user.address  ="sahatwar ballia",
    // user.work ="manager"
    // user.save()
    // console.log("user data", user)
    await user.save()
    .then((user)=>{
        res.json(user)

    }).catch((error)=>{
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