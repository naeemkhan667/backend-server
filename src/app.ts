import dotenv from 'dotenv';
dotenv.config();
import express, { Application, Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import cors from 'cors';
//import rateLimit from 'express-rate-limit'; // Import rateLimit
import logger from './utils/logger.util'; // Import the configured logger
import responseMiddleware from './middlewares/response.middleware';
import errorHandler from './middlewares/error.middleware';
import notFoundMiddleware from './middlewares/notfound.middleware';
import apiLimiterMiddleware from './middlewares/ratelimiter.middleware';

//import todoRoutes from "./routes/todo.routes";

import api from './api.routes';

const app: Application = express();

// Use cors middleware
app.use(cors());

// Body parsing middleware
app.use(express.json()); // For parsing application/json

app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(responseMiddleware); // Apply response middleware
app.use(apiLimiterMiddleware); // Apply api limiter middleware

// mount routes here
//app.use('/api/v1', apiLimiter, require('./routes'));

app.use('/api', api);
//app.use('/api', todoRoutes);


app.get('/', (req: Request, res: Response) => {
  //res.success([], 'Successfully received a request');
  //res.success('Hello World!');
  res.success([], 200, 'message');

});
// mount routes here

app.use(notFoundMiddleware);
app.use(errorHandler as ErrorRequestHandler);

export default app;
