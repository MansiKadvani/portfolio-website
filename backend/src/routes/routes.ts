import express from "express";
import { submitContact } from "../controllers/contactController";
import { getHero } from "../controllers/heroController";
import { getProjects } from "../controllers/projectController";


const router = express.Router();

router.post("/", submitContact);
router.get("/", getProjects);
router.get("/", getHero);

export default router;