import mongoose from "mongoose";

import {ENV} from "./env.js";

export const connectDB = async() =>{
    try{
        if(!ENV_DB_URL){
            throw new Error("DB_URL is not defined in environment variable");
        }
        const conn = await mongoose.connect(ENV.DB_URL)
        console.log("Connected to MONGODB:", conn.connection.host);
    }catch{
        console.log("Error connecting the MongoDB");
        process.exit(1) //0 means success, 1 means failure
    }
} 