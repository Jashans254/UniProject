import { User } from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import TryCatch from "../utils/TryCatch.js";
import bcrypt from "bcrypt";
export const registerUser = TryCatch(async(req , res) =>{
    
    
    const {name , email , password } = req.body;

   

    if(!name || !email || !password){
        return res.status(400).json({
            message : "All fields are required"
        })
    }

    let user = await User.findOne({email});

    if(user){
        return res.status(400).json({
            message : "User already exists"
        })
    }

   

    const hashPassword = await bcrypt.hash(password , 10);

    
    user = await User.create({
        name ,
        email ,
        password : hashPassword ,
        
    })

    generateToken(user._id , res);

    res.status(201).json({
        message : "User created successfully" ,
        user ,
    })
})

export const loginUser = TryCatch(async(req , res) =>{
    const {email , password} = req.body;

    const user = await User.findOne({email});

    if(!user) {
        return res.status(400).json({
            message : "Invalid credentials",
        })
    }

    const comparePassword = await bcrypt.compare(password , user.password);

    if(!comparePassword){
        return res.status(400).json({
            message : "Invalid credentials",
        })
    }

    generateToken(user._id , res);

    res.json({
        message:"user logged in" ,
        user 
    })
})

export const logoutUser = TryCatch( (req , res) =>{
    res.cookie("token" , "" , {maxAge:0});

    res.json({
        message:"Logged out successfully"
    })
}
)