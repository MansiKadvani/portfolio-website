"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitContact = void 0;
const Contact_1 = __importDefault(require("../models/Contact"));
const submitContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, message } = req.body;
        if (!name || name.length < 3) {
            return res.status(400).json({
                message: "Name must be at least 3 characters"
            });
        }
        const emailRegex = /\S+@\S+\.\S+/;
        if (!email || !emailRegex.test(email)) {
            return res.status(400).json({
                message: "Invalid email address"
            });
        }
        if (!message || message.length < 10) {
            return res.status(400).json({
                message: "Message must be at least 10 characters"
            });
        }
        const contact = new Contact_1.default({
            name,
            email,
            message
        });
        yield contact.save();
        res.status(200).json({
            message: "Message sent successfully"
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
});
exports.submitContact = submitContact;
