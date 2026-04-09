"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const projectSchema = new mongoose_1.default.Schema({
    title: String,
    description: String,
    technologies: [String],
    github: String,
    demo: String
});
exports.default = mongoose_1.default.model("Project", projectSchema);
