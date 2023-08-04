import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  isSeller: {
    type: Boolean,
    default: false,
  },
  courses: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  },
  PurchasedCourses: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  },
});
export const User = mongoose.models.User || mongoose.model("User", UserSchema);
