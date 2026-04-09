import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  github: String,
  demo: String
});

export default mongoose.model("Project", projectSchema);