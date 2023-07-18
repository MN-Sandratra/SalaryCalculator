import mongoose from "mongoose";

export const connectMongoDB=async ()=>{
    try {
        if(mongoose.connection.readyState===0){
            await mongoose.connect(process.env.MONGO_URI);
            console.log("Connexion successful");
        }  
    } catch (error) {
        console.log(error)
    }
}