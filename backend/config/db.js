import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kkesava493:X9XD6jtt3eQTnIbl@cluster0.5hwbqv5.mongodb.net/Food_Delivery_App').then(()=>console.log("DB Connected"));
}


