import mongoose from "mongoose";

const collection = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    colors: [
      {
        name: String,
        title: String,
      },
    ],
  },
  { timestamps: true }
);

export const Collection =
  mongoose.models.Collection || mongoose.model("Collection", collection);
