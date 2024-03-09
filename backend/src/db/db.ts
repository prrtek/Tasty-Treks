import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log(
      `Connected to MongoDB ${mongoose.connection.host}:${mongoose.connection.port}/${mongoose.connection.name}`
    );
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

export default connection;
