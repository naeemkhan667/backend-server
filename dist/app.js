"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const response_middleware_1 = __importDefault(require("./middlewares/response.middleware"));
const error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
const notfound_middleware_1 = __importDefault(require("./middlewares/notfound.middleware"));
const ratelimiter_middleware_1 = __importDefault(require("./middlewares/ratelimiter.middleware"));
//import todoRoutes from "./routes/todo.routes";
const api_routes_1 = __importDefault(require("./api.routes"));
const app = (0, express_1.default)();
// Use cors middleware
app.use((0, cors_1.default)());
// Body parsing middleware
app.use(express_1.default.json()); // For parsing application/json
app.use(express_1.default.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(response_middleware_1.default); // Apply response middleware
app.use(ratelimiter_middleware_1.default); // Apply api limiter middleware
// mount routes here
//app.use('/api/v1', apiLimiter, require('./routes'));
app.use('/api', api_routes_1.default);
//app.use('/api', todoRoutes);
app.get('/', (req, res) => {
    //res.success([], 'Successfully received a request');
    res.success('Hello World!');
});
// mount routes here
app.use(notfound_middleware_1.default);
app.use(error_middleware_1.default);
exports.default = app;
