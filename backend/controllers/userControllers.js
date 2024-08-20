import {User} from "../models/userModel.js";
import bcrypt from "bcrypt";
import TryCatch from "../utils/TryCatch.js";
export const myProfile = TryCatch( async(req , res)=>{
    const user = await  User.findById(req.user._id).select("-password");
    res.json(user)
})

export const userProfile = TryCatch( async(req , res)=>{
    const user = await User.findById(req.params.id).select("-password");

    if(!user){
        return res.status(404).json({
            message : "No user with this id",
        });
    }
    res.json(user)
})




export const updateProfile = TryCatch(async(req , res)=>{

    const user = await User.findById(req.user._id);

    const {name} = req.body;

    if(name){
        user.name = name;
    }
    
    await user.save();

    res.json({
        message : "Profile Updated"
    })
})

export const updatePassword = TryCatch(async(req , res)=>{

    const user = await User.findById(req.user._id);

    const {oldPassword , newPassword} = req.body

    const comparePassword = await bcrypt.compare(oldPassword , user.password);

    if(!comparePassword){
        return res.status(400).json({
            message : "Wrong old password",
        })
    }
    user.password = await bcrypt.hash(newPassword , 10);
    await user.save();

    res.json({
        message: "Password Updated"
    })
})

export const getAllUsers = TryCatch( async(req , res)=>{

    const search = req.query.search || "";
    console.log("search : " , search)
    const users = await User.find({
        name:{
            $regex : search ,
            $options : "i"
        } ,
        _id : {$ne : req.user._id}
        
    }).select("-password");
    res.json(users)
})