import { Request, Response, NextFunction } from 'express';
import { ErrorResponse } from '../interfaces/response.interface';
// import { error } from 'console';

// Define a basic interface for custom errors if needed,
// otherwise, use the built-in Error type.
interface CustomError extends Error {
  statusCode?: number;
  details?: any;
}

const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction): Response<ErrorResponse> | void => {

  console.error(err); // Log the error on the server side

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  const details = process.env.NODE_ENV === 'production' ? undefined : err.stack; // Avoid leaking stack trace in production

  // Check if headers have already been sent. If so, delegate to the default Express error handler.
  if (res.headersSent) {
    return next(err);
  }
  

   return res.status(statusCode).json({
    success: 'false',
    message,
    details,
    errorCode: statusCode,
  });
};

export default errorHandler;