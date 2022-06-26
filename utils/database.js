import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Kuro32183:takumi32183@cluster0.n0iqqta.mongodb.net/appDataBase?retryWrites=true&w=majority"
    );
    console.log("Success: Connected to MongoDB");
  } catch (err) {
    console.log("Failure: Unconnected to MongoDB");
    throw new Error();
  }
};

export default connectDB;
