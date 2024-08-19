import mongoose from "mongoose";

// user Schema
const userSchema = new mongoose.Schema({
    firstName : {type: String , require : [true, "please enter the first name"] },
    lastName : {type: String , require : [true, "please enter the last name"] },
    email : {type: String , require : [true, "please enter the email"] },
    age : {type: Number},
    city : {type: String},
    address : {type: String},
    username:{type:String, require:true, unique:true},
    password:{type:String, require:true, unique:true},
    work: {type: String , enum : ["chef", 'waiter', 'manager'] , require : [true, "please enter "]}
});

// Modal 
// yaha userData hi tumhare collection ka name hai oor ye automatic DB me esse purular kr deta hai "
const userData = mongoose.model('userData', userSchema);
 export {userData}


/* 
{   "firstName" : "rohan",
    "lastName" : "tiwari",
    "email" : "rohantest@test.com",
    "age" : 24,
    "city" : "ballia",
    "address" : "sahatwar ballia",
    "work": "manager"
}
*/
