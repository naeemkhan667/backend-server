"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const apiLimiter = (0, express_rate_limit_1.default)({
    windowMs: 1 * 60 * 1000, // 15 minutes
    limit: 5, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes',
    standardHeaders: 'draft-7', // Send RateLimit headers in standard format
    legacyHeaders: false, // Disable legacy headers
    handler: (req, res) => {
        res.error('Too many requests, please try again later.', 429);
    },
});
exports.default = apiLimiter;
