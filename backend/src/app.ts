import express from "express";
import cors from "cors";

import heroRoutes from "./routes/heroRoutes";
import projectRoutes from "./routes/projectRoutes";
import contactRoutes from "./routes/contactRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/hero", heroRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

export default app;