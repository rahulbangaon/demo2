import mongoose from "mongoose";

const URI =
  "mongodb+srv://rahuljatbangaon:rahul99919@studentmanagement.c8yjvin.mongodb.net/?retryWrites=true&w=majority";

const Connection = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Server connected to database successfully");
  } catch (error) {
    console.log("Error while connecting to Mongodb ", error);
  }
};

export default Connection;
