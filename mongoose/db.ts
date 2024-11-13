import mongoose from "mongoose";

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) throw new Error("MONGO_URI is not defined.");

// @ts-ignore
let cached = global.mongoose;

if (!cached) {
  // @ts-ignore
  cached = global.mongoose = { conn: null };
}

export const dbConnect = async () => {
  if (cached.conn) return cached.conn;

  cached.conn = await mongoose.connect(DATABASE_URL);
  console.log("MongoDB Connected");

  return cached.conn;
};
