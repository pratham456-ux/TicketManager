import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config();

console.log("DB FILE IS LOADED SUCCESSFULLY");

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`MONGO DB CONNNECTED ${connectionInstance.connection.host}`);



    } catch (error) {
        console.log("ERROR OCCURED", error);
        process.exit(1)

    }
}
export default connectDB ;