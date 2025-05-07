"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_routes_1 = __importDefault(require("./routes/todo.routes"));
//const router = Router();
const router = (0, express_1.Router)();
router.use('/todos', todo_routes_1.default);
exports.default = router;
