"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contactController_1 = require("../controllers/contactController");
const heroController_1 = require("../controllers/heroController");
const projectController_1 = require("../controllers/projectController");
const router = express_1.default.Router();
router.post("/", contactController_1.submitContact);
router.get("/", projectController_1.getProjects);
router.get("/", heroController_1.getHero);
exports.default = router;
