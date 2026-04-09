import Project from "../models/Project";

export const getProjects = async (req:any, res:any) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects" });
  }
};