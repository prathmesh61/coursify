import mongoose from "mongoose";
const connectionString: string = process.env.MONGO!;
let isConnected: boolean;
export const ConnectionDB = async () => {
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    await mongoose.connect(connectionString);

    isConnected = true;
    console.log("Database connected successfully");
  } catch (error: any) {
    console.error("Error connecting to the database:", error.message);
    throw error;
  }
};
