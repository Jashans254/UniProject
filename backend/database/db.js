import mongoose from "mongoose";

export const connectDb = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI , {
            dbName : "UniProject",
        });
        console.log("MongoDB connected");
    }catch(err){
        console.log(err);
    }
}