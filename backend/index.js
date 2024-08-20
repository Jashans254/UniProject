import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './database/db.js'
dotenv.config()
const app = express()
const port = process.env.PORT  
app.get('/' , (req , res) =>{
    res.send("Hello World")
})
app.use(express.json()); 
app.use(cookieParser());
// importing routes
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'
import cookieParser from 'cookie-parser'
app.use('/api/users' , userRoutes)
app.use('/api/auth' , authRoutes)
app.listen(port , ()=>{
    console.log(`Example app listening to http://localhost:${port}`)
    connectDb();
})