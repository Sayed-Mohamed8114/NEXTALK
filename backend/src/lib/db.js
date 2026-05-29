import mongoose from 'mongoose'; 
import dotenv from 'dotenv'; 
dotenv.config();

export const ConnectDB = async()=>{
    try{
        const conn =await mongoose.connect(process.env.MONGODB_URI);
        console.log(`connected on ${conn.connection.host}`)
    }catch(error){
        console.log(`error in connected to your db ${error}`);
        process.exit(1);
    }
}