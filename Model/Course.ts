import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: [true, "Course Name is required"],
      minlength: [12, "Course Name must be at least 15 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    banner: {
      type: String,
      requried: [true, "Banner is required"],
    },
    category: {
      type: String,
      requried: [true, "Category is required"],
    },
    price: {
      type: Number,
      requried: [true, "Price is required"],
    },
    autherID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
export const Course =
  mongoose.models.Course || mongoose.model("Course", CourseSchema);
