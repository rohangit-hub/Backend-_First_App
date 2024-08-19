import passport from "passport";
import { Strategy } from 'passport-local';
import {userData} from "./models/userData.js";


passport.use ( new Strategy(async (user,pass,done)=>{
    try {
        //authentication logivc
    
        console.log(`received user = ${user} and pass = ${pass}`)
        const getuser = await userData.findOne({username : user})
        if(!getuser)
            return done(null , false, {message: "user not found..!"});
        
        const getpass = getuser.password === pass? true : console.log("password not found in user data");
        if(getpass){
            return done(null, getuser)
        }else{
            return done(null, false, {message: "password not found ..!"})
        }

    } catch (error) {
        return done(error)

    }
}))


export default passport;