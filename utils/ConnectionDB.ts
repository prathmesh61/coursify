import mongoose from "mongoose";
const connectionString: string = process.env.MONGO!;
export const ConnectionDB = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};
