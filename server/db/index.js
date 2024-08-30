import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URL}/${DB_NAME}`
    ).then(()=>{
        console.log("Data base connected");
    })
    .catch(()=>{
        console.log("error in connecting db");
    })
  } catch (error) {
    console.log("MONGODB Connection Failed", error);
    process.exit(1); // Exit the process if the connection fails
  }
};

export default connectDB;
