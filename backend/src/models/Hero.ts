import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
  name: String,
  title: String,
  description: String
});

export default mongoose.model("Hero", heroSchema);