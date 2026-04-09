import express from "express";
import { getHero } from "../controllers/heroController";

const router = express.Router();
router.get("/", getHero);

export default router;